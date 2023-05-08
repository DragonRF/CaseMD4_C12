"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const productsController_1 = __importDefault(require("../controller/productsController"));
const express_1 = require("express");
const auth_1 = require("../middlerware/auth");
const role_1 = require("../middlerware/role");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get("/", productsController_1.default.getAll);
exports.productRouter.use(auth_1.auth);
exports.productRouter.post("/", role_1.userAuth, productsController_1.default.createProduct);
exports.productRouter.put("/:id", role_1.userAuth, productsController_1.default.updateProduct);
exports.productRouter.delete("/:id", role_1.userAuth, productsController_1.default.deleteProduct);
exports.productRouter.get("find-by-name", role_1.userAuth, productsController_1.default.search);
//# sourceMappingURL=product-router.js.map