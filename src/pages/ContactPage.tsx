import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContentFromCSV } from '@/hooks/useContentFromCSV';

export const ContactPage = () => {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(language === 'en' ? 'Message sent successfully!' : 'ההודעה נשלחה בהצלחה!');
    }, 1000);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('contactUs')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contactInfo')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {language === 'en' ? 'Get in Touch' : 'צרו קשר'}
              </h2>
              <p className="text-muted-foreground mb-8">
                {language === 'en' 
                  ? 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
                  : 'נשמח לשמוע מכם. שלחו לנו הודעה ואנחנו נענה בהקדם האפשרי.'
                }
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center p-6">
                  <Mail className={`h-5 w-5 text-primary ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <h3 className="font-semibold">
                      {language === 'en' ? 'Email' : 'אימייל'}
                    </h3>
                    <p className="text-muted-foreground">{getContent('contact', 'email')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-6">
                  <Phone className={`h-5 w-5 text-primary ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <h3 className="font-semibold">
                      {language === 'en' ? 'Phone - Dafna' : 'טלפון - דפנה'}
                    </h3>
                    <p className="text-muted-foreground">{getContent('contact', 'phone_dafna')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-6">
                  <Phone className={`h-5 w-5 text-primary ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <h3 className="font-semibold">
                      {language === 'en' ? 'Phone - Khatiya' : 'טלפון - כתיה'}
                    </h3>
                    <p className="text-muted-foreground">{getContent('contact', 'phone_khatiya')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-6">
                  <MessageCircle className={`h-5 w-5 text-primary ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <h3 className="font-semibold">
                      {language === 'en' ? 'WhatsApp' : 'וואטסאפ'}
                    </h3>
                    <p className="text-muted-foreground">{getContent('contact', 'whatsapp_available')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-6">
                  <MapPin className={`h-5 w-5 text-primary ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <h3 className="font-semibold">
                      {language === 'en' ? 'Pickup Locations' : 'נקודות איסוף'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en' ? 'Multiple locations available' : 'נקודות איסוף מרובות זמינות'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Business Hours' : 'שעות פעילות'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{language === 'en' ? 'Sunday - Thursday' : 'ראשון - חמישי'}</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{language === 'en' ? 'Friday' : 'שישי'}</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{language === 'en' ? 'Saturday' : 'שבת'}</span>
                  <span>{language === 'en' ? 'Closed' : 'סגור'}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Send us a message' : 'שלחו לנו הודעה'}</CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? 'Fill out the form below and we\'ll get back to you soon.'
                  : 'מלאו את הטופס למטה ונחזור אליכם בקרוב.'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      {language === 'en' ? 'First Name' : 'שם פרטי'}
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder={language === 'en' ? 'John' : 'יוחנן'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      {language === 'en' ? 'Last Name' : 'שם משפחה'}
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder={language === 'en' ? 'Doe' : 'כהן'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={language === 'en' ? 'john@example.com' : 'yohanan@example.com'}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {language === 'en' ? 'Phone (Optional)' : 'טלפון (אופציונלי)'}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={language === 'en' ? '+972-50-123-4567' : '050-123-4567'}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {language === 'en' ? 'Subject' : 'נושא'}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder={language === 'en' ? 'Product inquiry' : 'פנייה לגבי מוצר'}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={language === 'en' 
                      ? 'Tell us about your inquiry...'
                      : 'ספרו לנו על הפנייה שלכם...'
                    }
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className={`w-full ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isSubmitting ? (
                    language === 'en' ? 'Sending...' : 'שולח...'
                  ) : (
                    <>
                      <Send className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('send')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {language === 'en' ? 'Frequently Asked Questions' : 'שאלות נפוצות'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === 'en' ? 'Do you ship nationwide?' : 'האם אתם מספקים לכל הארץ?'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Yes, we ship all our products nationwide. Delivery usually takes 2-3 business days.'
                    : 'כן, אנחנו מספקים את כל המוצרים שלנו לכל רחבי הארץ. המשלוח בדרך כלל לוקח 2-3 ימי עסקים.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === 'en' ? 'Are your products certified kosher?' : 'האם המוצרים שלכם כשרים?'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Yes, all our products are certified kosher under strict rabbinical supervision.'
                    : 'כן, כל המוצרים שלנו כשרים בהשגחה רבנית מהודרת.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === 'en' ? 'What is your return policy?' : 'מה מדיניות ההחזרות שלכם?'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'We offer a satisfaction guarantee. If you\'re not happy with your purchase, contact us within 7 days.'
                    : 'אנחנו מציעים ערבות שביעות רצון. אם אתם לא מרוצים מהרכישה, פנו אלינו תוך 7 ימים.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === 'en' ? 'Do you offer bulk pricing?' : 'האם אתם מציעים מחירים לכמויות?'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Yes, we offer special pricing for bulk orders. Contact us for a custom quote.'
                    : 'כן, אנחנו מציעים מחירים מיוחדים לכמויות. צרו קשר לקבלת הצעת מחיר מותאמת.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};