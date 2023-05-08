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
                    const token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 360000
                    });
                    let userRes = {
                        idUser: userCheck.idUser,
                        username: userCheck.username,
                        role: userCheck.role,
                        token: token
                    };
                    return userRes;
                }
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map