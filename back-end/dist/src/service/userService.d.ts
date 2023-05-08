declare class UserService {
    private userRepository;
    private orderRepository;
    constructor();
    getAll: () => Promise<any>;
    getMyProfile: (idUser: any) => Promise<any>;
    checkNewPassword: (idUser: any, password: any) => Promise<boolean | "user not found">;
    private changePassword;
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<string>;
    private orderProduct;
    findCartByUser: (user: any) => Promise<any>;
    changeStatusCart: (user: any) => Promise<string>;
    private removeCart;
}
declare const _default: UserService;
export default _default;
