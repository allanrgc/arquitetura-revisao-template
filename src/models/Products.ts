export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private description: string,
        private brand: {
            id: string;
            name: string;
        }
    ) {}
   
    public geId(): string {
        return this.id;
    }
    public seId(value: string) {
        this.id = value;
    }
    
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }

    public getPrice(): number {
        return this.price;
    }
    public setPrice(value: number) {
        this.price = value;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(value: string) {
        this.description = value;
    }

     public getBrand(): {
        id: string;
        name: string;
    } {
        return this.brand;
    }
    public setBrand(value: {
        id: string;
        name: string;
    }) {
        this.brand = value;
    }

    
}