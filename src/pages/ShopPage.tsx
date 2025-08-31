import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProductsFromCSV } from '@/hooks/useProductsFromCSV';

export const ShopPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { products, loading, error } = useProductsFromCSV();

  const categories = [
    { id: 'all', name: language === 'en' ? 'All Products' : 'כל המוצרים' },
    { id: 'cheese', name: language === 'en' ? 'Cheese' : 'גבינות' },
    { id: 'yogurt', name: language === 'en' ? 'Yogurt' : 'יוגורט' },
    { id: 'spread', name: language === 'en' ? 'Spreads' : 'ממרחים' },
    { id: 'butter', name: language === 'en' ? 'Butter' : 'חמאה' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-lg">
              {language === 'en' ? 'Loading products...' : 'טוען מוצרים...'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-500">
            <div className="text-lg">
              {language === 'en' ? 'Error loading products' : 'שגיאה בטעינת המוצרים'}
            </div>
            <p className="text-sm mt-2">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('shop')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Explore our complete collection of artisanal vegan dairy products, crafted with love and the finest organic ingredients.'
              : 'גלו את הקולקציה המלאה שלנו של מוצרי חלב טבעוניים מלאכותיים, שנוצרו באהבה ומהמרכיבים האורגניים הטובים ביותר.'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              className="mb-2"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-1">{product.name[language]}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                  {product.description[language]}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-3">
                      {product.nutrition.calories} cal
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Button asChild size="sm" className="flex-1">
                      <Link to={`/product/${product.id}`}>
                        {t('viewProduct')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for Filtered Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl opacity-20 mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">
              {language === 'en' ? 'No products found' : 'לא נמצאו מוצרים'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' ? 'Try selecting a different category' : 'נסו לבחור קטגוריה אחרת'}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Questions about our products?' : 'יש שאלות על המוצרים שלנו?'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'Get in touch with our team for personalized recommendations and bulk orders.'
              : 'צרו קשר עם הצוות שלנו להמלצות מותאמות אישית והזמנות כמות.'
            }
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">{t('contactUs')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};