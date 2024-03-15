import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getIcon():String {
    return '/assets/images/icon.png';
  }

  getFirstImage():String {
    return '/assets/images/carbonara.jpg';
  }

  getAllCategories():String[] {
    return['/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg'
    ];
  }

  getRecentRecipes():String[] {
    return['/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg',
    '/assets/images/carbonara.jpg'
    ];
  }
}
