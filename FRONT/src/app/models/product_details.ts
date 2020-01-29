import { Product } from './product'

export class ProductDetails {


    constructor(public id: Product,
        public reference: string,
        public weight: Float32Array,
        public material: string,
        public gender: string) { }

        
    public static fromJson(json: Object): ProductDetails {
        return new ProductDetails(
            Product.fromJson(json['produit']),
            json['reference'],
            json['weight'],
            json['material'],
            json['gender']
        );
    }
}

