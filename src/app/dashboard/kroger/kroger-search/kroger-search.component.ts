import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product, ProductInfo } from '../../../models/kroger';
import { KrogerService } from '../../../services/kroger.service';

@Component({
    selector: 'app-kroger-search',
    templateUrl: './kroger-search.component.html',
    styleUrls: ['./kroger-search.component.css']
})
export class KrogerSearchComponent implements OnInit {
    constructor(private readonly kroger: KrogerService) {}
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


    async fetchProductDetails(product_id: string): Promise<void>{
        await this.kroger.findProductInformation(this.user_guid, product_id).toPromise()
        .then(res=>{
            if(res.status){
                this.product_info = res.data.product_info;
            }
        })
    }
}
