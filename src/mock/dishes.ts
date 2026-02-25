export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'Jollof' | 'Swallow' | 'Grill' | 'Sweet' | 'Sides' | 'Beverage';
    isChefSpecial?: boolean;
}

export const DISHES: Dish[] = [
    {
        id: '1',
        name: 'Spicy Tilapia Pepper Soup',
        description: 'Authentic tilapia fish pepper soup with rich Nigerian spices and herbs.',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
        category: 'Swallow',
        isChefSpecial: true
    },
    {
        id: '2',
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature smoky Jollof rice served with perfectly seasoned fried chicken.',
        price: 7500,
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
        category: 'Jollof',
        isChefSpecial: true
    },
    {
        id: '3',
        name: 'Suya Platter (Large)',
        description: 'Spicy skewered beef strips seasoned with authentic yaji spice, served with onions.',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
        category: 'Grill',
        isChefSpecial: true
    },
    {
        id: '4',
        name: 'Jollof Rice & Smoked Chicken',
        description: 'Our signature smoky jollof rice cooked to perfection, served with succulent smoked chicken.',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800',
        category: 'Jollof',
        isChefSpecial: true
    },
    {
        id: '5',
        name: 'Zesty Chapman',
        description: 'A classic Nigerian mocktail with a blend of fruity flavors, bitters, and citrus.',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
        category: 'Beverage',
        isChefSpecial: true
    },
    {
        id: '6',
        name: 'Egusi Soup & Pounded Yam',
        description: 'Rich and savory Egusi soup made with ground melon seeds, served with smooth pounded yam.',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        category: 'Swallow',
        isChefSpecial: true
    },
    {
        id: '7',
        name: 'Grilled Croaker Fish',
        description: 'Whole croaker fish marinated in native spices and grilled to perfection.',
        price: 15500,
        image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800',
        category: 'Grill'
    },
    {
        id: '8',
        name: 'Fried Plantain (Dodo)',
        description: 'Sweet, ripe plantain sliced and fried to a golden brown.',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
        category: 'Sides'
    },
    {
        id: '9',
        name: 'Puff Puff (6pcs)',
        description: 'Soft, fluffy, and sweet deep-fried dough balls, a favorite Nigerian snack.',
        price: 3000,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
        category: 'Sweet'
    },
    {
        id: '10',
        name: 'Vura Palm Wine (Fresh)',
        description: 'Naturally sweet and refreshing palm wine served chilled.',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800',
        category: 'Beverage'
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
