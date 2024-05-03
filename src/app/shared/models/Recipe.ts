import { Nutritional } from "./Nutritional";

export class Recipe{
    id!:string;
    name!:string;
    imageUrl!:string;
    steps!: string;
    url_steps!:string;
    introduction!: string;
    description!:string;
    date!: string;
    categories!: string[];
    url_ingredients?:string;
    ingredients!: string;
    subtitle?:string;
    calories?: number;
    nutrituional_values!: Nutritional;
}