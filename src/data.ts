import { Category } from './app/shared/models/Category'
import {Recipe} from './app/shared/models/Recipe'
import { Icon } from './app/shared/models/Icon'

export const sample_recipes: Recipe[] = [
    {id: '1',
    name: 'Mince meat w/vegetables',
    date: "02 May 2024",
    imageUrl: '/assets/images/recipes/mince_meat.jpg',
    steps: "<ol> <li>Water</li> <li>Tomato</li> <li>Lettuce</li> </ol>",
    categories: ["Main", "Beef"],
    description:"comida comida comida comida comida comida",
    subtitle:"Why you are going to cook this recipe every week",
    introduction:"comida comida comida comida ",
    url_steps:'/assets/images/recipes/mince_meat.jpg',
    url_ingredients: '/assets/images/recipes/mince_meat.jpg',
    ingredients: "Here are the ingredients you will need:<br>" +
    "<ol> <li>Water</li> <li>Tomato</li> <li>Lettuce</li> </ol>" +
    "You can see it here."
    }
]
/*
export const recipes_no_photos: Recipe[] = [
    {id: '2',
    name: 'Traditional Carbonara',
    imageUrl: '/assets/images/recipes/carbonara.jpg',
    steps: [],
    categories: ["Main", "Pasta"],
    },
    {id: '3',
    name: 'BBQ Chicken',
    imageUrl: '/assets/images/recipes/chickenbbq.jpg',
    steps: [],
    categories: ["Main", "Chicken"],
    },
    {id: '4',
    name: 'Chicken Burrito',
    imageUrl: '/assets/images/recipes/chicken_burrito.jpg',
    steps: [],
    categories: ["Main", "Burritos", "Chicken"],
    },
    {id: '5',
    name: 'Apple Turnovers',
    imageUrl: '/assets/images/recipes/apple_turnovers.jpg',
    steps: [],
    categories: ["Dessert"],
    },   
    {id: '6',
    name: 'Breakfast Burrito',
    imageUrl: '/assets/images/recipes/breakfast_burrito.jpg',
    steps: [],
    categories: ["Breakfast", "Burritos"],
    }, 
    {id: '8',
    name: 'Russian Salad',
    imageUrl: '/assets/images/recipes/russian_salad.png',
    steps: [],
    categories: ["Sides", "Main", "Salads"],
    },
    {id: '11',
    name: 'Carrot Fries',
    imageUrl: '/assets/images/recipes/carrot_airfryer.jpg',
    steps: [],
    categories: ["Sides"],
    },
    {id: '12',
    name: 'Airfryer fries',
    imageUrl: '/assets/images/recipes/airfryer_fries.jpg',
    steps: [],
    categories: ["Sides"],
    },
    {id: '13',
    name: 'Beef Burguer',
    imageUrl: '/assets/images/recipes/beef_burger.jpg',
    steps: [],
    categories: ["Main"],
    },
    {id: '14',
    name: 'Popcorn chicken',
    imageUrl: '/assets/images/recipes/chicken_popcorn.png',
    steps: [],
    categories: ["Main", "Chicken"],
    },
    {id: '17',
    name: 'Brigadeiros',
    imageUrl: '/assets/images/recipes/brigadeiros.jpg',
    steps: [],
    categories: ["Dessert"],
    },
    {id: '18',
    name: 'Apple&Cinnamon Overnight oats',
    imageUrl: '/assets/images/recipes/overnight_oats_applecin.jpg',
    steps: [],
    categories: ["Breakfast", "Oats"],
    },
    {id: '20',
    name: 'Strawberrie&Banana Smoothie',
    imageUrl: '/assets/images/recipes/strawberry_smoothie.png',
    steps: [],
    categories: ["Breakfast", "Smoothies"],
    },
    {id: '21',
    name: 'Yogurt bowl',
    imageUrl: '/assets/images/recipes/yogurt_bowl.jpg',
    steps: [],
    categories: ["Breakfast"],
    },
    {id: '22',
    name: 'P&J Sandwich',
    imageUrl: '/assets/images/recipes/p&j.png',
    steps: [],
    categories: ["Breakfast", "Sandwhiches"],
    },
    {id: '7',
    name: 'Frango à brás',
    imageUrl: '',
    steps: [],
    categories: ["Main", "Chicken"],
    },
    {id: '9',
    name: 'Carne de porco à Portuguesa',
    imageUrl: '',
    steps: [],
    categories: ["Main"],
    },
    {id: '10',
    name: 'Airfryer brocolli',
    imageUrl: '',
    steps: [],
    categories: ["Sides"],
    },
    {id: '15',
    name: 'Semifrio gelatina',
    imageUrl: '',
    steps: [],
    categories: ["Dessert"],
    },
    {id: '16',
    name: 'Baba de camelo',
    imageUrl: '',
    steps: [],
    categories: ["Dessert"],
    },
]
*/

export const main_Categories: Category[] = [
    {id: '1', 
    name:"Main", 
    path:"main-recipes",
    imageUrl:'/assets/images/categories/main.jpg',
    description: "Welcome to my lunchtime haven, where flavor meets convenience and creativity knows no bounds! Dive into a diverse array of "+
    "lunch recipes featuring succulent chicken, hearty beef, savory pork, and more. Whether you're craving the sizzle of a juicy burger, "+
    "the comfort of a classic burrito, or the timeless appeal of a hotdog, our lunch recipes have you covered. Indulge in the richness of traditional "+
    "dishes from around the globe, from Italian carbonara and pasta delights to fragrant rice bowls bursting with international flavors. "+
    "Elevate your midday meal with our tantalizing lunch recipes that are sure to satisfy your hunger and ignite your culinary imagination.",
    },
    {id: '2', 
    name:"Breakfast", 
    path:"breakfast-recipes",
    imageUrl:'/assets/images/categories/breakfast.jpeg',
    description: "Start your day off right with our breakfast delights! Dive into a world of wholesome goodness and energizing flavors with "+
    "our diverse selection of breakfast recipes. Whether you're a fan of hearty oats, refreshing smoothies, satisfying sandwiches, or crave "+
    "something more, our breakfast category has something to suit every palate. Join me in celebrating the most important meal of the day with "+
    "our mouthwatering breakfast recipes that will fuel your body and delight your taste buds.",
    },
    {id: '3', 
    name:"Dessert", 
    path:"dessert-recipes",
    imageUrl:'/assets/images/categories/dessert.jpeg',
    description: "Satisfy your sweet tooth and indulge in decadent delights with our irresistible dessert recipes! Dive into a world of "+
     "confectionery bliss where every bite is a celebration of flavor and creativity. From classic cakes and cookies to exotic treats from "+
     "around the globe, our desserts category offers a tantalizing array of options to suit every craving.Whether you're hosting a special "+
     "occasion or simply treating yourself to a well-deserved indulgence, our dessert recipes are sure to impress and delight. "
    },
    {id: '4', 
    name:"Sides", 
    path:"sides-recipes",
    imageUrl:'/assets/images/categories/sides.jpeg',
    description: "Elevate any meal with our delectable selection of sides! From crisp and refreshing salads to crispy golden fries and "+
    "beyond, our sides category offers the perfect accompaniments to complement any dish. Explore a bounty of flavors and textures as you "+
    "discover our diverse range of side dishes designed to tantalize your taste buds and elevate your dining experience. "+
    "Whether you're looking for something light and nutritious to balance out your meal or crave indulgent comfort food to satisfy your "+
    "cravings, our sides category has something for everyone. ",
    }
]


export const sub_categories_Main: Category[] = [
    {id: '11', 
    name:"Beef",
    path:"main-recipes/beef", 
    imageUrl:'/assets/images/categories/beef.jpeg',
    description: "Savor the richness of our beef recipes! From tender steaks to hearty stews and beyond, our collection showcases "+
    "the versatility and deliciousness of beef. Explore a world of savory flavors and satisfying textures as you discover new favorites "+
    "and timeless classics. Whether you're craving a juicy burger, a comforting pot roast, or something in between, our beef recipes are "+
    "sure to delight your taste buds and leave you craving more.",
    parent_category: "Main",
    },
    {id: '12', 
    name:"Chicken", 
    path:"main-recipes/chicken",
    imageUrl:'/assets/images/categories/chicken.jpeg',
    description: "Feast on a world of flavor with our chicken recipes! From succulent grilled breasts to savory stews and more, our "+
    "collection of chicken dishes offers something for every palate. Explore a variety of cooking methods and flavor profiles as you "+
    "discover new ways to enjoy this versatile protein. Whether you're in the mood for comforting classics or bold, adventurous flavors, "+
    "our chicken recipes will satisfy your cravings and inspire your culinary creativity.",
    parent_category: "Main",
    },
    {id: '13', 
    name:"Burritos",
    path:"main-recipes/burritos", 
    imageUrl:'/assets/images/categories/burrito.jpeg',
    description: 
    "Discover the delightful world of burritos! From classic Mexican-style burritos bursting with seasoned meats, "+ 
    "beans, and cheese, to inventive fusion creations featuring bold flavors from around the globe, my burrito " +
    "recipes are sure to satisfy your cravings. Whether you prefer them stuffed with tender grilled chicken or veggies, "+
    "whether you want it for lunch or breakfast there's a burrito recipe here for you",
    parent_category: "Main",
    },
    {id: '14', 
    name:"Pasta", 
    path:"main-recipes/pasta",
    imageUrl:'/assets/images/categories/pasta.jpg',
    description: "Dive into our delightful collection of pasta recipes, where traditional flavors meet creative twists. From the "+
    "comforting classics like Spaghetti Bolognese and Fettuccine Alfredo to inventive dishes that will surprise your palate, our pasta "+
    "section has something for everyone. Whether you're looking for quick weekday meals or impressive dishes for special occasions, our "+
    "carefully curated recipes are designed to suit all levels of culinary expertise. Let's bring the warmth and joy of perfect pasta to your table!",
    parent_category: "Main",
    },

]

export const sub_categories_Breakfast: Category[] = [
    {id: '20', 
    name:"Oats", 
    path:"breakfast-recipes/oats",
    imageUrl:'/assets/images/categories/oats.png',
    description: "Discover the versatility of oats in our collection of oat-based recipes. From comforting porridges to innovative oat bars, "+
    "our selection showcases the hearty and healthful qualities of oats. Ideal for breakfasts, snacks, or even savory dishes, these recipes "+
    "provide delicious options to fuel your day with wholesome goodness.",
    parent_category: "Breakfast",
    },
    {id: '21', 
    name:"Smoothies", 
    path:"breakfast-recipes/smoothies",
    imageUrl:'/assets/images/categories/smoothie.png',
    description: "Energize your day with our delicious smoothie recipes. Packed with fruits, vegetables, and other nutritious ingredients, "+
    "these smoothies are perfect for a quick breakfast or a revitalizing snack. Explore a spectrum of flavors and combinations that are not "+
    "only tasty but also health-boosting, designed to keep you hydrated and satisfied.",
    parent_category: "Breakfast",
    },
    {id: '22', 
    name:"Sandwhiches", 
    path:"breakfast-recipes/sandwhiches",
    imageUrl:'/assets/images/categories/sandwhich.jpg',
    description: "Kickstart your morning with our collection of hearty breakfast sandwiches. Each recipe is packed with flavorful ingredients "+
    "like eggs, cheese, and meats, all nestled between slices of freshly toasted bread or bagels. Whether you're craving something classic or "+
    "looking for a new twist on your morning routine, our sandwiches are sure to energize your day with deliciousness.",
    parent_category: "Breakfast",
    }
]


export const sub_categories_Dessert: Category[] = [
    {id: '30', 
    name:"Cake", 
    path:"dessert-recipes/cake",
    imageUrl:'/assets/images/categories/cake.png',
    description: "Indulge in our wide array of cake recipes, perfect for any celebration or sweet craving. From classic chocolate to sophisticated "+
    "fruit layers, each recipe promises moist, fluffy textures and rich flavors. Whether you're a novice baker or a seasoned pastry chef, find your "+
    "next favorite cake here and make every occasion a little sweeter.",
    parent_category: "Dessert",
    }
]

export const sub_categories_Sides: Category[] = [
    {id: '40', 
    name:"Salads", 
    path:"dessert-recipes/salad",
    imageUrl:'/assets/images/categories/salad.jpg',
    description: "Brighten your meals with our vibrant salad recipes. From crisp greens to hearty grains, these dishes are packed with "+
    "nutrients and bursting with flavor. Perfect for a light lunch or a refreshing side, each recipe offers simple instructions and fresh "+
    "ideas to help you enjoy the goodness of nature’s bounty.",
    parent_category: "Sides",
    }
]

export const sample_categories: Category[] = main_Categories.concat(sub_categories_Main ,sub_categories_Breakfast, sub_categories_Dessert, sub_categories_Sides);

export const sample_icons: Icon[] = [
    {id: '1', 
    name:"Instagram", 
    imageUrl:'/assets/images/icons/instagram.ico',
    router: 'https://www.instagram.com/xicocorreia17/'
    },
    {id: '2', 
    name:"Twitter", 
    imageUrl:'/assets/images/icons/twitter.ico',
    router: 'https://twitter.com/XicoCorreia17'
    },
    {id: '3', 
    name:"Facebook", 
    imageUrl:'/assets/images/icons/facebook.ico',
    router: 'https://www.facebook.com/francisco.correia.39/'
    },
    {id: '4', 
    name:"LinkedIn", 
    imageUrl:'/assets/images/icons/linkedin.ico',
    router: 'https://www.linkedin.com/in/francisco-correia7/'
    },
    {id: '5', 
    name:"Github", 
    imageUrl:'/assets/images/icons/github.ico',
    router: 'https://github.com/XicoCorreia'
    }
] 