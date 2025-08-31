export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    shop: 'Shop',
    contact: 'Contact',
    language: 'עברית',
    
    // Homepage
    welcome: 'Welcome to Bikurim',
    tagline: 'Premium Vegan Products for a Better Tomorrow',
    heroDescription: 'Discover our range of artisanal vegan dairy alternatives, crafted with love and the finest ingredients.',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    
    // About
    ourStory: 'Our Story',
    aboutDescription: 'At Bikurim, we believe in creating delicious, sustainable alternatives to traditional dairy products. Our journey began with a simple mission: to provide healthy, environmentally-friendly options without compromising on taste.',
    
    // Shop
    products: 'Products',
    price: 'Price',
    viewProduct: 'View Product',
    
    // Contact
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    contactInfo: 'Get in touch with us for any questions or inquiries.',
    
    // Product details
    description: 'Description',
    ingredients: 'Ingredients',
    nutrition: 'Nutrition Facts',
    backToShop: 'Back to Shop',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  he: {
    // Navigation
    home: 'בית',
    about: 'אודות',
    shop: 'חנות',
    contact: 'צור קשר',
    language: 'English',
    
    // Homepage
    welcome: 'ברוכים הבאים לביכורים',
    tagline: 'מוצרים טבעוניים איכותיים למחר טוב יותר',
    heroDescription: 'גלו את מגוון תחליפי החלב הטבעוניים המלאכותיים שלנו, שנוצרו באהבה ומהמרכיבים הטובים ביותר.',
    shopNow: 'קנה עכשיו',
    learnMore: 'למד עוד',
    
    // About
    ourStory: 'הסיפור שלנו',
    aboutDescription: 'בביכורים, אנחנו מאמינים ביצירת אלטרנטיבות טעימות ובנות קיימא למוצרי חלב מסורתיים. המסע שלנו התחיל עם משימה פשוטה: לספק אפשרויות בריאות וידידותיות לסביבה מבלי לוותר על הטעם.',
    
    // Shop
    products: 'מוצרים',
    price: 'מחיר',
    viewProduct: 'צפה במוצר',
    
    // Contact
    contactUs: 'צור קשר',
    name: 'שם',
    email: 'אימייל',
    message: 'הודעה',
    send: 'שלח הודעה',
    contactInfo: 'צרו איתנו קשר לכל שאלה או פנייה.',
    
    // Product details
    description: 'תיאור',
    ingredients: 'רכיבים',
    nutrition: 'ערכים תזונתיים',
    backToShop: 'חזור לחנות',
    
    // Footer
    allRightsReserved: 'כל הזכויות שמורות',
    privacyPolicy: 'מדיניות פרטיות',
    termsOfService: 'תנאי שירות',
  },
};

export type TranslationKeys = keyof typeof translations.en;