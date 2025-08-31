export interface Product {
  id: string;
  name: {
    en: string;
    he: string;
  };
  description: {
    en: string;
    he: string;
  };
  price: number;
  currency: string;
  image: string;
  images: string[];
  ingredients: {
    en: string[];
    he: string[];
  };
  nutrition: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  category: string;
}

export const products: Product[] = [
  {
    id: 'almond-cheese-mild',
    name: {
      en: 'Almond Cheese - Mild',
      he: 'גבינת שקדים - עדין'
    },
    description: {
      en: 'Our signature mild almond cheese, perfect for sandwiches and snacking. Made with organic almonds and aged to perfection.',
      he: 'גבינת השקדים העדינה שלנו, מושלמת לכריכים ונשנוש. עשויה משקדים אורגניים ומותסת למושלמות.'
    },
    price: 35,
    currency: '₪',
    image: '/images/products/general-products.jpeg',
    images: ['/images/products/general-products.jpeg'],
    ingredients: {
      en: ['Organic Almonds', 'Sea Salt', 'Lemon Juice', 'Nutritional Yeast', 'Herbs'],
      he: ['שקדים אורגניים', 'מלח ים', 'מיץ לימון', 'שמרים תזונתיים', 'עשבי תיבול']
    },
    nutrition: {
      calories: 180,
      protein: 8,
      fat: 15,
      carbs: 6
    },
    category: 'cheese'
  },
  {
    id: 'cashew-spread',
    name: {
      en: 'Cashew Spread',
      he: 'ממרח קשיו'
    },
    description: {
      en: 'Creamy and rich cashew spread, perfect for toast and crackers. Made with premium cashews and a hint of herbs.',
      he: 'ממרח קשיו קרמי ועשיר, מושלם לטוסט וקרקרים. עשוי מקשיו איכותי ורמז של עשבי תיבול.'
    },
    price: 28,
    currency: '₪',
    image: '/images/products/general-products.jpeg',
    images: ['/images/products/general-products.jpeg'],
    ingredients: {
      en: ['Organic Cashews', 'Olive Oil', 'Garlic', 'Herbs', 'Sea Salt'],
      he: ['קשיו אורגני', 'שמן זית', 'שום', 'עשבי תיבול', 'מלח ים']
    },
    nutrition: {
      calories: 160,
      protein: 5,
      fat: 14,
      carbs: 8
    },
    category: 'spread'
  },
  {
    id: 'vegan-butter',
    name: {
      en: 'Vegan Butter',
      he: 'חמאה טבעונית'
    },
    description: {
      en: 'Rich and creamy vegan butter made from coconut oil and cashews. Perfect for baking and cooking.',
      he: 'חמאה טבעונית עשירה וקרמית העשויה משמן קוקוס וקשיו. מושלמת לאפייה ובישול.'
    },
    price: 32,
    currency: '₪',
    image: '/images/products/general-products.jpeg',
    images: ['/images/products/general-products.jpeg'],
    ingredients: {
      en: ['Coconut Oil', 'Cashews', 'Apple Cider Vinegar', 'Sea Salt', 'Natural Flavor'],
      he: ['שמן קוקוס', 'קשיו', 'חומץ תפוחים', 'מלח ים', 'טעם טבעי']
    },
    nutrition: {
      calories: 200,
      protein: 2,
      fat: 22,
      carbs: 1
    },
    category: 'butter'
  },
  {
    id: 'almond-yogurt-plain',
    name: {
      en: 'Almond Yogurt - Plain',
      he: 'יוגורט שקדים - רגיל'
    },
    description: {
      en: 'Smooth and creamy plain almond yogurt, perfect as a base for smoothies or enjoyed on its own.',
      he: 'יוגורט שקדים רגיל חלק וקרמי, מושלם כבסיס לסמוזי או להנאה בפני עצמו.'
    },
    price: 22,
    currency: '₪',
    image: '/images/products/almond-yogurt-plain.jpeg',
    images: ['/images/products/almond-yogurt-plain.jpeg'],
    ingredients: {
      en: ['Organic Almonds', 'Water', 'Live Cultures', 'Sea Salt'],
      he: ['שקדים אורגניים', 'מים', 'תרביות חיות', 'מלח ים']
    },
    nutrition: {
      calories: 120,
      protein: 6,
      fat: 9,
      carbs: 4
    },
    category: 'yogurt'
  },
  {
    id: 'parmesan-cheese',
    name: {
      en: 'Vegan Parmesan',
      he: 'פרמזן טבעוני'
    },
    description: {
      en: 'Aged vegan parmesan with a sharp, nutty flavor. Perfect for pasta and salads.',
      he: 'פרמזן טבעוני מיושן עם טעם חד ואגוזי. מושלם לפסטה וסלטים.'
    },
    price: 42,
    currency: '₪',
    image: '/images/products/general-products.jpeg',
    images: ['/images/products/general-products.jpeg'],
    ingredients: {
      en: ['Cashews', 'Nutritional Yeast', 'Sea Salt', 'Garlic Powder', 'Lemon Juice'],
      he: ['קשיו', 'שמרים תזונתיים', 'מלח ים', 'אבקת שום', 'מיץ לימון']
    },
    nutrition: {
      calories: 140,
      protein: 7,
      fat: 11,
      carbs: 5
    },
    category: 'cheese'
  },
  {
    id: 'almond-yogurt-vanilla',
    name: {
      en: 'Almond Yogurt - Vanilla',
      he: 'יוגורט שקדים - וניל'
    },
    description: {
      en: 'Sweet and creamy vanilla-flavored almond yogurt, perfect for breakfast or dessert.',
      he: 'יוגורט שקדים בטעם וניל מתוק וקרמי, מושלם לארוחת בוקר או קינוח.'
    },
    price: 24,
    currency: '₪',
    image: '/images/products/almond-yogurt-vanilla.jpeg',
    images: ['/images/products/almond-yogurt-vanilla.jpeg'],
    ingredients: {
      en: ['Organic Almonds', 'Water', 'Live Cultures', 'Vanilla Extract', 'Maple Syrup'],
      he: ['שקדים אורגניים', 'מים', 'תרביות חיות', 'תמצית וניל', 'סירופ מייפל']
    },
    nutrition: {
      calories: 130,
      protein: 6,
      fat: 9,
      carbs: 8
    },
    category: 'yogurt'
  }
];