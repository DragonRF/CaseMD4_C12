import {Request,Response} from "express";
import {AppDataSource} from "../data-source";
import {detail} from "../model/Detail";

class ProductService{
    private productRepository

    constructor(){
        this.productRepository = AppDataSource.getRepository(detail)
    }
    getAll = async()=>{
        let sql = `select * from Detail`
        let products =- await this.productRepository.query(sql)
        if(!products){
            return'no products found'
        }
        return products
    }
    add = async(product)=>{
        await this.productRepository.save(product)

    }
   private update = async(id,newProduct)=>{
        let product = await this.productRepository.findOneBy({id:id})
       if(!product){
           return null
       }
       return this.productRepository.update({id:id},newProduct)
   }
   findById = async(id)=>{
        let product = await this.productRepository.findOneBy({id:id})
       if(!product){
           return null
       }
       return product;
   }
   private delete = async(id)=>{
        let product = await this.productRepository.findOneBy({id:id})
       if(!product){
           return null
       }
       return this.productRepository.delete({id:id})
   }
   search = async(name)=>{
       let sql = `SELECT * FROM detail d JOIN category c ON d.category = c.idCategory WHERE name LIKE '%${name}%'`
        let products = await this.productRepository.query(sql)
       if(!products){
           return null
       }
       return products
   }

}
export default new ProductService()

