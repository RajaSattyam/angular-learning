import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
 // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  

  constructor(private slService:ShoppinglistService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    console.log(ingName);
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

}
