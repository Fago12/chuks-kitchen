export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating?: number;
  ingredients?: string[];
}

export const CATEGORIES = ['All', 'BreakFast', 'Dinner', 'Dessert', 'Soft Drinks'];

export const MENU_DATA: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Breakfast',
    description: 'Scrambled eggs, bacon, toast, and coffee.',
    price: 1200,
    category: 'BreakFast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Grilled Steak',
    description: 'Juicy steak with mashed potatoes and veggies.',
    price: 4500,
    category: 'Dinner',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey center.',
    price: 1500,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1854&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Fresh Orange Juice',
    description: '100% freshly squeezed oranges.',
    price: 800,
    category: 'Soft Drinks',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1887&auto=format&fit=crop',
    rating: 4.6
  }
];
