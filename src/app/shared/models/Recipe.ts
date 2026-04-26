import { EnumCategories } from "./EnumCategories";

export class Recipe{
    id!:string;
    name!:string;
    date!: string;
    categories!: EnumCategories[];
    imageUrl!:string;

    // SEO Enhancement fields
    prepTime?: string;      // ISO 8601 format (e.g., "PT20M" for 20 minutes)
    cookTime?: string;      // ISO 8601 format (e.g., "PT30M" for 30 minutes)
    totalTime?: string;     // ISO 8601 format
    yield?: string;         // Number of servings (e.g., "4 servings")
    cuisine?: string;       // Cuisine type (e.g., "Portuguese", "Mediterranean")
    keywords?: string;     // Comma-separated keywords for search
    videoUrl?: string;     // URL to video if available

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



