import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Ingredient {
  name: string;
  unit: string;
  price: number;
}

interface SandwichIngredient {
  name: string;
  unit: string;
  price: number;
  quantity: number;
}

const ingredients: Ingredient[] = [
  { name: "Bacon", unit: "Piece", price: 0.23 },
  { name: "Bread", unit: "Slice", price: 0.12 },
  { name: "Cheese", unit: "Slice", price: 0.17 },
  { name: "Dijon Mustard", unit: "Tsp", price: 0.02 },
  { name: "Ham", unit: "Slice", price: 0.32 },
  { name: "Hummus", unit: "Container", price: 0.34 },
  { name: "Jelly", unit: "Serving", price: 0.11 },
  { name: "Mayo", unit: "Tbsp", price: 0.13 },
  { name: "Mustard, Yellow", unit: "Tsp", price: 0.02 },
  { name: "Peanut Butter", unit: "Serving", price: 0.22 },
  { name: "Salad Dressing", unit: "Tbsp", price: 0.13 },
  { name: "Salame", unit: "Slice", price: 0.14 },
  { name: "Spinach", unit: "Serving", price: 0.10 },
  { name: "Tomato", unit: "Slice", price: 0.10 },
  { name: "Turkey", unit: "Slice", price: 0.43 },
];

@Component({
  selector: 'app-sandwich-builder',
  templateUrl: './sandwich-builder.component.html',
  styleUrls: ['./sandwich-builder.component.scss'],
})
export class SandwichBuilderComponent implements OnInit {
  @Output() sandwichCost = new EventEmitter<number>();
  ingredients = [];

  constructor() { }

  ngOnInit() {
    this.ingredients = ingredients.map((ingredient): SandwichIngredient => {
      return { ...ingredient, quantity: 0 };
    });
  }

  addIngredient(ingredient, delta) {
    ingredient.quantity += delta;
    this.emitSandwichCost();
  }

  emitSandwichCost() {
    const sandwichCost = this.ingredients
      .reduce((cost, ingredient) => cost + ingredient.price * ingredient.quantity, 0);
    this.sandwichCost.emit(sandwichCost);
  }
}
