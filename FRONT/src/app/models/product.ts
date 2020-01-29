export class Product {
    constructor(public id: number,
        public name: string,
        public material: string,
        public price: number,
        public image: string) { }

    public static fromJson(json: Object): Product {
        return new Product(
            json['id'],
            json['name'],
            json['material'],
            json['price'],
            json['image']
        );
    }
}