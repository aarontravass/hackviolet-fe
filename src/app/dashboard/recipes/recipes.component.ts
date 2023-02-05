import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { NutritionService } from '../../services/nutrition.service';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material/dialog';
import { RecipeViewerComponent } from '../recipe-viewer/recipe-viewer.component';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    constructor(
        private readonly nutrition: NutritionService,
        public dialog: MatDialog
    ) {}

    recipe_list: Recipe[] = [];
    search_term: string;
    displayedColumns: string[] = [
        'position',
        'image',
        'name',
        'calories',
        'dietLabels',
        'open'
    ];
    ngOnInit(): void {}
    async submit(): Promise<void> {
        await this.nutrition
            .searchRecipe(this.search_term)
            .toPromise()
            .then((res) => {
                console.log(res);
                if (res.status) {
                    let i = 1;
                    this.recipe_list = res.data.map((r: { recipe: Recipe }) => {
                        r.recipe.id = i++;
                        r.recipe.calories = Math.round(r.recipe.calories);
                        return r.recipe;
                    });
                }
            })
            .catch((error: HttpErrorResponse) => {});
    }

    openDialog(recipe: Recipe): void {
        const dialogRef = this.dialog.open(RecipeViewerComponent, {
            data: { recipe }
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
}
