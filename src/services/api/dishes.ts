import { DISHES } from '../../mock/dishes';
import type { Dish } from '../../mock/dishes';

// Simulating API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const dishService = {
    async getDishes(): Promise<Dish[]> {
        await delay(500);
        return DISHES;
    },

    async getChefSpecials(): Promise<Dish[]> {
        await delay(500);
        return DISHES.filter(dish => dish.isChefSpecial);
    },

    async getDishById(id: string): Promise<Dish | undefined> {
        await delay(300);
        return DISHES.find(dish => dish.id === id);
    }
};
