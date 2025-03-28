import { Category } from './app/shared/models/Category'
import { EnumCategories } from './app/shared/models/EnumCategories'


export const course_categories: Category[] = [
    {id: '1', 
    name: EnumCategories.Main, 
    path:"main-recipes",
    imageUrl:'assets/images/categories/main.jpg',
    description: "Welcome to my lunchtime haven, where flavor meets convenience and creativity knows no bounds! Dive into a diverse array of "+
    "lunch recipes featuring succulent chicken, hearty beef, savory pork, and more. Whether you're craving the sizzle of a juicy burger, "+
    "the comfort of a classic burrito, or the timeless appeal of a hotdog, our lunch recipes have you covered. Indulge in the richness of traditional "+
    "dishes from around the globe, from Italian carbonara and pasta delights to fragrant rice bowls bursting with international flavors. "+
    "Elevate your midday meal with our tantalizing lunch recipes that are sure to satisfy your hunger and ignite your culinary imagination.",
    },
    {id: '2', 
    name: EnumCategories.Breakfast, 
    path:"breakfast-recipes",
    imageUrl:'assets/images/categories/breakfast.jpg',
    description: "Start your day off right with our breakfast delights! Dive into a world of wholesome goodness and energizing flavors with "+
    "our diverse selection of breakfast recipes. Whether you're a fan of hearty oats, refreshing smoothies, satisfying sandwiches, or crave "+
    "something more, our breakfast category has something to suit every palate. Join me in celebrating the most important meal of the day with "+
    "our mouthwatering breakfast recipes that will fuel your body and delight your taste buds.",
    },
    {id: '3', 
    name: EnumCategories.Dessert, 
    path:"dessert-recipes",
    imageUrl:'assets/images/categories/dessert.jpg',
    description: "Satisfy your sweet tooth and indulge in decadent delights with our irresistible dessert recipes! Dive into a world of "+
     "confectionery bliss where every bite is a celebration of flavor and creativity. From classic cakes and cookies to exotic treats from "+
     "around the globe, our desserts category offers a tantalizing array of options to suit every craving.Whether you're hosting a special "+
     "occasion or simply treating yourself to a well-deserved indulgence, our dessert recipes are sure to impress and delight. "
    },
    {id: '4', 
    name: EnumCategories.SidesAppetizers, 
    path:"sides-appetizers-recipes",
    imageUrl:'assets/images/categories/appetizers.jpg',
    description: "Enhance every dining experience with our tantalizing selection of sides and appetizers! From crisp, garden-fresh salads to crispy, "+
    "golden fries and beyond, our menu of accompaniments elevates every dish. Delve into a world of flavors and textures with our diverse range of "+
    "appetizers, designed to tantalize your taste buds and elevate your meal. Whether you seek light and nutritious options to balance your plate or "+
    "crave indulgent comfort foods to satisfy your cravings, our selection has something to suit every palate and preference."
    },
]

export const categories_ingredient: Category[] = [
    {id: '11', 
    name: EnumCategories.Beef,
    path:"main-recipes/beef", 
    imageUrl:'assets/images/categories/beef.jpg',
    description: "Savor the richness of our beef recipes! From tender steaks to hearty stews and beyond, our collection showcases "+
    "the versatility and deliciousness of beef. Explore a world of savory flavors and satisfying textures as you discover new favorites "+
    "and timeless classics. Whether you're craving a juicy burger, a comforting pot roast, or something in between, our beef recipes are "+
    "sure to delight your taste buds and leave you craving more.",
    parent_category: "Main",
    },
    {id: '12', 
    name: EnumCategories.Chicken, 
    path:"main-recipes/chicken",
    imageUrl:'assets/images/categories/chicken.jpg',
    description: "Feast on a world of flavor with our chicken recipes! From succulent grilled breasts to savory stews and more, our "+
    "collection of chicken dishes offers something for every palate. Explore a variety of cooking methods and flavor profiles as you "+
    "discover new ways to enjoy this versatile protein. Whether you're in the mood for comforting classics or bold, adventurous flavors, "+
    "our chicken recipes will satisfy your cravings and inspire your culinary creativity.",
    parent_category: "Main",
    },
    {id: '13', 
    name: EnumCategories.Pasta,
    path:"main-recipes/pasta",
    imageUrl:'assets/images/categories/pasta.jpg',
    description: "Dive into our delightful collection of pasta recipes, where traditional flavors meet creative twists. From the "+
    "comforting classics like Spaghetti Bolognese and Fettuccine Alfredo to inventive dishes that will surprise your palate, our pasta "+
    "section has something for everyone. Whether you're looking for quick weekday meals or impressive dishes for special occasions, our "+
    "carefully curated recipes are designed to suit all levels of culinary expertise. Let's bring the warmth and joy of perfect pasta to your table!",
    parent_category: "Main",
    },
    {id: '14', 
    name: EnumCategories.Pork, 
    path:"main-recipes/pork",
    imageUrl:'assets/images/categories/pork.jpg',
    description: "Discover the savory delights of our pork recipes! From succulent pork chops to flavorful roasts and more, our collection showcases "+
    "the versatility and deliciousness of pork. Dive into a world of savory flavors and tender textures as you explore our diverse range of pork dishes. "+
    "Whether you're in the mood for a classic barbecue favorite, a comforting stew, or something exotic and adventurous, our pork recipes will tantalize "+
    "your taste buds and leave you coming back for more.",
    parent_category: "Main",
    },
    {id: '15', 
    name: EnumCategories.Chocolate,
    path:"dessert-recipes/chocolate",
    imageUrl:'assets/images/categories/chocolate.jpg',
    description: "Indulge in the luxurious world of chocolate with our decadent recipes! From rich, velvety cakes to melt-in-your-mouth truffles and beyond, "+
    "our collection celebrates the irresistible allure of chocolate in all its forms. Explore the depths of flavor and richness as you dive into our diverse "+
    "range of chocolate creations. Whether you're craving a comforting classic or seeking to impress with a sophisticated dessert, our chocolate recipes promise "+
    "to satisfy your sweetest cravings and leave you with a lingering taste of bliss.",
    parent_category: "Dessert",
    },
    {id: '16', 
    name: EnumCategories.Oats,
    path:"breakfast-recipes/oats",
    imageUrl:'assets/images/categories/oats.jpg',
    description: "Discover the versatility of oats in our collection of oat-based recipes. From comforting porridges to innovative oat bars, "+
    "our selection showcases the hearty and healthful qualities of oats. Ideal for breakfasts, snacks, or even savory dishes, these recipes "+
    "provide delicious options to fuel your day with wholesome goodness.",
    parent_category: "Breakfast",
    },
]

export const categories_special: Category[] = [
    {id: '31', 
    name: EnumCategories.LowCalorie,
    path:"lowcalorie-recipes",
    imageUrl:'assets/images/categories/lowcalorie.jpg',
    description: "Embark on a journey of culinary delight with my low-calorie recipes, crafted with a passion for flavor and a dedication to "+
    "wellness. As someone who found joy in cooking through a focus on healthier eating, I understand the importance of meals that are both "+
    "satisfying and nourishing. My low-calorie category offers a treasure trove of dishes that prioritize wholesome ingredients without "+
    "compromising on taste. Let's redefine the art of cooking, one delicious and nutritious dish at a time.",
    },
    {id: '32', 
    name: EnumCategories.AirFryer, 
    path:"airfryer-recipes",
    imageUrl:'assets/images/categories/airfryer.jpg',
    description: "Embark on a journey of culinary delight with my low-calorie recipes, crafted with a passion for flavor and a dedication to "+
    "wellness. As someone who found joy in cooking through a focus on healthier eating, I understand the importance of meals that are both "+
    "satisfying and nourishing. My low-calorie category offers a treasure trove of dishes that prioritize wholesome ingredients without "+
    "compromising on taste. Let's redefine the art of cooking, one delicious and nutritious dish at a time.",
    },
    {id: '33', 
    name:EnumCategories.Skillet,
    path:"skillet-recipes",
    imageUrl:'assets/images/categories/skillet.jpg',
    description: "Experience the sizzle and simplicity of skillet recipes! From hearty one-pan meals to flavorful stir-fries and more, our collection "+
    "celebrates the convenience and versatility of cooking in a skillet. Dive into a world of bold flavors and effortless cooking as you explore our diverse "+
    "range of skillet creations. Whether you're a busy weeknight chef seeking quick and satisfying meals or a culinary adventurer looking to experiment with "+
    "new flavors and techniques, our skillet recipes offer something for every taste and occasion. ",
    },
    {id: '34', 
    name: EnumCategories.Min30Recipes,
    path:"30min-recipes",
    imageUrl:'assets/images/categories/30min.jpg',
    description: "Embrace the joy of quick and delicious cooking with our 30-minute recipes! Perfect for busy weeknights or anytime you need a satisfying meal "+
    "in a hurry, our collection showcases the beauty of efficiency without sacrificing flavor. Dive into a world of mouthwatering dishes that can be prepared "+
    "from start to finish in just 30 minutes or less. Whether you're craving hearty pastas, flavorful stir-fries, or comforting soups, our recipes are designed "+
    "to streamline your time in the kitchen while maximizing taste and enjoyment. Say goodbye to long hours spent cooking and hello to quick, delicious meals that "+
    "will leave you feeling satisfied and ready to conquer the day!"
    }, 
]

export const categories_cuisine: Category[] = [
    {id: '41', 
    name:EnumCategories.Asian, 
    path:"asian-recipes",
    imageUrl:'assets/images/categories/asian.jpg',
    description: "Explore the vibrant flavors of Asia with our collection of quick and easy Asian cuisine recipes! From aromatic Thai curries to "+
    "savory Japanese stir-fries, our dishes capture the essence of traditional Asian cooking. Discover bold flavors, exotic ingredients, and simple "+
    "cooking techniques that bring the taste of Asia to your table in 30 minutes or less. Whether you're craving spicy Korean barbecue or comforting "+
    "Vietnamese pho, our recipes offer something for every palate. Experience the magic of Asian cuisine in your own kitchen today!"
    },
    {id: '42', 
    name:EnumCategories.Italian, 
    path:"italian-recipes",
    imageUrl:'assets/images/categories/italian.jpg',
    description: "Delight in the taste of Italy with our quick and easy Italian cuisine recipes! From classic pasta dishes to flavorful risottos and more, "+
    "our collection brings the flavors of Italy to your table in 30 minutes or less. Experience the richness of Italian cuisine with simple yet satisfying "+
    "recipes that celebrate fresh ingredients and timeless flavors. Whether you're craving a comforting bowl of spaghetti carbonara or a hearty mushroom "+
    "risotto, our recipes offer the taste of Italy with every bite. Buon appetito!"
    },
    {id: '43', 
    name:EnumCategories.Indian, 
    path:"indian-recipes",
    imageUrl:'assets/images/categories/indian.jpg',
    description: "Embark on a culinary journey to India with our quick and flavorful Indian cuisine recipes! From aromatic curries to spicy biryanis and more, "+
    "our collection captures the essence of Indian cooking in 30 minutes or less. Indulge in the rich and diverse flavors of Indian spices, lentils, and vegetables, "+
    "all in the comfort of your own kitchen. Whether you're craving the warmth of a butter chicken curry or the tanginess of aloo chaat, our recipes bring the "+
    "vibrant tastes of India to your table with every dish. Spice up your mealtime with our quick and easy Indian recipes today!"
},
    {id: '44', 
    name:EnumCategories.Mexican, 
    path:"mexican-recipes",
    imageUrl:'assets/images/categories/mexican.jpg',
    description: "Transport your taste buds to Mexico with our quick and vibrant Mexican cuisine recipes! From zesty tacos to hearty enchiladas and more, our "+
    "collection captures the essence of Mexican flavors in 30 minutes or less. Experience the bold and lively tastes of chili peppers, cilantro, and lime as you "+
    "explore our diverse range of dishes. Whether you're craving the crunch of a crispy taco or the warmth of a comforting bowl of chili, our recipes offer a fiesta "+
    "of flavor with every bite. Spice up your mealtime with our quick and easy Mexican recipes today!"
},
    {id: '45', 
    name:EnumCategories.Portuguese, 
    path:"portuguese-recipes",
    imageUrl:'assets/images/categories/portuguese.jpg',
    description: "Explore the vibrant flavors of Portugal, my homeland, with our quick and flavorful Portuguese recipes! From iconic seafood stews to beloved bacalhau "+
    "dishes, each recipe captures the essence of Portuguese cuisine in 30 minutes or less. Indulge in the rich heritage of fresh ingredients and time-honored "+
    "traditions that make Portuguese food one of the best in the world. Whether it's the comforting warmth of caldo verde or the sweet delights of pastéis de nata, "+
    "our recipes bring the taste of Portugal to your table with every bite. Experience the richness of Portuguese cuisine with our quick and easy recipes today!"},
]

export const sub_categories: Category[] = [
    {id: '51', 
    name:EnumCategories.Burritos,
    path:"main-recipes/burritos", 
    imageUrl:'assets/images/categories/burrito.jpg',
    description: 
    "Discover the delightful world of burritos! From classic Mexican-style burritos bursting with seasoned meats, "+ 
    "beans, and cheese, to inventive fusion creations featuring bold flavors from around the globe, my burrito " +
    "recipes are sure to satisfy your cravings. Whether you prefer them stuffed with tender grilled chicken or veggies, "+
    "whether you want it for lunch or breakfast there's a burrito recipe here for you",
    parent_category: "Main",
    },
    {id: '52', 
    name:EnumCategories.Smoothies,
    path:"breakfast-recipes/smoothies",
    imageUrl:'assets/images/categories/smoothie.jpg',
    description: "Energize your day with our delicious smoothie recipes. Packed with fruits, vegetables, and other nutritious ingredients, "+
    "these smoothies are perfect for a quick breakfast or a revitalizing snack. Explore a spectrum of flavors and combinations that are not "+
    "only tasty but also health-boosting, designed to keep you hydrated and satisfied.",
    parent_category: "Breakfast",
    },
    {id: '53', 
    name:EnumCategories.Sandwiches,
    path:"breakfast-recipes/sandwiches",
    imageUrl:'assets/images/categories/sandwich.jpg',
    description: "Kickstart your morning with our collection of hearty breakfast sandwiches. Each recipe is packed with flavorful ingredients "+
    "like eggs, cheese, and meats, all nestled between slices of freshly toasted bread or bagels. Whether you're craving something classic or "+
    "looking for a new twist on your morning routine, our sandwiches are sure to energize your day with deliciousness.",
    parent_category: "Breakfast",
    },
    {id: '54', 
    name: EnumCategories.Cake,
    path:"dessert-recipes/cake",
    imageUrl:'assets/images/categories/cake.jpg',
    description: "Indulge in our wide array of cake recipes, perfect for any celebration or sweet craving. From classic chocolate to sophisticated "+
    "fruit layers, each recipe promises moist, fluffy textures and rich flavors. Whether you're a novice baker or a seasoned pastry chef, find your "+
    "next favorite cake here and make every occasion a little sweeter.",
    parent_category: "Dessert",
    },
    {id: '81', 
    name: EnumCategories.Salads, 
    path:"sides-appetizers-recipes/salad",
    imageUrl:'assets/images/categories/salad.jpg',
    description: "Brighten your meals with our vibrant salad recipes. From crisp greens to hearty grains, these dishes are packed with "+
    "nutrients and bursting with flavor. Perfect for a light lunch or a refreshing side, each recipe offers simple instructions and fresh "+
    "ideas to help you enjoy the goodness of nature’s bounty.",
    parent_category: "Sides & Appetizers",
    }
]

export const sample_categories: Category[] = course_categories.concat(categories_ingredient, categories_cuisine, sub_categories, categories_special);