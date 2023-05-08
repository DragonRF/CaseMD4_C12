import {Request, Response} from "express";
import UserService from "../service/userService";

class UserController {
    private userService;

    constructor() {
        this.userService = UserService;
    }

    getAllUser = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.getAll()
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    showMyprofile = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.getMyProfile(req.params.idUser);
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    checkNewPassword = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.checkNewPassword(req.params.idUser, req.body.password);
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    register = async (req: Request, res: Response) => {
        try {
            let user = req.body
            let userCheck = await this.userService.checkUserRegister(req.body)
            if (userCheck) {
                res.status(200).json('Đã có tài khoản')
            } else {
                let newUser = await this.userService.registerUser(user)
                console.log("new user:", newUser)
                res.status(200).json('Tạo thành công')
            }
        } catch (err) {
            console.log("err in registering:", err)
            res.status(500).json(err.message)
        }
    }
    login = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.checkUser(req.body);
            console.log(response)
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

export default new UserController()