import { EnumCategories } from "./EnumCategories";

export class Recipe{
    id!:string;
    name!:string;
    date!: string;
    categories!: EnumCategories[];
    imageUrl!:string;

    introduction!: IntroductionContent;
    ingredients!: IngredientsStepsContent;
    steps!: IngredientsStepsContent;
    
    nutritional_values!: TitleDescription[]; 
}

export class IntroductionContent{
    introduction!: string;
    subtitle?:string;
    description!:string;
}

export class IngredientsStepsContent{
    image!:string;
    subtitle!:string;
    introduction?: string;
    content!: TitleDescription[];
}

export class TitleDescription{
    title?:string;
    description!: string;
}



