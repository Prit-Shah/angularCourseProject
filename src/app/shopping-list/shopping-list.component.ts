import { Ingredient } from './../shared/ingredients.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredient[]=[new Ingredient('Apples',5),new Ingredient('Tomatoes',1)];
}
