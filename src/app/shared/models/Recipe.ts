export class Recipe{
    id!:string;
    name!:string;
    date!: string;
    imageUrl!:string;
    introduction!: string;
    subtitle?:string;
    description!:string;
    url_ingredients?:string;
    ingredients!: TitleDescription[];
    steps!: TitleDescription[]; 
    url_steps!:string;
    nutrituional_values!: TitleDescription[]; 
    categories!: string[];
}

export class TitleDescription{
    title?:string;
    description!: string;
}