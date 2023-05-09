import ProductsController from "../controller/productsController";
import {Router} from "express";
import {auth} from "../middlerware/auth";
import {userAuth} from "../middlerware/role";


export const productRouter= Router()
productRouter.get("/",ProductsController.getAll)
productRouter.use(auth)
productRouter.get("/home",ProductsController.getAll)
productRouter.post("/",userAuth,ProductsController.createProduct)
productRouter.put("/:id",userAuth,ProductsController.updateProduct)
productRouter.delete("/:id",userAuth,ProductsController.deleteProduct)
productRouter.get("find-by-name",userAuth,ProductsController.search)
