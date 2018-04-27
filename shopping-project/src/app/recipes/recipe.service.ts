import { Recipe } from './recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter()
   private recipes: Recipe[] = [
        new Recipe('A test recipe', 'Simply Test', 'https://i0.wp.com/www.cookingandme.com/wp-content/uploads/2014/07/14523274883_3b6177e82b_z.jpg?ssl=1'),
        new Recipe('Second Test', 'Simply Test', 'https://i0.wp.com/www.cookingandme.com/wp-content/uploads/2014/07/14523274883_3b6177e82b_z.jpg?ssl=1')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}