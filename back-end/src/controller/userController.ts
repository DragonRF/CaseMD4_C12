import {Request,Response} from "express";
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
        }catch (err) {
            res.status(500).json(err.message)
        }
    }
    showMyprofile = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.getMyProfile(req.params.idUser);
            res.status(200).json(response)
        }catch (err){
            res.status(500).json(err.message)
        }
    }
    checkNewPassword = async (req: Request, res: Response) => {
        try{
            let response = await this.userService.checkNewPassword(req.params.idUser,req.body.password);
            res.status(200).json(response)
        }catch (err){
            res.status(500).json(err.message)
        }
    }
    register = async (req:Request, res:Response) => {
        try {
            let user = await this.userService.register(req.body)
        }catch (err){
            res.status(500).json(err.message)
        }
    }
    login = async (req:Request, res:Response) => {
        try {
            let response = await this.userService.login(req.params.idUser,req.body.password);
            res.status(200).json(response)
        }catch (err){
            res.status(500).json(err.message)
        }
    }
}
export default new UserController()