import { BrandDatabase } from "../database/BrandDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { Brand } from "../models/Brands";

export class BrandBusiness{
    constructor(
        private brandDatabase: BrandDatabase,
        private productDatabase: ProductDatabase
    ){}
    public async getBrands(){
        const brandsDB = await this.brandDatabase.getBrands()

        const brands = brandsDB.map((brandDB) => {
            const brand = new Brand(
                brandDB.id,
                brandDB.name
            )
            return brand
        })

        if(!brands.length) throw new Error("brand não existente")
        return brands
    }

    public async getBrandById(id: string){
        const brandDB = await this.brandDatabase.getBrandById(id)
        const productsDB = await this.productDatabase.getAllProducts()
        if(!brandDB) throw new Error("'id' não encontrado")
        let products = []
        for(let product of productsDB){
            if(product.brand_id === brandDB.id) products.push(product)
        }

        const brand = new Brand(
            brandDB.id,
            brandDB.name
        )

        const output ={
            ...brand, products
        }
        return output
    }
}