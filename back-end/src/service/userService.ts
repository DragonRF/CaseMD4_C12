import {User} from "../model/User";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../middlerware/auth";


class UserService {
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
            let passwordCompare = await bcrypt.compare(password,userCheck.password)
            if(passwordCompare){
                return true
            }else{
                return false
            }
        }
    }
    register = async (user)=>{
        user.password = await bcrypt.hash(user.password,10)
        return this.userRepository.save(user)
    }
    checkUser = async (user)=>{
        let userCheck = await this.userRepository.findOneBy({username:user.username})
        if(!userCheck){
            return 'user not found'
        }else{
            let passwordCompare = await bcrypt.compare(user.password,userCheck.password)
            if(!passwordCompare){
                return "wrong password"
            }else{
               let payload = {
                   idUser: userCheck.idUser,
                   username: userCheck.username,
                   role: userCheck.role
               }

               const token = jwt.sign(payload,SECRET,{
                   expiresIn : 360000
               })
                let userRes ={
                   idUser: userCheck.idUser,
                    username: userCheck.username,
                    role: userCheck.role,
                    token: token
                }
                return userRes
            }
        }
    }
}
export default  new UserService();