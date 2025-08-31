import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProductsFromCSV } from '@/hooks/useProductsFromCSV';

export const ProductPage = () => {
  const { productId } = useParams();
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const { products, loading, error } = useProductsFromCSV();

  const product = products.find(p => p.id === productId);

  if (loading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-lg">
            {language === 'en' ? 'Loading product...' : 'טוען מוצר...'}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-500">
            {language === 'en' ? 'Error loading product' : 'שגיאה בטעינת המוצר'}
          </div>
          <Button asChild className="mt-4">
            <Link to="/shop">{t('backToShop')}</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Product Not Found' : 'המוצר לא נמצא'}
          </h1>
          <Button asChild>
            <Link to="/shop">{t('backToShop')}</Link>
          </Button>
        </div>
      </div>
    );
  }


  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className={`mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <Link to="/shop">
            <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180 ml-2' : 'mr-2'}`} />
            {t('backToShop')}
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-6">
              <img 
                src={product.image} 
                alt={product.name[language]}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-muted rounded border-2 border-transparent hover:border-primary cursor-pointer overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${product.name[language]} view ${index + 1}`}
                    className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name[language]}</h1>
              <p className="text-xl text-muted-foreground">
                {language === 'en' ? `${product.category.charAt(0).toUpperCase() + product.category.slice(1)}` : 
                  product.category === 'cheese' ? 'גבינה' :
                  product.category === 'yogurt' ? 'יוגורט' :
                  product.category === 'spread' ? 'ממרח' : 'חמאה'}
              </p>
            </div>


            <p className="text-lg leading-relaxed text-muted-foreground">
              {product.description[language]}
            </p>


            {/* Product Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {/* Ingredients */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('ingredients')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {product.ingredients[language].map((ingredient, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {ingredient}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Nutrition */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('nutrition')}</CardTitle>
                  <CardDescription>
                    {language === 'en' ? 'Per 100g serving' : 'לכל 100 גרם'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-sm">{language === 'en' ? 'Calories' : 'קלוריות'}</span>
                    <span className="text-sm font-medium">{product.nutrition.calories}</span>
                  </div>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-sm">{language === 'en' ? 'Protein' : 'חלבון'}</span>
                    <span className="text-sm font-medium">{product.nutrition.protein}g</span>
                  </div>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-sm">{language === 'en' ? 'Fat' : 'שומן'}</span>
                    <span className="text-sm font-medium">{product.nutrition.fat}g</span>
                  </div>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-sm">{language === 'en' ? 'Carbs' : 'פחמימות'}</span>
                    <span className="text-sm font-medium">{product.nutrition.carbs}g</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === 'en' ? 'Product Information' : 'מידע על המוצר'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• {language === 'en' ? 'Made with organic ingredients' : 'עשוי ממרכיבים אורגניים'}</p>
                <p>• {language === 'en' ? 'Dairy-free and vegan' : 'ללא חלב וטבעוני'}</p>
                <p>• {language === 'en' ? 'No artificial preservatives' : 'ללא חומרים משמרים מלאכותיים'}</p>
                <p>• {language === 'en' ? 'Refrigerate after opening' : 'יש לקרר לאחר פתיחה'}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'en' ? 'You might also like' : 'ייתכן שגם תאהבו'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedProduct.name[language]}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {relatedProduct.description[language]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Button asChild size="sm">
                        <Link to={`/product/${relatedProduct.id}`}>
                          {t('viewProduct')}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};