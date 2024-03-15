import { Category } from "./Category";

export class Recipe{
    id!:string;
    name!:string;
    imageUrl!:string;
    steps!: string[];
    calories?: number;
    categories?: Category[];

}