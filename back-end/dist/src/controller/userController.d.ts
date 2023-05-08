import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
    getAllUser: (req: Request, res: Response) => Promise<void>;
    showMyprofile: (req: Request, res: Response) => Promise<void>;
    checkNewPassword: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
