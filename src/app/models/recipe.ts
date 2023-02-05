export class Ingredients {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: string;
    foodCategory: string;
    foodId: string;
    image: string;
}

export class Recipe {
    id: number;
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: [];
    ingredientLines: string[];
    ingredients: Ingredients[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
}
