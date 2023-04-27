import express from "express"
import { BrandDatabase } from "../database/BrandDatabase"
import { BrandBusiness } from "../business/BrandBusiness"
import { BrandController } from "../controller/BrandController"
import { ProductDatabase } from "../database/ProductDatabase"

export const brandRouter = express.Router()

const brandController = new BrandController(
    new BrandBusiness(
        new BrandDatabase(),
        new ProductDatabase()
        )
)

brandRouter.get("/", brandController.getBrands)