import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../../models/recipe';

@Component({
    selector: 'app-recipe-viewer',
    templateUrl: './recipe-viewer.component.html',
    styleUrls: ['./recipe-viewer.component.css']
})
export class RecipeViewerComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<RecipeViewerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { recipe: Recipe }
    ) {}

    added = false;
    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {}

    addRecipe(): void {
        if(this.added) return;
        const calorie_count = parseInt(
            localStorage.getItem('calorie_count') || '0'
        );
        localStorage.setItem(
            'calorie_count',
            (calorie_count - this.data.recipe.calories).toString()
        );
        this.added = true;
    }
}
