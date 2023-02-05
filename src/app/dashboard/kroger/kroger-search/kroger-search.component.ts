import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product, ProductInfo } from '../../../models/kroger';
import { KrogerService } from '../../../services/kroger.service';
import { KrogerProductViewComponent } from '../kroger-product-view/kroger-product-view.component';

@Component({
    selector: 'app-kroger-search',
    templateUrl: './kroger-search.component.html',
    styleUrls: ['./kroger-search.component.css']
})
export class KrogerSearchComponent implements OnInit {
    constructor(private readonly kroger: KrogerService, public dialog: MatDialog) {}
    user_guid: string= '';
    search_term: string ;
    product_list: Product[] = [];
    product_info = new ProductInfo();
    displayedColumns = ['brand', 'description', 'size', 'price', 'open']
    ngOnInit(): void {
        this.user_guid = sessionStorage.getItem('user_guid') || '';
    }

    async searchProduct(): Promise<void> {
        await this.kroger.search(this.user_guid, this.search_term).toPromise()
        .then(res=>{
            if(res.status){
                this.product_list = res.data.products;
            }
        }).catch((error:HttpErrorResponse)=>{

        })
    }


    

    openDialog(product_id: string): void {
        const dialogRef = this.dialog.open(KrogerProductViewComponent, {
            data: { product_id }
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
}
