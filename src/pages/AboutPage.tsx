import { useLanguage } from '@/contexts/LanguageContext';
import { useContentFromCSV } from '@/hooks/useContentFromCSV';

export const AboutPage = () => {
  const { language } = useLanguage();
  const { getContent, loading, error } = useContentFromCSV();

  if (loading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-lg">
            {language === 'en' ? 'Loading...' : 'טוען...'}
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
            {language === 'en' ? 'Error loading content' : 'שגיאה בטעינת התוכן'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">{getContent('about', 'title')}</h1>
          
          {/* Hero Image Placeholder */}
          <div className="aspect-video bg-muted rounded-lg mb-12 flex items-center justify-center">
            <div className="text-8xl opacity-20">🌱</div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {getContent('about', 'who_we_are')}
              </p>
              
              <h2 className="text-2xl font-semibold">{getContent('about', 'our_story_title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {getContent('about', 'our_story')}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {getContent('about', 'goal')}
              </p>
              
              <div className="text-center py-8 border-t border-b">
                <p className="text-lg italic text-muted-foreground">
                  {getContent('about', 'signature')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};