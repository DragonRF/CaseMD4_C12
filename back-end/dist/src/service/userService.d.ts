declare class userService {
    private userRepository;
    constructor();
    getAll: () => Promise<any>;
    getMyProfile: (idUser: any) => Promise<any>;
    checkNewPassword: (idUser: any, password: any) => Promise<boolean | "user not found">;
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"user not found" | "wrong password" | {
        idUser: any;
        username: any;
        role: any;
        token: string;
    }>;
}
declare const _default: userService;
export default _default;
