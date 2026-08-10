// נתוני הדגמה בלבד. החלפת התפריט כאן אינה דורשת שינוי ברכיבי הממשק.
export const menu = [
  {
    id: 'starters',
    name: { he: 'מנות ראשונות', en: 'Starters' },
    description: { he: 'נפתחות לשולחן, מוכנות אצלנו בכל בוקר.', en: 'Freshly prepared every morning, made for sharing.' },
    items: [
      { id: 'hummus', name: { he: 'חומוס הבית', en: 'House Hummus' }, description: { he: 'חומוס קרמי, גרגרים חמים, שמן זית ופפריקה.', en: 'Creamy hummus, warm chickpeas, olive oil and paprika.' }, price: 28, image: '/images/dishes/hummus.jpg', tags: ['popular', 'vegan'], allergens: ['sesame'], ingredients: ['גרגרי חומוס', 'טחינה', 'לימון', 'שמן זית'], available: true },
      { id: 'masabaha', name: { he: 'מסבחה חמה', en: 'Warm Masabaha' }, description: { he: 'גרגרי חומוס חמים, טחינה, שום ולימון טרי.', en: 'Warm chickpeas, tahini, garlic and fresh lemon.' }, price: 30, image: '/images/dishes/masabaha.jpg', tags: ['chef', 'vegan'], allergens: ['sesame'], available: true },
      { id: 'hummus-ful', name: { he: 'חומוס פול', en: 'Hummus Ful' }, description: { he: 'חומוס הבית עם פול חם, כמון ושמן זית.', en: 'House hummus with warm fava beans, cumin and olive oil.' }, price: 32, image: '/images/dishes/hummus-ful.jpg', tags: ['vegan'], allergens: ['sesame'], available: true },
      { id: 'labaneh', name: { he: 'לבנה ושמן זית', en: 'Labaneh & Olive Oil' }, description: { he: 'לבנה סמיכה, זעתר מקומי ושמן זית כתית.', en: 'Rich labaneh, local zaatar and extra virgin olive oil.' }, price: 26, image: '/images/dishes/labaneh.jpg', tags: ['vegetarian'], allergens: ['dairy'], available: true },
      { id: 'vegetable-salad', name: { he: 'סלט ירקות קצוץ', en: 'Chopped Vegetable Salad' }, description: { he: 'עגבנייה, מלפפון, חסה ועשבי תיבול בלימון ושמן זית.', en: 'Tomato, cucumber, lettuce and herbs with lemon and olive oil.' }, price: 29, image: '/images/dishes/vegetable-salad.jpg', tags: ['vegan', 'glutenFree'], allergens: [], available: true },
      { id: 'turkish-salad', name: { he: 'סלט טורקי פיקנטי', en: 'Spicy Turkish Salad' }, description: { he: 'עגבניות, פלפל קלוי, שום ותיבול חריף עדין.', en: 'Tomatoes, roasted pepper, garlic and a gentle spicy seasoning.' }, price: 24, image: '/images/dishes/turkish-salad.jpg', tags: ['spicy', 'vegan'], allergens: [], available: true },
      { id: 'eggplant-tahini', name: { he: 'חציל טבעי עם טחינה', en: 'Eggplant with Tahini' }, description: { he: 'חציל קלוי על האש, טחינה גולמית, לימון ופטרוזיליה.', en: 'Fire-roasted eggplant, tahini, lemon and parsley.' }, price: 30, image: '/images/dishes/eggplant-tahini.jpg', tags: ['chef', 'vegan'], allergens: ['sesame'], available: true },
      { id: 'falafel', name: { he: 'פלאפל הבית', en: 'House Falafel' }, description: { he: 'כדורי פלאפל פריכים מתערובת הבית, מוגשים עם טחינה.', en: 'Crispy falafel from our house blend, served with tahini.' }, price: 25, image: '/images/dishes/falafel.jpg', tags: ['popular', 'vegan'], allergens: ['sesame'], available: true },
      { id: 'fries', name: { he: 'צ׳יפס זהוב', en: 'Golden Fries' }, description: { he: 'פריך מבחוץ, רך מבפנים, עם מלח ים.', en: 'Crisp outside, soft inside, finished with sea salt.' }, price: 22, image: '/images/dishes/fries.jpg', tags: ['vegan'], allergens: [], available: true },
      { id: 'tahini', name: { he: 'טחינה הבית', en: 'House Tahini' }, description: { he: 'טחינה טרייה עם לימון, שום ופטרוזיליה.', en: 'Fresh tahini with lemon, garlic and parsley.' }, price: 18, image: '/images/dishes/tahini.jpg', tags: ['vegan', 'glutenFree'], allergens: ['sesame'], available: true },
    ],
  },
  {
    id: 'grill',
    name: { he: 'בשרים על האש', en: 'From the Grill' },
    description: { he: 'נצלה על גחלים ומוגש חם עם צ׳יפס וסלטים.', en: 'Charcoal grilled and served hot with fries and salads.' },
    items: [
      { id: 'pargit', name: { he: 'פרגית', en: 'Chicken Thigh' }, description: { he: 'נתחי פרגית עסיסיים במרינדת הבית, צלויים על הגחלים.', en: 'Juicy chicken thigh in our house marinade, grilled over charcoal.' }, image: '/images/dishes/pargit.jpg', tags: ['popular', 'glutenFree'], allergens: [], ingredients: ['פרגית', 'תבליני הבית', 'בצל צלוי'], available: true },
      { id: 'lamb-skewers', name: { he: 'שישליק כבש', en: 'Lamb Shishlik' }, description: { he: 'קוביות כבש מובחרות עם בצל ותיבול הבית, בצלייה מדויקת.', en: 'Prime lamb cubes with onion and house seasoning, precisely grilled.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
      { id: 'kebab', name: { he: 'קבב', en: 'Kebab' }, description: { he: 'בשר קצוץ עם בצל, פטרוזיליה ותבלינים, צלוי על הגחלים.', en: 'Minced meat with onion, parsley and spices, grilled over charcoal.' }, image: null, tags: ['chef', 'glutenFree'], allergens: [], ingredients: ['בשר', 'בצל', 'פטרוזיליה'], available: true },
      { id: 'grilled-chicken-liver', name: { he: 'כבד עוף על האש', en: 'Grilled Chicken Liver' }, description: { he: 'כבד עוף צלוי על הגחלים עם בצל ותיבול עדין.', en: 'Chicken liver grilled over charcoal with onion and gentle seasoning.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
      { id: 'fried-chicken-liver', name: { he: 'כבד עוף מטוגן', en: 'Fried Chicken Liver' }, description: { he: 'כבד עוף מטוגן במחבת ומוגש חם עם בצל.', en: 'Pan-fried chicken liver served hot with onion.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
      { id: 'chicken-hearts', name: { he: 'לבבות עוף', en: 'Chicken Hearts' }, description: { he: 'לבבות עוף מתובלים וצלויים על הגחלים.', en: 'Seasoned chicken hearts grilled over charcoal.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
      { id: 'lamb-chops', name: { he: 'צלעות כבש', en: 'Lamb Chops' }, description: { he: 'צלעות כבש עסיסיות בצלייה מדויקת על הגחלים.', en: 'Juicy lamb chops precisely grilled over charcoal.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
      { id: 'steaks', name: { he: 'סטייקים', en: 'Steaks' }, description: { he: 'נתחי בקר מובחרים, מוכנים על האש במידת העשייה לבחירתכם.', en: 'Premium beef cuts, grilled to your preferred doneness.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
      { id: 'chicken-breast', name: { he: 'חזה עוף', en: 'Chicken Breast' }, description: { he: 'חזה עוף במרינדת לימון ועשבי תיבול, צלוי על הגחלים.', en: 'Chicken breast in a lemon and herb marinade, grilled over charcoal.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
      { id: 'pargit-steak', name: { he: 'סטייק פרגית', en: 'Chicken Thigh Steak' }, description: { he: 'נתח פרגית עסיסי במרינדת הבית, פתוח וצלוי על האש.', en: 'Juicy butterflied chicken thigh in our house marinade, grilled over charcoal.' }, image: null, tags: ['glutenFree'], allergens: [], available: true },
    ],
  },
  {
    id: 'desserts',
    name: { he: 'קינוחים', en: 'Desserts' },
    description: { he: 'סיום מתוק, קפה טוב ורגע לנשום.', en: 'A sweet finish, good coffee and a moment to pause.' },
    items: [
      { id: 'malabi', name: { he: 'מלבי', en: 'Malabi' }, description: { he: 'קרם חלב עדין עם פיסטוק וקוקוס קלוי.', en: 'Delicate milk pudding with pistachio and toasted coconut.' }, price: 28, image: null, tags: ['vegetarian'], allergens: ['dairy', 'nuts'], available: true },
      { id: 'bavaria', name: { he: 'קרם בוואריה של פעם', en: 'Classic Bavarian Cream' }, description: { he: 'קרם וניל אוורירי, שוקולד מריר ואגוזים קלויים.', en: 'Airy vanilla cream, dark chocolate and toasted nuts.' }, price: 30, image: null, tags: ['popular', 'vegetarian'], allergens: ['dairy', 'nuts'], available: true },
      { id: 'chocolate-mousse', name: { he: 'מוס שוקולד', en: 'Chocolate Mousse' }, description: { he: 'מוס שוקולד עשיר, חלק ואוורירי.', en: 'Rich, smooth and airy chocolate mousse.' }, image: null, tags: ['vegetarian'], allergens: ['dairy'], available: true },
      { id: 'coffee', name: { he: 'קפה שחור עם הל', en: 'Cardamom Coffee' }, description: { he: 'קפה שחור מסורתי, נטחן דק ומתובל בהל.', en: 'Traditional finely ground black coffee with cardamom.' }, price: 12, image: null, tags: ['vegan'], allergens: [], available: true },
      { id: 'tea', name: { he: 'תה', en: 'Tea' }, description: { he: 'תה חם ומרגיע, מוגש לשולחן.', en: 'A warm, comforting tea served at the table.' }, image: null, tags: ['vegan'], allergens: [], available: true },
    ],
  },
]

export const allMenuItems = menu.flatMap((category) =>
  category.items.map((item) => ({ ...item, categoryId: category.id, categoryName: category.name })),
)
