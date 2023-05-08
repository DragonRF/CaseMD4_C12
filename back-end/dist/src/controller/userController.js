"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.getAllUser = async (req, res) => {
            try {
                let response = await this.userService.getAll();
                res.status(200).json(response);
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        };
        this.showMyprofile = async (req, res) => {
            try {
                let response = await this.userService.getMyProfile(req.params.idUser);
                res.status(200).json(response);
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        };
        this.checkNewPassword = async (req, res) => {
            try {
                let response = await this.userService.checkNewPassword(req.params.idUser, req.body.password);
                res.status(200).json(response);
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        };
        this.register = async (req, res) => {
            try {
                let user = req.body;
                let userCheck = await this.userService.checkUserRegister(req.body);
                if (userCheck) {
                    res.status(200).json('Đã có tài khoản');
                }
                else {
                    let newUser = await this.userService.registerUser(user);
                    console.log("new user:", newUser);
                    res.status(200).json('Tạo thành công');
                }
            }
            catch (err) {
                console.log("err in registering:", err);
                res.status(500).json(err.message);
            }
        };
        this.login = async (req, res) => {
            try {
                let response = await this.userService.checkUser(req.body);
                console.log(response);
                res.status(200).json(response);
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map