import {Recipe} from './app/shared/models/Recipe'
import { EnumCategories } from './app/shared/models/EnumCategories'

export const sample_recipes: Recipe[] = [
    {
    id: "1",
    name: "Baba de Camelo",
    date: "03 May 2026",
    mainCategories: [EnumCategories.Dessert],
    extraCategories: [EnumCategories.Min15Recipes, EnumCategories.Portuguese],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "baba-de-camelo",

    // SEO Enhancement fields
    prepTime: "PT15M",
    cookTime: "PT0M",
    totalTime: "PT15M",
    yield: "8 servings",
    cuisine: "Portuguese",
    keywords: "baba de camelo, portuguese dessert, dulce de leche dessert, easy mousse",
    videoUrl: "",

    introduction: {
        introduction: "A super simple Portuguese classic that never fails.",
        subtitle: "Creamy, sweet, and dangerously easy to make",
        description: "Baba de Camelo is one of those desserts that feels fancy but is actually incredibly easy. With just a few ingredients, " + 
        "you get a rich, airy mousse packed with caramel flavor from the dulce de leche. Perfect for impressing guests—or just treating yourself."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Only 3 main ingredients—can't get easier than this:",
        content: [
            { title: "Eggs", description: "5 eggs (separate yolks and whites)" },
            { title: "Maria biscuits", description: "20 grams, crushed for topping" },
            { title: "Dulce de leche", description: "1 container" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Take it slow when mixing to keep that fluffy texture:",
        content: [
            { description: "Start by separating the egg yolks from the whites." },
            { description: "Whisk the egg whites until they form stiff peaks." },
            { description: "In another bowl, mix the egg yolks with the Dulce de leche until smooth and creamy." },
            { description: "Gently fold this mixture into the whipped egg whites. Go slowly so you don’t lose that airy texture." },
            { description: "Pour into a serving dish or individual cups and finish with crushed Maria biscuits on top." },
            { description: "Chill in the fridge for a bit before serving—it’s even better cold." }
        ]
    },
    
    nutritional_values: [
        { title: "Calories", description: "165 kcal" },
        { title: "Fat", description: "6g" },
        { title: "Carbohydrates", description: "17g" },
        { title: "Protein", description: "9g" },
        ]
    },
    {
    id: "2",
    name: "Dulce de Leche Petit Gâteau",
    date: "03 May 2026",
    mainCategories: [EnumCategories.Dessert, EnumCategories.Cake],
    extraCategories: [ EnumCategories.AirFryer],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "dulce-de-leche-petit-gateau",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT12M",
    totalTime: "PT22M",
    yield: "2 servings",
    cuisine: "French",
    keywords: "dulce de leche petit gateau, lava cake, portuguese dessert, airfryer dessert, caramel lava cake",
    videoUrl: "",

    introduction: {
        introduction: "A gooey, caramel-filled dessert ready in minutes.",
        subtitle: "Soft on the outside, molten in the middle",
        description: "This dulce de leche petit gâteau is the perfect quick dessert. It bakes up soft and cakey on the outside, while staying rich and molten in the center. " +
        "Best part? You can make it in the air fryer with just 4 ingredients."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Just a handful of ingredients:",
        content: [
            { title: "Egg", description: "1 whole egg" },
            { title: "Egg yolk", description: "1 extra yolk for richness" },
            { title: "All-purpose flour", description: "25 g" },
            { title: "Dulce de leche", description: "160 g" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Quick and easy—don't overmix:",
        content: [
            { description: "In a bowl, mix the egg, egg yolk, and dulce de leche until smooth and creamy." },
            { description: "Add the flour and gently mix until just combined." },
            { description: "Pour the batter into a small greased, air fryer-safe ramekin." },
            { description: "Cook at 190ºC for 10-12 minutes. The outside should be set, but the center still soft." },
            { description: "Let it rest for a minute, then serve warm—ideally with the center still gooey." }
        ]
    },
    
    nutritional_values: [
        { title: "Calories", description: "397 kcal" },
        { title: "Fat", description: "10g" },
        { title: "Carbohydrates", description: "62g " },
        { title: "Protein", description: "14g" }
    ]
    },

    {
    id: "3",
    name: "Tuna Mousse",
    date: "03 May 2026",
    mainCategories: [EnumCategories.SidesAppetizers],
    extraCategories: [EnumCategories.Min15Recipes],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "tuna-mousse",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT0M",
    totalTime: "PT10M",
    yield: "4 servings",
    cuisine: "International",
    keywords: "tuna mousse, tuna spread, quick appetizer, tuna dip, easy snack",
    videoUrl: "",

    introduction: {
        introduction: "A quick, creamy tuna spread you can make in minutes.",
        subtitle: "Simple, tasty, and super versatile",
        description: "This tuna mousse is perfect when you need something fast and satisfying. Creamy from the mayo and crème fraîche, " +
        "with a bit of tang from mustard and lemon, it’s great on toast, crackers, or even as a sandwich filling."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Everything comes together in one bowl:",
        content: [
            { title: "Canned tuna", description: "2 cans, drained well" },
            { title: "Mayonnaise", description: "3 tablespoons" },
            { title: "Crème fraîche", description: "2 tablespoons" },
            { title: "Mustard", description: "2 teaspoons" },
            { title: "Pickles", description: "4 small, finely chopped" },
            { title: "Lemon juice", description: "¼ lemon" },
            { title: "Salt", description: "¼ teaspoon (adjust to taste)" },
            { title: "Black pepper", description: "1 teaspoon, ground (adjust to taste)" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Quick mix and you're done:",
        content: [
            { description: "Start by squeezing and draining the tuna well to remove excess water." },
            { description: "Place the tuna in a bowl and break it apart with a fork." },
            { description: "Add the mayonnaise, crème fraîche, and mustard, then mix until creamy." },
            { description: "If the texture feels too thick, add a bit more mayo or crème fraîche." },
            { description: "Season with salt, black pepper, and lemon juice to taste." },
            { description: "Finely chop the pickles and fold them into the mixture." },
            { description: "Serve immediately or chill for a bit—it gets even better cold." }
        ]
    },
    
    nutritional_values: [
        { title: "Calories", description: "186 kcal" },
        { title: "Fat", description: "13g" },
        { title: "Carbohydrates", description: "1g" },
        { title: "Fiber", description: "1g" },
        { title: "Protein", description: "16g" }
    ]
    },
    {
    id: "4",
    name: "Air Fryer Brussels Sprouts",
    date: "03 May 2026",
    mainCategories: [EnumCategories.SidesAppetizers],
    extraCategories: [EnumCategories.AirFryer],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "airfryer-brussels-sprouts",

    // SEO Enhancement fields
    prepTime: "PT5M",
    cookTime: "PT15M",
    totalTime: "PT20M",
    yield: "2 servings",
    cuisine: "International",
    keywords: "brussels sprouts air fryer, healthy side dish, crispy brussels sprouts, balsamic brussels sprouts",
    videoUrl: "",

    introduction: {
        introduction: "Crispy Brussels sprouts with a tangy balsamic finish.",
        subtitle: "Simple, healthy, and packed with flavor",
        description: "These air fryer Brussels sprouts come out crispy on the outside and tender inside. " +
        "Finished with a touch of balsamic vinegar, they get that perfect balance of savory and slightly sweet. " +
        "An easy side dish that goes with pretty much anything."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple ingredients, big flavor:",
        content: [
            { title: "Brussels sprouts", description: "200 g, trimmed and halved" },
            { title: "Olive oil", description: "½ tablespoon" },
            { title: "Paprika", description: "1 teaspoon" },
            { title: "Salt", description: "½ teaspoon" },
            { title: "Black pepper", description: "½ teaspoon, ground" },
            { title: "Balsamic vinegar", description: "1-2 teaspoons, for finishing" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Crispy first, then finish with flavor:",
        content: [
            { description: "Start by washing and trimming the Brussels sprouts, then cut them in half." },
            { description: "Place them in a bowl and add olive oil, paprika, salt, and black pepper." },
            { description: "Mix well so everything is evenly coated." },
            { description: "Transfer to the air fryer basket in a single layer." },
            { description: "Cook at 180ºC for 12-15 minutes, shaking halfway through." },
            { description: "For extra crispiness, optionally cook 2 more minutes at 190ºC." },
            { description: "Remove from the air fryer and immediately drizzle with balsamic vinegar." },
            { description: "Toss quickly and serve while hot." }
        ]
    },
    
    nutritional_values: [
        { title: "Calories", description: "124 kcal" },
        { title: "Total Fat", description: "4g" },
        { title: "Carbohydrates", description: "10g" },
        { title: "Fiber", description: "6g " },
        { title: "Protein", description: "6g" },
    ]
    },

];


