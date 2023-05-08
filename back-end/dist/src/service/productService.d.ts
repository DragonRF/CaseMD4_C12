declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<number | "no products found">;
    add: (product: any) => Promise<void>;
    private update;
    findById: (id: any) => Promise<any>;
    private delete;
    search: (name: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
