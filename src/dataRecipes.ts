import {Recipe} from './app/shared/models/Recipe'
import { EnumCategories } from './app/shared/models/EnumCategories'

export const sample_recipes: Recipe[] = [
    {
    id: "1",
    name: "Baba de Camelo",
    date: "03 May 2026",
    mainCategories: [EnumCategories.Dessert],
    extraCategories: [EnumCategories.Max15Recipes, EnumCategories.Portuguese],
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
            { description: "Chill in the fridge for a bit before serving—it's even better cold." }
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
    mainCategories: [EnumCategories.Dessert],
    extraCategories: [ EnumCategories.AirFryer, EnumCategories.Cake],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "dulce-de-leche-petit-gateaux",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT12M",
    totalTime: "PT22M",
    yield: "2 servings",
    cuisine: "French",
    keywords: "dulce de leche petit gateaux, lava cake, portuguese dessert, airfryer dessert, caramel lava cake",
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
    extraCategories: [EnumCategories.Max15Recipes],
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

    {
    id: "5",
    name: "Crispy Air Fryer Chicken Wings",
    date: "05 May 2026",
    mainCategories: [EnumCategories.Main],
    extraCategories: [EnumCategories.Chicken],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "crispy-airfryer-chicken-wings",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT22M",
    totalTime: "PT32M",
    yield: "3 servings",
    cuisine: "International",
    keywords: "air fryer chicken wings, crispy wings, easy chicken wings, homemade wings",
    videoUrl: "",

    introduction: {
        introduction: "Crispy on the outside, juicy on the inside—these air fryer wings deliver big flavor with barely any effort.",
        subtitle: "Big flavor, minimal effort",
        description: "These air fryer chicken wings come out crispy on the outside and juicy on the inside with barely any oil. " +
        "A simple spice mix and a light flour coating give them that perfect texture—great for a quick meal or game night."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple seasoning, great results:",
        content: [
            { title: "Chicken wings", description: "650 g, raw" },
            { title: "All-purpose flour", description: "30 g" },
            { title: "Smoked paprika", description: "1 teaspoon" },
            { title: "Garlic powder", description: "1 teaspoon" },
            { title: "Black pepper", description: "1 teaspoon, ground" },
            { title: "Salt", description: "½ teaspoon" },
            { title: "Olive oil spray", description: "Light coating" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Crispy wings, no deep fryer needed:",
        content: [
            { description: "Start by patting the chicken wings dry with paper towels—this helps them get crispy." },
            { description: "Lightly spray the wings with olive oil. Don't overdo it, just enough to help the coating stick." },
            { description: "In a bag or bowl, mix the flour, paprika, garlic powder, black pepper, and salt." },
            { description: "Add the wings and shake (or toss) until they're evenly coated." },
            { description: "Place the wings in the air fryer in a single layer." },
            { description: "Cook at 180ºC for 15-17 minutes." },
            { description: "Increase the temperature to 200ºC and cook for another 5 minutes for extra crispiness." },
            { description: "Serve hot—perfect on their own or with your favorite sauce. My choice is a smoky bbq!" }
        ]
    },
    
    nutritional_values: [
        { title: "Calories", description: "458 kcal" },
        { title: "Fat", description: "28g" },
        { title: "Carbohydrates", description: "8g" },
        { title: "Fiber", description: "1g" },
        { title: "Protein", description: "39g" },
        ]
    },

    {
    id: "6",
    name: "Strawberry Protein Gelatine Mousse",
    date: "05 May 2026",
    mainCategories: [EnumCategories.Dessert],
    extraCategories: [EnumCategories.LowCalorie],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "strawberry-protein-gelatine-mousse",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT0M",
    totalTime: "PT10M",
    yield: "3 servings",
    cuisine: "International",
    keywords: "protein mousse, strawberry gelatine mousse, healthy dessert, high protein dessert, low calorie dessert",
    videoUrl: "",

    introduction: {
        introduction: "Light, high-protein mousse with a fresh strawberry twist.",
        subtitle: "Easy, refreshing, and surprisingly filling",
        description: "This strawberry protein gelatine mousse is a super easy dessert that's light but still satisfying. " +
        "It combines creamy Greek yogurt with protein powder and fruity gelatine for a smooth, airy texture. " +
        "Great as a low-calorie treat or post-workout snack."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple and protein-packed:",
        content: [
            { title: "Whey protein (vanilla)", description: "1 scoop, about 30g" },
            { title: "Greek yogurt", description: "200 g" },
            { title: "Strawberry gelatine", description: "1 pack" },
            { title: "Water", description: "700 ml (500 ml hot + 200 ml cold)" },
            { title: "Strawberries (optional)", description: "Fresh, for extra flavor and texture" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Mix, chill, and you're done:",
        content: [
            { description: "Start by mixing the whey protein with the Greek yogurt until smooth." },
            { description: "In a separate bowl, dissolve the strawberry gelatine in 500 ml of hot water, stirring well." },
            { description: "Add 200 ml of cold water to the gelatine mixture and stir." },
            { description: "Combine the gelatine mixture with the yogurt and protein mix, stirring until fully smooth." },
            { description: "Optionally, add chopped strawberries for extra texture and freshness." },
            { description: "Pour into a bowl or individual cups." },
            { description: "Place in the fridge for a few hours until fully set." },
            { description: "For a firmer texture, reduce the amount of cold water slightly." }
        ]
    },
    
    nutritional_values: [
        { title: "Calories", description: "79 kcal" },
        { title: "Total Fat", description: "0g" },
        { title: "Carbohydrates", description: "4g" },
        { title: "Fiber", description: "0g" },
        { title: "Protein", description: "15g" },
    ]
    },
    {
    id: "7",
    name: "Crispy Air Fryer Potatoes",
    date: "11 May 2026",
    mainCategories: [EnumCategories.SidesAppetizers],
    extraCategories: [EnumCategories.AirFryer, EnumCategories.LowCalorie],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "crispy-airfryer-potatoes",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT25M",
    totalTime: "PT35M",
    yield: "2 servings",
    cuisine: "International",
    keywords: "air fryer potatoes, crispy potatoes, roasted potatoes, easy side dish, healthy potatoes",
    videoUrl: "",

    introduction: {
        introduction: "Golden and crispy potatoes made easily in the air fryer.",
        subtitle: "Simple, crunchy, and impossible to stop eating",
        description: "These air fryer potatoes are crispy on the outside, fluffy on the inside, and incredibly easy to make. " +
        "A quick soak in cold water helps remove excess starch for better crispiness, while simple seasoning keeps them versatile enough " +
        "to go with almost any meal."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple ingredients, great results:",
        content: [
            { title: "Potatoes", description: "4 small potatoes" },
            { title: "Olive oil", description: "½ tablespoon" },
            { title: "Salt", description: "¼ teaspoon" },
            { title: "Black pepper", description: "1 teaspoon, ground" },
            { title: "Smoked paprika", description: "Optional, for extra flavor" },
            { title: "Herbs", description: "Optional, such as oregano or thyme" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The secret is drying them well before cooking:",
        content: [
            { description: "Start by cutting the potatoes into evenly sized pieces." },
            { description: "Wash them under cold water to remove excess starch." },
            { description: "If you have time, leave the potatoes soaking in cold water in the fridge for a while for extra crispiness." },
            { description: "Drain and dry the potatoes really well using paper towels or a clean kitchen towel." },
            { description: "Place them in a bowl and add olive oil, salt, black pepper, smoked paprika, and any herbs you like." },
            { description: "Mix until everything is evenly coated." },
            { description: "Place the potatoes in the air fryer basket in a single layer." },
            { description: "Cook at 180ºC for 20 minutes, shaking halfway through." },
            { description: "Increase the temperature to 190ºC and cook for another 5 minutes for extra crispiness." },
            { description: "Serve hot and enjoy." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "296 kcal" },
        { title: "Fat", description: "4g" },
        { title: "Carbohydrates", description: "53g" },
        { title: "Fiber", description: "7g" },
        { title: "Protein", description: "7g" }
    ]
    },
    {
    id: "8",
    name: "Traditional Spaghetti Carbonara",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Main],
    extraCategories: [EnumCategories.Pasta, EnumCategories.Italian],
    imageUrl: "assets/images/recipes/carbonara/carbonara.jpeg",
    url: "traditional-spaghetti-carbonara",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT15M",
    totalTime: "PT25M",
    yield: "2 servings",
    cuisine: "Italian",
    keywords: "spaghetti carbonara, authentic carbonara, guanciale pasta, italian pasta recipe",
    videoUrl: "",

    introduction: {
        introduction: "A creamy and authentic carbonara made the traditional way.",
        subtitle: "Simple ingredients, incredible flavor",
        description: "This classic spaghetti carbonara keeps things simple and authentic. " +
        "Crispy guanciale, pecorino romano, eggs, and black pepper come together to create a rich and silky sauce without using any cream. " +
        "It's one of those dishes that feels fancy but comes together surprisingly quickly."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Only a few ingredients, so quality matters:",
        content: [
            { title: "Spaghetti", description: "140 g" },
            { title: "Guanciale", description: "80 g" },
            { title: "Eggs", description: "2 eggs" },
            { title: "Pecorino Romano", description: "50 g, finely grated" },
            { title: "Black pepper", description: "1 teaspoon, ground" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The key is using the pasta heat to create the sauce:",
        content: [
            { description: "Start by cooking the guanciale in a pan over medium heat. No oil is needed since it cooks in its own fat." },
            { description: "Cook until crispy and golden, then set aside while keeping the rendered fat in the pan." },
            { description: "Meanwhile, cook the spaghetti in salted boiling water until al dente." },
            { description: "In a bowl, whisk together the eggs, grated pecorino romano, black pepper, and a small spoon of the guanciale fat." },
            { description: "Once the pasta is ready, transfer it directly to the pan with the guanciale off the heat." },
            { description: "Add a splash of pasta water and mix well." },
            { description: "Pour in the egg and cheese mixture while tossing continuously so the residual heat creates a creamy sauce without scrambling the eggs." },
            { description: "Add more pasta water if needed until the sauce becomes smooth and glossy." },
            { description: "Serve immediately with extra pecorino and black pepper on top." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "683 kcal" },
        { title: "Total Fat", description: "40g" },
        { title: "Carbohydrates", description: "51g" },
        { title: "Fiber", description: "3g" },
        { title: "Protein", description: "31g" }
    ]
    },
    {
    id: "9",
    name: "Air Fryer Chicken Legs",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Main],
    extraCategories: [EnumCategories.Chicken, EnumCategories.AirFryer],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "air-fryer-chicken-legs",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT25M",
    totalTime: "PT35M",
    yield: "2 servings",
    cuisine: "American",
    keywords: "air fryer chicken legs, crispy chicken drumsticks, smoked paprika chicken, easy chicken recipe",
    videoUrl: "",

    introduction: {
        introduction: "Crispy, juicy chicken legs made easily in the air fryer.",
        subtitle: "Simple seasoning, big flavor",
        description: "These air fryer chicken legs are packed with smoky and savory flavors while staying juicy inside with perfectly crispy skin. " +
        "A simple blend of smoked paprika, garlic, onion powder, salt, and black pepper creates a delicious coating that works perfectly in the air fryer. " +
        "Perfect for a quick dinner with minimal cleanup."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple pantry spices bring this recipe together:",
        content: [
            { title: "Chicken legs", description: "4 large" },
            { title: "Smoked paprika", description: "1 teaspoon" },
            { title: "Onion powder", description: "1 teaspoon" },
            { title: "Black pepper", description: "1 teaspoon, ground" },
            { title: "Garlic powder", description: "1 teaspoon" },
            { title: "Salt", description: "1 teaspoon" },
            { title: "Olive oil", description: "1 tablespoon" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The air fryer gives the chicken crispy skin while keeping it juicy inside:",
        content: [
            { description: "Pat the chicken legs dry using paper towels." },
            { description: "In a small bowl, mix together the smoked paprika, onion powder, black pepper, garlic powder, and salt." },
            { description: "Coat the chicken legs lightly with olive oil." },
            { description: "Rub the spice mixture evenly over the chicken legs until fully coated." },
            { description: "Preheat the air fryer to 195°C." },
            { description: "Place the chicken legs in the air fryer basket in a single layer." },
            { description: "Air fry for 22-25 minutes, flipping halfway through cooking, until the skin is crispy and the chicken is fully cooked." },
            { description: "Serve immediately while hot and crispy." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "392 kcal" },
        { title: "Total Fat", description: "20g" },
        { title: "Carbohydrates", description: "5g" },
        { title: "Fiber", description: "2g" },
        { title: "Protein", description: "45g" }
    ]
    },
    {
    id: "10",
    name: "Frango à Brás",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Main],
    extraCategories: [EnumCategories.Chicken, EnumCategories.Portuguese],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "frango-a-bras",

    // SEO Enhancement fields
    prepTime: "PT20M",
    cookTime: "PT30M",
    totalTime: "PT50M",
    yield: "4 servings",
    cuisine: "Portuguese",
    keywords: "frango à bras, portuguese chicken recipe, chicken and fries with eggs, portuguese comfort food",
    videoUrl: "",

    introduction: {
        introduction: "A comforting Portuguese classic made with chicken, crispy fries, and creamy eggs.",
        subtitle: "Creamy, savory, and incredibly satisfying",
        description: "Frango à Brás is a Portuguese comfort food dish that combines shredded chicken, thin crispy fries, onions, garlic, and silky eggs into one flavorful meal. " +
        "The secret is cooking the eggs gently so they stay creamy instead of turning into scrambled eggs. " +
        "Finished with parsley and optional olives, this dish is simple, hearty, and full of traditional flavor."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple ingredients create this traditional Portuguese favorite:",
        content: [
            { title: "Olive oil", description: "2 tablespoons" },
            { title: "Bay leaf", description: "1 leaf" },
            { title: "Potatoes", description: "600 g" },
            { title: "Garlic", description: "3 cloves, minced" },
            { title: "Eggs", description: "4" },
            { title: "Chicken breast", description: "400 g, raw and skinless" },
            { title: "Salt", description: "2 tablespoons" },
            { title: "Black pepper", description: "1 dash" },
            { title: "Onion", description: "1 large, sliced" },
            { title: "Parsley", description: "For serving" },
            { title: "Olives", description: "Optional, for serving" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The key is keeping the eggs creamy and silky:",
        content: [
            { description: "Place the chicken breast in a pot with water, the bay leaf, and salt. Bring to a boil and cook until the chicken is fully cooked through." },
            { description: "Remove the chicken from the pot and shred it using two forks." },
            { description: "Meanwhile, cut the potatoes into very thin strips and cook them using your air fryer fries method until golden and crispy." },
            { description: "Heat the olive oil in a large pan over medium heat." },
            { description: "Add the sliced onion and garlic and sauté until soft and translucent." },
            { description: "Add the shredded chicken to the pan and mix well with the onions and garlic." },
            { description: "Add the cooked fries and gently combine everything together." },
            { description: "Lower the heat to very low and add the eggs." },
            { description: "Stir continuously and gently until the eggs become creamy and coat the mixture without turning into scrambled eggs." },
            { description: "Finish with black pepper, chopped parsley, and olives if desired. Serve immediately." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "386 kcal" },
        { title: "Total Fat", description: "15g" },
        { title: "Carbohydrates", description: "27g" },
        { title: "Fiber", description: "4g" },
        { title: "Protein", description: "32g" }
    ]
    },
    {
    id: "11",
    name: "Strawberry Protein Parfait",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Breakfast],
    extraCategories: [EnumCategories.LowCalorie],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "strawberry-protein-parfait",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT0M",
    totalTime: "PT2H10M",
    yield: "2 servings",
    cuisine: "International",
    keywords: "strawberry parfait, protein parfait, chia pudding parfait, healthy breakfast, skyr parfait",
    videoUrl: "",

    introduction: {
        introduction: "A creamy and refreshing high-protein parfait with strawberries and chia pudding.",
        subtitle: "Perfect for breakfast or a healthy dessert",
        description: "This strawberry protein parfait combines a fruity chia pudding layer with a creamy vanilla protein skyr mixture for a balanced and satisfying treat. " +
        "Packed with protein and fiber, it's perfect as a healthy breakfast, snack, or dessert. " +
        "Preparing it ahead of time makes it even better as the chia pudding becomes thick and creamy overnight."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple ingredients for a healthy and delicious parfait:",
        content: [
            { title: "Vanilla whey protein", description: "30 g" },
            { title: "Skyr natural", description: "300 g" },
            { title: "Vanilla extract", description: "1 teaspoon" },
            { title: "Chia seeds", description: "30 g" },
            { title: "Skyr natural or Greek yogurt", description: "100 g" },
            { title: "Milk", description: "50 ml" },
            { title: "Honey", description: "2 teaspoons" },
            { title: "Strawberries", description: "150 g" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Layering creates the perfect creamy texture:",
        content: [
            { description: "Add 300 g of skyr, milk, honey, strawberries, and vanilla extract to a blender." },
            { description: "Blend until completely smooth." },
            { description: "Transfer the mixture to a bowl and stir in the chia seeds." },
            { description: "Place in the fridge for 1-2 hours, or overnight if possible, until thickened into a chia pudding." },
            { description: "In another bowl, mix the remaining skyr or Greek yogurt with the vanilla whey protein until smooth and creamy." },
            { description: "Once the chia pudding is ready, assemble the parfaits in two glasses or bowls." },
            { description: "Start with one layer of strawberry chia pudding, then add one layer of the vanilla protein skyr mixture." },
            { description: "Repeat the layers one more time." },
            { description: "Serve chilled." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "307 kcal" },
        { title: "Total Fat", description: "6g" },
        { title: "Carbohydrates", description: "21g" },
        { title: "Fiber", description: "7g" },
        { title: "Protein", description: "36g" }
    ]
    },
    {
    id: "12",
    name: "Tomato Rice with Kidney Beans",
    date: "11 May 2026",
    mainCategories: [EnumCategories.SidesAppetizers],
    extraCategories: [EnumCategories.Portuguese],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "tomato-rice-kidney-beans",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT15M",
    totalTime: "PT25M",
    yield: "4 servings",
    cuisine: "International",
    keywords: "tomato rice, kidney bean rice, vegan rice recipe, easy bean rice",
    videoUrl: "",

    introduction: {
        introduction: "A simple and comforting rice dish packed with beans and flavor.",
        subtitle: "Easy, filling, and budget-friendly",
        description: "This tomato rice with kidney beans is a simple one-pot meal that's both hearty and nutritious. " +
        "The rice absorbs the rich tomato flavor while the kidney beans add texture and protein. " +
        "Perfect as a quick lunch, dinner, or meal prep option."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple pantry ingredients make this dish easy anytime:",
        content: [
            { title: "Jasmine rice", description: "200 g" },
            { title: "Kidney beans", description: "252 g, drained" },
            { title: "Garlic", description: "2 cloves, chopped" },
            { title: "Onion", description: "1 large, sliced into semi circles" },
            { title: "Tomato puree", description: "30 g" },
            { title: "Salt", description: "1 teaspoon" },
            { title: "Olive oil", description: "1 tablespoon" },
            { title: "Water", description: "400 ml" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "Everything cooks together in one pot for maximum flavor:",
        content: [
            { description: "Slice the onion into semi circles and finely chop the garlic." },
            { description: "Heat the olive oil in a pot over medium heat." },
            { description: "Add the onion and sauté until softened." },
            { description: "Add the chopped garlic and cook for about 1 minute until fragrant." },
            { description: "Add the rice and tomato puree, stirring well so the rice gets lightly toasted and coated." },
            { description: "Pour in 400 ml of water, or more if you prefer a slightly more runny texture." },
            { description: "Bring everything to a boil." },
            { description: "Cover the pot, reduce the heat, and simmer for 6 minutes." },
            { description: "Add the kidney beans, cover again, and simmer for another 6 minutes." },
            { description: "Serve warm." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "272 kcal" },
        { title: "Total Fat", description: "2g" },
        { title: "Carbohydrates", description: "50g" },
        { title: "Fiber", description: "5g" },
        { title: "Protein", description: "10g" }
    ]
    },
    {
    id: "13",
    name: "Stegt flæsk - Danish Crispy Pork with Parsley Sauce",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Main],
    extraCategories: [EnumCategories.Pork],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "stegt-flæsk",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT35M",
    totalTime: "PT45M",
    yield: "2 servings",
    cuisine: "Danish",
    keywords: "stegt flæsk, danish pork recipe, parsley sauce, crispy pork belly, traditional danish food",
    videoUrl: "",

    introduction: {
        introduction: "A traditional Danish comfort food classic with crispy pork and creamy parsley sauce.",
        subtitle: "Crispy, creamy, and deeply comforting",
        description: "This traditional Danish dish combines crispy roasted pork with boiled potatoes and a rich parsley sauce. " +
        "Known in Denmark as stegt flæsk, the crispy pork pairs perfectly with the creamy sauce flavored with fresh parsley and a touch of lemon. " +
        "Simple ingredients come together to create one of Denmark's most beloved meals."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Classic ingredients for a comforting Danish favorite:",
        content: [
            { title: "Potatoes", description: "400 g" },
            { title: "Pork belly slices (stegt flæsk)", description: "300 g" },
            { title: "Salt", description: "3 teaspoons" },
            { title: "Black pepper", description: "1 teaspoon" },
            { title: "Milk", description: "400 ml" },
            { title: "Butter", description: "25 g" },
            { title: "Flour", description: "25 g" },
            { title: "Parsley", description: "1/2 cup, chopped" },
            { title: "Lemon juice", description: "1/4 lemon" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The crispy pork and creamy parsley sauce are the stars of this dish:",
        content: [
            { description: "Place the potatoes in a pot with salted water and boil until tender." },
            { description: "Season the pork slices with salt and black pepper." },
            { description: "Place the pork on a baking tray and cook in the oven at 190°C for 25–30 minutes until crispy and golden." },
            { description: "Meanwhile, prepare the parsley sauce." },
            { description: "Melt the butter in a saucepan over low to medium heat." },
            { description: "Add the flour and cook while stirring until a smooth paste forms." },
            { description: "Gradually pour in the milk while whisking continuously until fully incorporated." },
            { description: "Cook until the sauce thickens enough to coat the back of a spoon and starts gently bubbling." },
            { description: "Reduce the heat and simmer briefly." },
            { description: "Remove from the heat and stir in the parsley, lemon juice, salt, and black pepper." },
            { description: "Serve the crispy pork with the boiled potatoes and warm parsley sauce." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "850 kcal" },
        { title: "Total Fat", description: "50g" },
        { title: "Carbohydrates", description: "56g" },
        { title: "Fiber", description: "4g" },
        { title: "Protein", description: "45g" }
    ]
    },
    {
    id: "14",
    name: "Ninja Creami Oreo Protein Ice Cream",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Dessert],
    extraCategories: [EnumCategories.LowCalorie],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "ninja-creami-oreo-protein-ice-cream",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT0M",
    totalTime: "PT24H10M",
    yield: "1 pint",
    cuisine: "International",
    keywords: "ninja creami oreo ice cream, protein ice cream, oreo protein dessert, ninja creami recipe",
    videoUrl: "",

    introduction: {
        introduction: "A creamy high-protein Oreo ice cream made in the Ninja Creami.",
        subtitle: "Creamy texture with real Oreo pieces",
        description: "This Ninja Creami Oreo protein ice cream delivers a rich and creamy dessert while staying high in protein and lower in calories than traditional ice cream. " +
        "The combination of protein powder, vanilla, and crushed Oreos creates the perfect balance between indulgent and healthy. " +
        "Perfect for a satisfying dessert or post-workout treat."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple ingredients create a creamy protein-packed dessert:",
        content: [
            { title: "Milk", description: "200 ml" },
            { title: "Almond milk", description: "200 ml" },
            { title: "Xanthan gum", description: "1/4 teaspoon" },
            { title: "Stevia", description: "20 g" },
            { title: "Protein powder", description: "1 scoop" },
            { title: "Vanilla extract", description: "4 ml" },
            { title: "Salt", description: "1 pinch" },
            { title: "Oreos", description: "3 cookies" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The Ninja Creami creates the perfect creamy texture:",
        content: [
            { description: "Add the milk, almond milk, xanthan gum, stevia, protein powder, vanilla extract, and salt to a Ninja Creami pint container." },
            { description: "Blend everything using an immersion blender until completely smooth." },
            { description: "Freeze for at least 12 hours, preferably 24 hours." },
            { description: "Before spinning, run the outside of the container under water for 30 seconds to 1 minute." },
            { description: "Place the pint into the Ninja Creami and run it on Lite Ice Cream mode." },
            { description: "If the texture comes out crumbly, respin until smooth and creamy." },
            { description: "Use a knife to scrape down the sides and create a hole in the center." },
            { description: "Break up 2 Oreos and add them into the center." },
            { description: "Run the Extras or Mix-In setting." },
            { description: "Crumble the remaining Oreo on top before serving." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "350 kcal" },
        { title: "Total Fat", description: "10g" },
        { title: "Carbohydrates", description: "30g" },
        { title: "Fiber", description: "2g" },
        { title: "Protein", description: "34g" }
    ]
    },
    {
    id: "15",
    name: "Ninja Creami Vanilla Protein Ice Cream",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Dessert],
    extraCategories: [EnumCategories.LowCalorie],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "ninja-creami-vanilla-protein-ice-cream",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT0M",
    totalTime: "PT24H10M",
    yield: "1 pint",
    cuisine: "International",
    keywords: "ninja creami vanilla ice cream, protein ice cream, healthy vanilla ice cream, ninja creami recipe",
    videoUrl: "",

    introduction: {
        introduction: "A smooth and creamy high-protein vanilla ice cream made in the Ninja Creami.",
        subtitle: "Simple, creamy, and customizable",
        description: "This Ninja Creami vanilla protein ice cream is the perfect healthy base recipe for endless flavor combinations. " +
        "Creamy, lightly sweet, and packed with protein, it works perfectly on its own or with your favorite mix-ins. " +
        "A simple recipe that delivers classic vanilla ice cream texture with much lighter macros."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "A few simple ingredients create a creamy protein-packed dessert:",
        content: [
            { title: "Milk", description: "200 ml" },
            { title: "Almond milk", description: "200 ml" },
            { title: "Xanthan gum", description: "1/4 teaspoon" },
            { title: "Stevia", description: "20 g" },
            { title: "Protein powder", description: "1 scoop" },
            { title: "Vanilla extract", description: "4 ml" },
            { title: "Salt", description: "1 pinch" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The perfect creamy vanilla base for your Ninja Creami:",
        content: [
            { description: "Add the milk, almond milk, xanthan gum, stevia, protein powder, vanilla extract, and salt to a Ninja Creami pint container." },
            { description: "Blend everything using an immersion blender until completely smooth." },
            { description: "Freeze for at least 12 hours, preferably 24 hours." },
            { description: "Before spinning, run the outside of the container under water for 30 seconds to 1 minute." },
            { description: "Place the pint into the Ninja Creami and run it on Lite Ice Cream mode." },
            { description: "Use a knife to scrape down the sides if needed." },
            { description: "If the texture comes out crumbly, respin until smooth and creamy." },
            { description: "If desired, create a hole in the center and add any mix-ins you like, then run the Extras or Mix-In setting." },
            { description: "Otherwise, enjoy it as a creamy vanilla protein ice cream." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "200 kcal" },
        { title: "Total Fat", description: "2g" },
        { title: "Carbohydrates", description: "14g" },
        { title: "Fiber", description: "1g" },
        { title: "Protein", description: "34g" }
    ]
    },
    {
    id: "16",
    name: "Chicken Stroganoff",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Main],
    extraCategories: [EnumCategories.Chicken, EnumCategories.Skillet],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "chicken-stroganoff",

    // SEO Enhancement fields
    prepTime: "PT15M",
    cookTime: "PT25M",
    totalTime: "PT40M",
    yield: "4 servings",
    cuisine: "International",
    keywords: "chicken stroganoff, creamy chicken mushrooms, chicken mushroom sauce, easy chicken dinner",
    videoUrl: "",

    introduction: {
        introduction: "A creamy and comforting chicken stroganoff with mushrooms and mustard.",
        subtitle: "Rich, creamy, and packed with flavor",
        description: "This chicken stroganoff combines juicy golden chicken with mushrooms, onions, garlic, and a creamy mustard sauce. " +
        "The sauce is rich and smooth while still feeling light enough for an easy weeknight meal. " +
        "Perfect served with rice, pasta, or mashed potatoes."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple ingredients create a rich and flavorful sauce:",
        content: [
            { title: "Chicken breast", description: "600 g, raw and skinless" },
            { title: "Olive oil", description: "1 tablespoon" },
            { title: "Onion", description: "1 medium, sliced" },
            { title: "Garlic", description: "3 cloves, minced" },
            { title: "Mushrooms", description: "250 g, sliced" },
            { title: "Chicken stock", description: "Made with 1/2 stock cube and 150 ml water" },
            { title: "Cream", description: "100 ml" },
            { title: "Dijon mustard", description: "1 tablespoon" },
            { title: "Butter", description: "1 teaspoon" },
            { title: "Salt", description: "0.3 teaspoon" },
            { title: "Black pepper", description: "1 teaspoon, ground" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The creamy sauce comes together quickly in one pan:",
        content: [
            { description: "Season the chicken with salt and black pepper." },
            { description: "Heat a skillet over medium-high heat and cook the chicken until golden brown and fully cooked." },
            { description: "Remove the chicken from the skillet and set aside." },
            { description: "Add the olive oil to the same skillet." },
            { description: "Sauté the onion until soft and translucent." },
            { description: "Add the butter and mushrooms and cook until the mushrooms soften and release their moisture." },
            { description: "Add the garlic and cook for about 1 minute until fragrant." },
            { description: "Pour in the chicken stock and add the Dijon mustard to deglaze the pan." },
            { description: "Bring the sauce to a boil, then reduce to a simmer." },
            { description: "Add the cream and return the chicken to the skillet." },
            { description: "Simmer gently until the sauce becomes smooth and creamy." },
            { description: "Serve warm with your preferred side dish." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "308 kcal" },
        { title: "Total Fat", description: "14g" },
        { title: "Carbohydrates", description: "7g" },
        { title: "Fiber", description: "1g" },
        { title: "Protein", description: "37g" }
    ]
    },
    {
    id: "17",
    name: "Ninja Creami Piña Colada Protein Ice Cream",
    date: "11 May 2026",
    mainCategories: [EnumCategories.Dessert],
    extraCategories: [EnumCategories.LowCalorie],
    imageUrl: "assets/images/recipes/defaultR.jpg",
    url: "ninja-creami-pina-colada-protein-ice-cream",

    // SEO Enhancement fields
    prepTime: "PT10M",
    cookTime: "PT0M",
    totalTime: "PT24H10M",
    yield: "1 pint",
    cuisine: "International",
    keywords: "ninja creami pina colada ice cream, pineapple protein ice cream, coconut protein dessert, ninja creami recipe",
    videoUrl: "",

    introduction: {
        introduction: "A tropical high-protein ice cream with pineapple and coconut flavors.",
        subtitle: "Creamy, refreshing, and packed with tropical flavor",
        description: "This Ninja Creami Piña Colada protein ice cream combines sweet pineapple with creamy coconut milk for a refreshing tropical-inspired dessert. " +
        "Packed with protein while still tasting indulgent, it's perfect for hot days or whenever you want something fruity and creamy. " +
        "Optional coconut flakes add extra texture and flavor."
    },

    ingredients: {
        image: "assets/images/recipes/defaultI.jpg",
        subtitle: "What you'll need",
        introduction: "Simple tropical ingredients create this creamy dessert:",
        content: [
            { title: "Vanilla whey protein", description: "1 scoop" },
            { title: "Xanthan gum", description: "0.25 teaspoon" },
            { title: "Light canned coconut milk (Better for less calories)", description: "200 ml" },
            { title: "Stevia", description: "20 g" },
            { title: "Salt", description: "1 pinch" },
            { title: "Canned pineapple", description: "150 g" },
            { title: "Canned pineapple juice", description: "50 ml" },
            { title: "Coconut flakes", description: "Optional, for topping or mix-ins" }
        ]
    },

    steps: {
        image: "assets/images/recipes/defaultS.jpg",
        subtitle: "How to make it",
        introduction: "The Ninja Creami creates a smooth tropical ice cream texture:",
        content: [
            { description: "Add all the ingredients except the coconut flakes to a Ninja Creami pint container." },
            { description: "Blend everything using an immersion blender until completely smooth." },
            { description: "Freeze for at least 12 hours, preferably 24 hours." },
            { description: "Place the frozen pint into the Ninja Creami and run it on Lite Ice Cream mode." },
            { description: "If necessary, respin until the texture becomes smooth and creamy." },
            { description: "You can simply top the ice cream with coconut flakes before serving." },
            { description: "Alternatively, scrape the sides with a knife, create a hole in the middle, add the coconut flakes, and run the Extras or Mix-In setting." }
        ]
    },

    nutritional_values: [
        { title: "Calories", description: "501 kcal" },
        { title: "Total Fat", description: "29g" },
        { title: "Carbohydrates", description: "52g" },
        { title: "Fiber", description: "3g" },
        { title: "Protein", description: "26g" }
    ]
    }
];


