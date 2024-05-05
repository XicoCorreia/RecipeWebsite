export class Recipe{
    id!:string;
    name!:string;
    date!: string;
    categories!: string[];
    imageUrl!:string;
    introduction!: string;
    subtitle?:string;
    description!:string;
    url_ingredients?:string;
    ingredients!: IntroductionContent;
    steps!: IntroductionContent;
    url_steps!:string;
    nutrituional_values!: TitleDescription[]; 
}

export class IntroductionContent{
    introduction?: string;
    content!: TitleDescription[];
}

export class TitleDescription{
    title?:string;
    description!: string;
}