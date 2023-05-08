declare class UserService {
    private userRepository;
    constructor();
    getAll: () => Promise<any>;
    getMyProfile: (idUser: any) => Promise<any>;
    checkNewPassword: (idUser: any, password: any) => Promise<boolean | "user not found">;
    registerUser: (user: any) => Promise<any>;
    checkUserRegister: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
