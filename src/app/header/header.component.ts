import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  icon:String = '';

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.icon = this.foodService.getIcon();
  }

}
