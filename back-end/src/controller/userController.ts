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
            await this.userService.register(req.body)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    login = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.checkUser(req.body);
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    changePassword = async (req: Request, res: Response) => {
        try {
            let response = await this.userService.changePassword(req.params.idUser, req.body.password)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    oderProduct = async (req: Request, res: Response) => {
        try{

        }catch (e){

        }
    }
}
export default new UserController()