import {Recipe} from './app/shared/models/Recipe'
import { EnumCategories } from './app/shared/models/EnumCategories'

export const sample_recipes: Recipe[] = [
    {
        name: 'Ground Beef with Veggies',
        id: '1',
        date: "02 May 2024",
        imageUrl: '/assets/images/recipes/mince_meat.jpg',
        categories: [EnumCategories.Main, EnumCategories.Beef],
        introduction: {
            introduction: "During the 20 years I lived with my mom, this was one of my favorite dishes that she cooked, "+
            "not only because I kept asking when the food was ready and it took roughly 30 minutes, but also because it "+
            "tasted amazing. So when I moved out, of course, I needed to try to cook it myself.",
            description: "Whip up a speedy, nutritious dinner with our one-pan Ground Beef Veggie Skillet. With minimal ingredients but maximum flavor, "+
            "it's perfect for busy weeknights. Customize your meat and veggies to suit your taste - it's a versatile recipe that's easy to tweak.<br> <br> Got some "+
            "ground beef and assorted veggies in your fridge that need using up? Look no further than this Ground Beef Veggie Skillet! It's the ultimate "+
            "clean-out-the-fridge meal, packed with satisfying flavors and requiring just a handful of ingredients."
        },
        ingredients: {
            introduction: "Here is everything you will need:",
            content: [
                { title: "Ground beef", description: "I use 96% for a more low calorie recipe but you can use whichever one you prefer." },
                { title: "Seasonings", description: "For seasoning I use paprika, onion powder, garlic powder, salt and pepper." },
                { title: "Tomato Sauce", description: "Essential to give moisture and prevent it from drying out." },
                { title: "Veggies", description: "Here, just grab whatever veggies you have in your fridge. I prefer to use broccoli, carrots, cauliflower, corn, and peas." }
            ],
            image: '/assets/images/recipes/mince_meat.jpg',
            subtitle: 'What you need'
        },
        steps: {
            introduction: "Here is how to make this amazing recipe:",
            content: [
                { description: "Add the meat to a pan and cook it on medium heat." },
                { description: "Reduce the heat, add the tomato sauce, spices, and veggies. If you are cooking pasta, add about 100ml of pasta water, otherwise just add water." },
                { description: "Keep stirring for 5 minutes, then let it cook on low heat for 20 minutes and done!" }
            ],
            image: '/assets/images/recipes/steps.jpg',
            subtitle: 'Recipe'
        },
        nutrituional_values: [
            {title: "Calories", description: "NDF"},
            {title: "Carbohydrates", description: "NDF"},
            {title: "Protein", description: "NDF"},
            {title: "Fat", description: "NDF"},
            {title: "Fiber", description: "NDF"}
        ]
    },
    {
        name: 'Apple Turnovers',
        id: '5',
        imageUrl: '/assets/images/recipes/apple_turnovers.jpg',
        date: "05 May 2024",
        categories: [EnumCategories.Dessert, EnumCategories.AirFryer],
        introduction: {
            introduction: "I always loved apples, and as everybody knows, apple and cinnamon belong together. So, I decided to combine these timeless "+
            "flavors into a delightful pastry that captures the essence of autumn in every bite.",
            description: "Indulge in the comforting embrace of our apple turnover, where buttery layers of pastry envelop a generous filling of cinnamon-kissed "+
            "apples. Each bite offers a symphony of flavors – the tartness of the apples harmonizing with the warmth of cinnamon, all encased in a crisp, golden "+
            "crust. Baked to perfection, our turnovers boast a tantalizing aroma that beckons with promises of sweet satisfaction. Whether enjoyed as a morning "+
            "treat or an afternoon delight, our apple turnovers are sure to evoke nostalgic memories and leave taste buds craving more. Experience the epitome of "+
            "autumnal bliss with every delectable bite."
        },
        ingredients: {
            introduction: "Here is everything you will need:",
            content: [
                { title: "Apples", description: "Our main character in the pastry." },
                { title: "Cinnamon and sugar/stevia", description: "I used stevia to make it less caloric, but you can use whatever you have at home." },
                { title: "Store-bought puff pastry", description: "I bought mine at Lidl but choose your favorite brand." },
                { title: "Lemon", description: "The secret ingredient to make the sauce juicy and not too sweet." },
                { title: "Milk", description: "Used to give that golden and crispy color to the pastry. You can use either milk or eggs." }
            ],
            image: '/assets/images/recipes/apple_turnovers.jpg',
            subtitle: 'What you will need to make Apple Turnovers'
        },
        steps: {
            introduction: "As you can see below, it is easy, fast, and delicious:",
            content: [
                { description: "Cut half of an apple into cubes." },
                { description: "Add both cinnamon and sugar in a pot, mix them together, and add the apple to coat them." },
                { description: "Add some lemon juice to the apples." },
                { description: "Cut the pastry into a rectangle and put the coated apples in the middle." },
                { description: "Close the pastry by bringing the corners to the middle and twisting. Brush milk onto the puff pastry." },
                { description: "Place it in the air fryer at 180ºC for 10 minutes and enjoy!" }
            ],
            image: '/assets/images/recipes/steps.jpg',
            subtitle: 'Recipe Apple Turnovers'
        },
        nutrituional_values: [
            {title: "Calories", description: "NDF"},
            {title: "Carbohydrates", description: "NDF"},
            {title: "Protein", description: "NDF"},
            {title: "Fat", description: "NDF"},
            {title: "Fiber", description: "NDF"}
        ]
    }
];


