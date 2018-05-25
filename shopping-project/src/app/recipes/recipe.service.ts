import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipes.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
            'Paneer',
             'Normal Paneer', 'https://i0.wp.com/www.cookingandme.com/wp-content/uploads/2014/07/14523274883_3b6177e82b_z.jpg?ssl=1',
             [
                 new Ingredient('Paneer', 2),
                 new Ingredient('French Fries', 12)
             ]
        ),
        new Recipe(
            'Tasty Paneer',
            'Super tasty', 'https://i0.wp.com/www.cookingandme.com/wp-content/uploads/2014/07/14523274883_3b6177e82b_z.jpg?ssl=1',
            [
                new Ingredient('Fresh Paneer', 2),
                new Ingredient('French Fries', 12),
                new Ingredient('Tomato', 12)
            ]
        )
    ];

    constructor(private slService:ShoppinglistService){ }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}