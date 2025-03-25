import { Component, Inject } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Title, Meta} from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  image:String = '';

  constructor(private foodService:FoodService, private titleService:Title, private metaService: Meta, @Inject(DOCUMENT) private dom: any ) {
    

  }

  ngOnInit(): void {
    this.image = this.foodService.getAbout();

    this.titleService.setTitle("About Me | Nela's Recipes");

    // Update meta tags for the "About Me" page
    this.metaService.updateTag({ name: 'description', content: 'Discover the story behind Nela\'s Recipes. Meet Francisco Correia, a passionate cook, traveler, and fitness enthusiast, on his journey from Portugal to Copenhagen.' });
    this.metaService.updateTag({ property: 'og:title', content: 'About Me | Nela\'s Recipes' });
    this.metaService.updateTag({ property: 'og:description', content: 'Meet Francisco, the creator of Nela\'s Recipes, and learn about his passion for cooking and his journey from Portugal to Denmark.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://nelasrecipes.com/assets/images/about.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://nelasrecipes.com/about-me' });
    this.metaService.updateTag({ property: 'og:type', content: 'profile' });

    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
    if (element==null) {
      element= this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel','canonical')
    element.setAttribute('href', 'https://nelasrecipes.com/about-me');
     

    // Structured data for the About Me page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Francisco Correia",
      "description": "Creator of Nela's Recipes, passionate about cooking, fitness, and travel.",
      "image": "https://nelasrecipes.com/assets/images/about.jpg",  
      "url": "https://www.nelasrecipes.com/about-me",
      "sameAs": [
        "https://www.facebook.com/francisco.correia.39/",  
        "https://www.instagram.com/xicocorreia17/",
        "https://x.com/XicoCorreia17"
      ]
    };

    this.metaService.updateTag({
      name: 'ld+json', content: JSON.stringify(structuredData)
    });
  }

}

