import { Recepie } from './../recepie.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent {
    recepies:Recepie[] =[
      new Recepie('Fry','Something Fried','https://insanelygoodrecipes.com/wp-content/uploads/2022/04/Homemade-Deep-Fry-Chicken-with-Mayonnaise-and-Ketchup-683x1024.webp'),
      new Recepie('Fry','Something Fried','https://insanelygoodrecipes.com/wp-content/uploads/2022/04/Homemade-Deep-Fry-Chicken-with-Mayonnaise-and-Ketchup-683x1024.webp')
    ];

    constructor(){}
    ngOnInit(){

    }
}
