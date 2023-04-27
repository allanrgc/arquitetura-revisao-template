import { ProductDatabase } from "../database/ProductDatabase";
import { getProductOutputDTO } from "../dtos/getProducts.dto";
import { Product } from "../models/Products";

export class ProductBusiness{
    constructor(
        private productDatabase: ProductDatabase
    ){}

    public async getProducts(q: string | undefined): Promise<Product[]>{
        const {productsDB, brandsDB} = await this.productDatabase.getProductsAndBrands(q)

        const products = productsDB.map((productDB) => {
            const product = new Product(
                productDB. id,
                productDB.name,
                productDB.price,
                productDB.description,
                getBrand(productDB.brand_id)
            )

            return product
        })

        function getBrand (brandId: string) {
            const brand = brandsDB.find((brandDB) => brandDB.id === brandId)
            return brand
        }

        if(productsDB.length === 0){
            throw new Error("Nenhum produto encontrado")
        }
        // let productsDB

        // if(q){
        //     // caso receba uma querie como nome do produto
        //     //aqui vai ter a implementação da comunicação com o bando de dados
        //     // preciso chamar o método do ProductDatabase
        //     // getProductByName
        //     productsDB = await this.productDatabase.getProductByName(q)

        //     productsDB = productsDB.map((productDB) => {
        //         const product = new Product(
        //             productDB.id,
        //             productDB.name,
        //             productDB.price,
        //             productDB.description,
        //             {
        //                 id: "", name:""
        //             }
        //         )
        //     })
        // }else{
        //     //chamar o método de buscar todos os produtos
        //     // getAllProducts
        //     productsDB = await this.productDatabase.getAllProducts()
        // }

        return products
    }
}