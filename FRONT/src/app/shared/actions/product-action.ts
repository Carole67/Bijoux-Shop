import { Product } from '../../models/product';

export class LoadProducts {
    static readonly type = '[Product] LoadProducts';
    constructor() {}
}

export class AddProductToCart {
    static readonly type = '[Product] AddProductToCart';
    constructor(public payload: Product) {}
}

export class RemoveProductToCart {
    static readonly type = '[Product] RemoveProductToCart';
    constructor(public payload: Product) {}
}