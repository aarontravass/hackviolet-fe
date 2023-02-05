import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductInfo } from '../../../models/kroger';
import { KrogerService } from '../../../services/kroger.service';

@Component({
    selector: 'app-kroger-product-view',
    templateUrl: './kroger-product-view.component.html',
    styleUrls: ['./kroger-product-view.component.css']
})
export class KrogerProductViewComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<KrogerProductViewComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { product_id: string },
        private readonly kroger: KrogerService
    ) {}

    product = new ProductInfo();
    onNoClick(): void {
        this.dialogRef.close();
    }

    async ngOnInit(): Promise<void> {
        const user_guid = sessionStorage.getItem('user_guid') || '';
        await this.kroger
            .findProductInformation(user_guid, this.data.product_id)
            .toPromise()
            .then((res) => {
                if (res.status) this.product = res.data.product_info[0];
            });
    }
}
