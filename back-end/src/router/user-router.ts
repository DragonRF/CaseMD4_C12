import {Router} from 'express';
import UserController from "../controller/userController";
import {userAuth} from "../middlerware/role";
import {auth} from "../middlerware/auth";

export const userRouter = Router();
userRouter.post('/register',UserController.register)
userRouter.post('/login', UserController.login);

userRouter.use(auth)
userRouter.get('/my-profile/:idUser',userAuth,UserController.showMyprofile)
userRouter.get('/check-new-password/:idUser',userAuth,UserController.checkNewPassword)
