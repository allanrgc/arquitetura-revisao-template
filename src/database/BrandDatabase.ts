import { BaseDatabase } from "./BaseDatabase";

export class BrandDatabase extends BaseDatabase{
    public static TABLE_BRANDS = "brands"

    public async getBrands() {
        const brandsDB = await BaseDatabase
        .connection(BrandDatabase.TABLE_BRANDS)
        
        return brandsDB
    }


    public async getBrandById(id: string){
        const [brandDB] = await BaseDatabase
        .connection(BrandDatabase.TABLE_BRANDS)
        .select(
            "brands.*", 
            "product.id AS productId",
            "products.name",
            "products.price",
            "products.description"
            )
        .from(BrandDatabase.TABLE_BRANDS)
        .where("brands.id", "=", id)
        .innerJoin("product", "products.brand_id","=", "brands.id")

        return brandDB
    }


}