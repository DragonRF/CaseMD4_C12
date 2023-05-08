"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middlerware/auth");
class UserService {
    constructor() {
        this.getAll = async () => {
            let sql = `select *
                   from user
                   where role = 'user'`;
            let user = await this.userRepository.query(sql);
            return user;
        };
        this.getMyProfile = async (idUser) => {
            let sql = `select * from user where idUser = ${idUser}`;
            let users = await this.userRepository.query(sql);
            return users;
        };
        this.checkNewPassword = async (idUser, password) => {
            let userCheck = await this.userRepository.findOneBy({ idUser: idUser });
            if (!userCheck) {
                return 'user not found';
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(password, userCheck.password);
                if (passwordCompare) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
        this.changePassword = async (id, newPassword) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            return this.userRepository.update({ idUser: id }, { password: newPassword });
        };
        this.register = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.checkUser = async (user) => {
            let userCheck = await this.userRepository.findOneBy({ username: user.username });
            if (!userCheck) {
                return 'user not found';
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(user.password, userCheck.password);
                if (!passwordCompare) {
                    return "wrong password";
                }
                else {
                    let payload = {
                        idUser: userCheck.idUser,
                        username: userCheck.username,
                        role: userCheck.role
                    };
                    return jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 3600 * 1000
                    });
                }
            }
        };
        this.orderProduct = async (quantity, detail, user) => {
            let cartCheck = await this.orderRepository.findOneBy({ status: "order", user: user, detail: detail });
            if (!cartCheck) {
                let cart = {
                    status: "ordering",
                    quantity: quantity,
                    detail: detail,
                    user: user,
                };
                return await this.orderRepository.save(cart);
            }
            else {
                cartCheck.quantity += quantity;
                return this.orderRepository.update({ idCart: cartCheck.id }, { quantity: cartCheck.quantity });
            }
        };
        this.findCartByUser = async (user) => {
            let sql = `SELECT * FROM order JOIN detail ON order.detail = detail.id WHERE user = ${user}`;
            let cart = await this.orderRepository.query(sql);
            if (!cart) {
                return null;
            }
            return cart;
        };
        this.changeStatusCart = async (user) => {
            let cart = await this.orderRepository.find({ user: user });
            if (!cart) {
                return null;
            }
            else {
                for (let i = 0; i < cart.length; i++) {
                    await this.orderRepository.update({ idCart: cart[i].idCart }, { status: 'ordered' });
                }
                return "success";
            }
        };
        this.removeCart = async (idCart) => {
            let product = await this.orderRepository.findOneBy({ idCart: idCart });
            if (!product) {
                return null;
            }
            return this.orderRepository.delete({ idCart: idCart });
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map