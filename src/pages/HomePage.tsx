import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProductsFromCSV } from '@/hooks/useProductsFromCSV';
import { useContentFromCSV } from '@/hooks/useContentFromCSV';

export const HomePage = () => {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const { products, loading: productsLoading, error: productsError } = useProductsFromCSV();
  const { getContent, loading: contentLoading, error: contentError } = useContentFromCSV();

  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  if (productsLoading || contentLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="h-16 w-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 h-16 w-16 border-4 border-transparent border-t-emerald-400 rounded-full animate-spin mx-auto" style={{animationDelay: '-0.5s'}}></div>
          </div>
          <div className="text-lg font-semibold text-gray-700">
            {language === 'en' ? 'Loading our delicious products...' : 'טוען את המוצרים הטעימים שלנו...'}
          </div>
          <div className="text-sm text-gray-500">
            {language === 'en' ? 'Please wait a moment' : 'אנא המתן רגע'}
          </div>
        </div>
      </div>
    );
  }

  if (productsError || contentError) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md mx-auto p-8 bg-red-50 rounded-xl border border-red-200">
          <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-red-600 text-2xl">⚠</span>
          </div>
          <div className="text-lg font-semibold text-red-800">
            {language === 'en' ? 'Unable to load content' : 'לא ניתן לטעון את התוכן'}
          </div>
          <div className="text-sm text-red-600">
            {language === 'en' ? 'Please refresh the page or try again later' : 'אנא רענן את הדף או נסה שוב מאוחר יותר'}
          </div>
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            {language === 'en' ? 'Refresh Page' : 'רענן דף'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
              {getContent('homepage', 'title')}
            </h1>
            <div className="max-w-2xl mx-auto space-y-4 mb-10">
              <p className="text-xl font-semibold text-green-800 mb-6">
                {getContent('homepage', 'tagline')}
              </p>
              <p className="text-lg text-gray-700 font-medium bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                {getContent('homepage', 'subtitle')}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {getContent('homepage', 'description1')}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {getContent('homepage', 'description2')}
              </p>
            </div>
            <div className={`
              flex flex-col sm:flex-row gap-4 justify-center
              ${isRTL ? 'sm:flex-row-reverse' : ''}
            `}>
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/shop">{t('shopNow')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/about">{t('learnMore')}</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{getContent('homepage', 'healthier_title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getContent('homepage', 'healthier_description')}
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg overflow-hidden relative group">
                  <img 
                    src={product.image} 
                    alt={product.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">{product.name[language]}</CardTitle>
                  <CardDescription className="line-clamp-2 text-gray-600 leading-relaxed">
                    {product.description[language]}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 pt-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                      {language === 'en' ? '100% Vegan' : '100% טבעוני'}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                      {language === 'en' ? 'Dairy Free' : 'ללא חלב'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center text-2xl font-semibold text-primary">
                      {language === 'en' ? 'Contact for Pricing' : 'צור קשר למחיר'}
                    </div>
                    <div className="text-center">
                      <Button asChild size="sm" className="w-full">
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
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/shop">
                {language === 'en' ? 'View All Products' : 'צפה בכל המוצרים'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">{t('ourStory')}</h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('aboutDescription')}
            </p>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/about">{t('learnMore')}</Link>
            </Button>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};