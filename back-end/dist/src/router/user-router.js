"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const role_1 = require("../middlerware/role");
const auth_1 = require("../middlerware/auth");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/register', userController_1.default.register);
exports.userRouter.get('/login', userController_1.default.login);
exports.userRouter.use(auth_1.auth);
exports.userRouter.get('/my-profile/:idUser', role_1.userAuth, userController_1.default.showMyprofile);
exports.userRouter.get('/check-new-password/:idUser', role_1.userAuth, userController_1.default.checkNewPassword);
//# sourceMappingURL=user-router.js.map