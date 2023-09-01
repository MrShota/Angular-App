import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('test recipe','test too','https://www.acouplecooks.com/wp-content/uploads/2019/10/Spaghetti-Squash-Recipe-with-Pesto-008-784x980.jpg'),
    new Recipe('test recipe','test too','https://www.acouplecooks.com/wp-content/uploads/2019/10/Spaghetti-Squash-Recipe-with-Pesto-008-784x980.jpg')
  ];


}
