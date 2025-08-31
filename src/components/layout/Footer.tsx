import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">Bikurim</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              {t('heroDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('shop')}</h3>
            <div className="space-y-2">
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground block">
                {t('products')}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-2">
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground block">
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </div>

        <div className={`
          flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t
          ${isRTL ? 'sm:flex-row-reverse' : ''}
        `}>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bikurim. {t('allRightsReserved')}.
          </p>
          <div className={`
            flex space-x-4 mt-4 sm:mt-0
            ${isRTL ? 'space-x-reverse' : ''}
          `}>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              {t('privacyPolicy')}
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              {t('termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};