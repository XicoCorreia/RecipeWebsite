import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  icon: string = '';
  isDropdownOpen: boolean = false;  // Flag to track dropdown state

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.icon = this.foodService.getIcon();
  }

  // Toggle the dropdown visibility on click
  toggleDropdown(event: Event): void {
    event.preventDefault();  // Prevent default behavior of the link
    this.isDropdownOpen = !this.isDropdownOpen;  // Toggle the dropdown visibility
  }

  // Close the dropdown when an option is selected
  closeDropdown(): void {
    this.isDropdownOpen = false;  // Close the dropdown
  }
}
