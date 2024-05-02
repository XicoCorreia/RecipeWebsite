import { Category } from "./Category";

export class Recipe{
    id!:string;
    name!:string;
    imageUrl!:string;
    steps!: string;
    introduction!: string;
    description!:string;
    date!: string;
    categories!: string[];
    url_ingredients?:string;
    ingredients!: string;
    subtitle?:string;
    calories?: number;
}