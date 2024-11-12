import { EnumCategories } from "./EnumCategories";

export class Category{
    id!:string;
    name!: EnumCategories;
    imageUrl!:string;
    path!:string;
    description?:string;
    parent_category?:string;
}