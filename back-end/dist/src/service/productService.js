"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Detail_1 = require("../model/Detail");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from Detail`;
            let products = -await this.productRepository.query(sql);
            if (!products) {
                return 'no products found';
            }
            return products;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.update = async (id, newProduct) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.update({ id: id }, newProduct);
        };
        this.findById = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return product;
        };
        this.delete = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.delete({ id: id });
        };
        this.search = async (name) => {
            let sql = `SELECT * FROM detail d JOIN category c ON d.category = c.idCategory WHERE name LIKE '%${name}%'`;
            let products = await this.productRepository.query(sql);
            if (!products) {
                return null;
            }
            return products;
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(Detail_1.detail);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map