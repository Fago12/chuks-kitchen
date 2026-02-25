export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'Jollof' | 'Swallow' | 'Grill' | 'Sweet' | 'Sides';
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
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature smoky Jollof rice served with perfectly seasoned fried chicken.',
        price: 7500,
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
        category: 'Jollof',
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
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature smoky Jollof rice served with perfectly seasoned fried chicken.',
        price: 7500,
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
        category: 'Jollof',
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
