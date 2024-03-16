import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Icon } from '../shared/models/Icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  icons:Icon[] = [];

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.icons = this.foodService.getSocialIcons();
  }
}
