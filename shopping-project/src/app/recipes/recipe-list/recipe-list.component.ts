import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simply Test', 'https://i0.wp.com/www.cookingandme.com/wp-content/uploads/2014/07/14523274883_3b6177e82b_z.jpg?ssl=1'),
    new Recipe('Second Test', 'Simply Test', 'https://i0.wp.com/www.cookingandme.com/wp-content/uploads/2014/07/14523274883_3b6177e82b_z.jpg?ssl=1')
  ];

  constructor() { }

  ngOnInit() {
  }

}
