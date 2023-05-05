import {User} from "../model/User";
import {AppDataSource} from "../data-source";


class userService {
    private userRepository;

    // private
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)

    }

    getAll = async () => {
        let sql = `select *
                   from user
                   where role = 'user'`
        let user = await this.userRepository.query(sql)
        return user
    }
    getMyProfile = async (idUser) => {
        let sql = `select * from user where idUser = ${idUser}`
        let users = await this.userRepository.query(sql)
        return users
    }
    checkNewPassword = async (idUser,password) => {
        let userCheck = await this.userRepository.findOneBy({idUser:idUser});
        if(!userCheck){
            return 'user not found'
        }else{
            let passwordCompare = await bcrypt.compare
        }
    }


}
