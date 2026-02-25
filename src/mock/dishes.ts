export interface Dish {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    price: number;
    image: string;
    category: 'Jollof' | 'Swallow' | 'Grill' | 'Sweet' | 'Sides' | 'Beverage';
    isChefSpecial?: boolean;
    tags?: { type: 'spicy' | 'veg' | 'allergy'; text: string }[];
    proteins?: { id: string; name: string; price: number; isDefault?: boolean }[];
    extras?: { id: string; name: string; price: number }[];
}

export const DISHES: Dish[] = [
    {
        id: '1',
        name: 'Spicy Tilapia Pepper Soup',
        description: 'Authentic tilapia fish pepper soup with rich Nigerian spices and herbs.',
        longDescription: 'A soul-warming bowl of pepper soup featuring fresh Tilapia fish, slow-simmered in a broth of aromatic peppers, ginger, garlic, and traditional Nigerian spices. It\'s a perfect balance of heat and flavor, traditionally served hot to soothe and invigorate.',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
        category: 'Swallow',
        isChefSpecial: true,
        tags: [
            { type: 'spicy', text: 'Extra Spicy' },
            { type: 'allergy', text: 'Contains Fish' }
        ],
        proteins: [
            { id: 't1', name: 'Tilapia Fish', price: 0, isDefault: true },
            { id: 't2', name: 'Extra Fish Fillet', price: 2500 }
        ],
        extras: [
            { id: 'e1', name: 'Agidi (Corn Starch)', price: 500 },
            { id: 'e2', name: 'Boiled Yam', price: 1000 }
        ]
    },
    {
        id: '2',
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature smoky Jollof rice served with perfectly seasoned fried chicken.',
        longDescription: 'Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800',
        category: 'Jollof',
        isChefSpecial: true,
        tags: [
            { type: 'spicy', text: 'Mildly spicy' },
            { type: 'veg', text: 'Vegetarian option available' },
            { type: 'allergy', text: 'View Allergies' }
        ],
        proteins: [
            { id: 'p1', name: 'Fried Chicken', price: 0, isDefault: true },
            { id: 'p2', name: 'Grilled Fish', price: 500 },
            { id: 'p3', name: 'Beef', price: 700 }
        ],
        extras: [
            { id: 'e1', name: 'Fried Plantain', price: 700 },
            { id: 'e2', name: 'Coleslaw', price: 500 },
            { id: 'e3', name: 'Extra Pepper Sauce', price: 300 }
        ]
    },
    {
        id: '3',
        name: 'Suya Platter (Large)',
        description: 'Spicy skewered beef strips seasoned with authentic yaji spice, served with onions.',
        longDescription: 'Succulent strips of beef marinated in a blend of ground groundnuts and traditional Nigerian spices, then charcoal-grilled for a smoky finish. Served with sliced onions, cabbage, and extra yaji spice on the side.',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=800',
        category: 'Grill',
        isChefSpecial: true,
        tags: [
            { type: 'spicy', text: 'Extra spicy' },
            { type: 'allergy', text: 'Contains Nuts' }
        ],
        proteins: [
            { id: 'p1', name: 'Beef Suya', price: 0, isDefault: true },
            { id: 'p2', name: 'Chicken Suya', price: 0 },
            { id: 'p3', name: 'Mixed Suya', price: 2000 }
        ],
        extras: [
            { id: 'e1', name: 'Fried Plantain', price: 700 },
            { id: 'e2', name: 'Extra Yaji Spice', price: 200 },
            { id: 'e3', name: 'Cold Beverage', price: 500 }
        ]
    },
    {
        id: '4',
        name: 'Jollof Rice & Smoked Chicken',
        description: 'Our signature smoky jollof rice cooked to perfection, served with succulent smoked chicken.',
        longDescription: 'Experience the deep, wood-fired flavor of our smoked chicken paired with our iconic smoky Jollof rice. Each bite is infused with the essence of traditional firewood cooking, creating a unique and unforgettable dining experience.',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800',
        category: 'Jollof',
        isChefSpecial: true,
        tags: [
            { type: 'spicy', text: 'Smoky' }
        ],
        proteins: [
            { id: 'p1', name: 'Smoked Chicken', price: 0, isDefault: true },
            { id: 'p2', name: 'Smoked Turkey', price: 1500 }
        ],
        extras: [
            { id: 'e1', name: 'Moimoi', price: 1200 },
            { id: 'e2', name: 'Salad', price: 800 }
        ]
    },
    {
        id: '5',
        name: 'Zesty Chapman',
        description: 'A classic Nigerian mocktail with a blend of fruity flavors, bitters, and citrus.',
        longDescription: 'Our signature Chapman is a refreshing blend of citrus sodas, pomegranate syrup, and Angostura bitters. Garnished with fresh cucumber, lemon, and mint, it\'s the quintessential Nigerian mocktail for any celebration.',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
        category: 'Beverage',
        isChefSpecial: true,
        tags: [
            { type: 'veg', text: 'Alcohol-free' }
        ],
        proteins: [],
        extras: [
            { id: 'e1', name: 'Extra Ice', price: 0 },
            { id: 'e2', name: 'Extra Mint', price: 200 }
        ]
    },
    {
        id: '6',
        name: 'Egusi Soup & Pounded Yam',
        description: 'Rich and savory Egusi soup made with ground melon seeds, served with smooth pounded yam.',
        longDescription: 'A classic Nigerian delicacy. Our Egusi soup is prepared with hand-peeled melon seeds, leafy greens, and assorted meats, creating a rich, nutty flavor profile. Served with silky, fluffy pounded yam for the perfect swallow experience.',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        category: 'Swallow',
        isChefSpecial: true,
        tags: [
            { type: 'allergy', text: 'Contains Seeds' }
        ],
        proteins: [
            { id: 'p1', name: 'Assorted Meat', price: 0, isDefault: true },
            { id: 'p2', name: 'Stockfish', price: 2000 },
            { id: 'p3', name: 'Goat Meat', price: 1500 }
        ],
        extras: [
            { id: 'e1', name: 'Extra Pounded Yam', price: 1500 },
            { id: 'e2', name: 'Eba', price: 1000 }
        ]
    },
    {
        id: '7',
        name: 'Grilled Croaker Fish',
        description: 'Whole croaker fish marinated in native spices and grilled to perfection.',
        longDescription: 'Fresh from the grill, our whole Croaker fish is seasoned with a proprietary blend of Nigerian herbs and spices. It\'s grilled to maintain its moisture while achieving a perfectly charred exterior. Served with roasted potatoes or plantains.',
        price: 15500,
        image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800',
        category: 'Grill',
        tags: [
            { type: 'spicy', text: 'Spiced' },
            { type: 'allergy', text: 'Contains Fish' }
        ],
        proteins: [
            { id: 'p1', name: 'Whole Croaker', price: 0, isDefault: true }
        ],
        extras: [
            { id: 'e1', name: 'Roasted Potatoes', price: 1500 },
            { id: 'e2', name: 'Grilled Corn', price: 1000 }
        ]
    },
    {
        id: '8',
        name: 'Fried Plantain (Dodo)',
        description: 'Sweet, ripe plantain sliced and fried to a golden brown.',
        longDescription: 'Caramelized, golden slices of perfectly ripe plantain. Fried until the edges are slightly crisp while the center remains soft and sweet. The perfect side dish for almost any Nigerian meal.',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
        category: 'Sides',
        tags: [
            { type: 'veg', text: 'Vegan' }
        ],
        proteins: [],
        extras: [
            { id: 'e1', name: 'Extra Spicy Sauce', price: 300 }
        ]
    },
    {
        id: '9',
        name: 'Puff Puff (6pcs)',
        description: 'Soft, fluffy, and sweet deep-fried dough balls, a favorite Nigerian snack.',
        longDescription: 'Delightful spheres of sweet dough, deep-fried to golden perfection. Airy on the inside and slightly chewy on the outside, these traditional snacks are a staple at every Nigerian gathering.',
        price: 3000,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
        category: 'Sweet',
        tags: [
            { type: 'veg', text: 'Vegetarian' }
        ],
        proteins: [],
        extras: [
            { id: 'e1', name: 'Sugar Topping', price: 0 },
            { id: 'e2', name: 'Chocolate Dip', price: 1000 }
        ]
    },
    {
        id: '10',
        name: 'Vura Palm Wine (Fresh)',
        description: 'Naturally sweet and refreshing palm wine served chilled.',
        longDescription: 'Tapped fresh from the oil palm tree, our Vura Palm Wine is naturally sweet and effervescent. Served chilled in traditional calabashes or glasses, it offers an authentic taste of West African nature.',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800',
        category: 'Beverage',
        tags: [
            { type: 'allergy', text: 'Alcoholic' }
        ],
        proteins: [],
        extras: [
            { id: 'e1', name: 'Chilled Calabash', price: 0 }
        ]
    }
];

export const CATEGORIES = [
    { name: 'Jollof Delights', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },
    { name: 'Swallow & Soups', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400' },
    { name: 'Grills & BBQ', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sweet Treats', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jollof Delights', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jollof Delights', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=400' }
];
