import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  image:String = '';

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.image = this.foodService.getAbout();
  }

}

