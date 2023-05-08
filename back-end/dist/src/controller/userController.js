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
                let user = await this.userService.register(req.body);
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        };
        this.login = async (req, res) => {
            try {
                let response = await this.userService.login(req.params.idUser, req.body.password);
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