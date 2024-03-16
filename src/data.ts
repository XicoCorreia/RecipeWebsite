import { Category } from './app/shared/models/Category'
import {Recipe} from './app/shared/models/Recipe'
import { Icon } from './app/shared/models/Icon'

export const sample_recipes: Recipe[] = [
    {id: '1',
    name: 'Traditional Carbonara',
    imageUrl: '/assets/images/carbonara.jpg',
    steps: ["cook pasta", "cook bacon"],
    categories: [{id: '1', name:"Lunch", imageUrl:'/assets/images/lunch.jpg'}],
    },
    {id: '2',
    name: 'BBQ Chicken',
    imageUrl: '/assets/images/chickenbbq.jpg',
    steps: ["cook"],
    categories: [{id: '1', name:"Lunch", imageUrl:'/assets/images/lunch.jpg'}],
    },
    {id: '3',
    name: 'Chicken Burrito',
    imageUrl: '/assets/images/burrito1.jpeg',
    steps: ["cook"],
    categories: [{id: '1', name:"Lunch", imageUrl:'/assets/images/lunch.jpg'}],
    },
    {id: '4',
    name: 'Jelly',
    imageUrl: '/assets/images/semifrio.jpeg',
    steps: ["cook"],
    categories: [{id: '3', name:"Dessert", imageUrl:'/assets/images/dessert.jpeg'}],
    },    
    {id: '5',
    name: 'Mince meat w/vegetables',
    imageUrl: '/assets/images/mincemeat.jpeg',
    steps: ["cook"],
    categories: [{id: '1', name:"Lunch", imageUrl:'/assets/images/lunch.jpg'}],
    }
]

export const sample_categories: Category[] = [
 {id: '1', 
 name:"Lunch", 
 imageUrl:'/assets/images/lunch.jpg',
},
{id: '2', 
name:"Breakfast", 
imageUrl:'/assets/images/breakfast.jpeg',
},
{id: '3', 
name:"Dessert", 
imageUrl:'/assets/images/dessert.jpeg',
},
{id: '4', 
name:"Healthy", 
imageUrl:'/assets/images/healthy.jpeg',
}
]

export const sample_icons: Icon[] = [
    {id: '1', 
    name:"Instagram", 
    imageUrl:'/assets/images/instagram.ico',
    router: 'https://www.instagram.com/xicocorreia17/'
    },
    {id: '2', 
    name:"Twitter", 
    imageUrl:'/assets/images/twitter.ico',
    router: 'https://twitter.com/XicoCorreia17'
    },
    {id: '3', 
    name:"Facebook", 
    imageUrl:'/assets/images/facebook.ico',
    router: 'https://www.facebook.com/francisco.correia.39/'
    },
    {id: '4', 
    name:"LinkedIn", 
    imageUrl:'/assets/images/linkedin.ico',
    router: 'https://www.linkedin.com/in/francisco-correia7/'
    },
    {id: '5', 
    name:"Github", 
    imageUrl:'/assets/images/github.ico',
    router: 'https://github.com/XicoCorreia'
    }
    ] 