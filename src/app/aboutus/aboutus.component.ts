import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  image:String = '';

  constructor(private foodService:FoodService, private titleService:Title, private metaService: Meta) {
    

  }

  ngOnInit(): void {
    this.image = this.foodService.getAbout();
    this.titleService.setTitle("About Me - Nelas Recipes");
    this.metaService.updateTag( {name: 'description', content: 'your page description content'});
  }

}

