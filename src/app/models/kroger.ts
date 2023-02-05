export class Stores {
    locationId: string;
    name: string;
    address: string;
    phone: string;
}

export class Product {
    id: string;
    upc: string;
    brand: string;
    description: string;
    image: string;
    size: string;
    price: number;
}

export class ProductInfo extends Product {
    aisle: string;
    stock: string;
}
