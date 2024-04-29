import { Category } from './app/shared/models/Category'
import {Recipe} from './app/shared/models/Recipe'
import { Icon } from './app/shared/models/Icon'

export const sample_recipes: Recipe[] = [
    {id: '1',
    name: 'Mince meat w/vegetables',
    imageUrl: '/assets/images/recipes/mince_meat.jpg',
    steps: ["cook"],
    categories: ["Lunch", "Beef"],
    },
    {id: '2',
    name: 'Traditional Carbonara',
    imageUrl: '/assets/images/recipes/carbonara.jpg',
    steps: ["cook pasta", "cook bacon"],
    categories: ["Lunch"],
    },
    {id: '3',
    name: 'BBQ Chicken',
    imageUrl: '/assets/images/recipes/chickenbbq.jpg',
    steps: ["cook"],
    categories: ["Lunch", "Chicken"],
    },
    {id: '4',
    name: 'Chicken Burrito',
    imageUrl: '/assets/images/recipes/burrito1.jpeg',
    steps: ["cook"],
    categories: ["Lunch", "Burrito"],
    },
    {id: '5',
    name: 'Apple Turnovers',
    imageUrl: '/assets/images/recipes/apple_turnovers.jpeg',
    steps: ["cook"],
    categories: ["Dessert"],
    },    
]

export const sample_categories: Category[] = [
{id: '1', 
name:"Lunch", 
imageUrl:'/assets/images/categories/lunch.jpg',
path:"lunch-recipes",
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
description: "Breakfast",
},
{id: '3', 
name:"Dessert", 
path:"dessert-recipes",
imageUrl:'/assets/images/categories/dessert.jpg',
description: "Dessert",
},
{id: '4', 
name:"Sides", 
path:"sides-recipes",
imageUrl:'/assets/images/categories/sides.jpeg',
description: "Sides",
},
{id: '5', 
name:"Oats", 
path:"oats",
imageUrl:'/assets/images/categories/breakfast.jpeg',
description: "Oats",
parent_category: "Breakfast",
},
{id: '6', 
name:"Burrito",
path:"burrito", 
imageUrl:'/assets/images/categories/lunch.jpg',
description: 
"Discover the delightful world of burritos! From classic Mexican-style burritos bursting with seasoned meats, "+ 
"beans, and cheese, to inventive fusion creations featuring bold flavors from around the globe, my burrito " +
"recipes are sure to satisfy your cravings. Whether you prefer them stuffed with tender grilled chicken or veggies, "+
"whether you want it for lunch or breakfast there's a burrito recipe here for you",
parent_category: "Lunch",
},
{id: '7', 
name:"Cake", 
path:"cake",
imageUrl:'/assets/images/categories/dessert.jpg',
description: "cake",
parent_category: "Dessert",
},
{id: '8', 
name:"Beef",
path:"beef", 
imageUrl:'/assets/images/categories/lunch.jpg',
description: "Beef",
parent_category: "Lunch",
},
{id: '8', 
name:"Chicken", 
path:"chicken",
imageUrl:'/assets/images/categories/lunch.jpg',
description: "Chicken",
parent_category: "Lunch",
}
]

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