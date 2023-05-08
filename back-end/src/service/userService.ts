import {User} from "../model/User";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../middlerware/auth";
import {detail} from "../model/Detail";
import {Order} from "../model/order";


class UserService {
    private userRepository;

    private orderRepository;
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
    private changePassword = async (id,newPassword) => {
        let user = await this.userRepository.findOneBy({idUser:id})
        if (!user){
            return null
        }
        return this.userRepository.update({idUser:id},{password:newPassword})
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

                return jwt.sign(payload,SECRET,{
                    expiresIn : 3600*1000
                })
                //     let userRes ={
                //        idUser: userCheck.idUser,
                //         username: userCheck.username,
                //         role: userCheck.role,
                //         token: token
                //     }
                //     return userRes
            }
        }
    }
    private orderProduct = async (quantity,detail,user) =>{
        let cartCheck = await this.orderRepository.findOneBy({status:"order",user:user,detail:detail})
        if(!cartCheck){
            let cart ={
                status:"ordering",
                quantity:quantity,
                detail:detail,
                user:user,
            }
            return await this.orderRepository.save(cart)
        }else {
            cartCheck.quantity += quantity
            return this.orderRepository.update({idCart:cartCheck.id},{quantity:cartCheck.quantity})
        }
    }
    findCartByUser = async (user)=>{
        let sql = `SELECT * FROM order JOIN detail ON order.detail = detail.id WHERE user = ${user}`
        let cart = await this.orderRepository.query(sql)
        if(!cart){
            return null
        }
        return cart
    }
    // getAllCart = async ()=>{
    //     let cart = await this.orderRepository.find().populate()
    // }
    changeStatusCart = async (user)=>{
        let cart = await this.orderRepository.find({user:user})
        if (!cart){
            return null
        }else {
            for(let i=0; i<cart.length;i++){
                await this.orderRepository.update({idCart:cart[i].idCart},{status:'ordered'})
            }
            return "success"
        }
    }
    private removeCart = async (idCart)=>{
        let product = await this.orderRepository.findOneBy({idCart:idCart})
        if(!product){
            return null
        }
        return this.orderRepository.delete({idCart:idCart})
    }
    // totalMoney = async (user) => {
    //     let cart = await Cart.find({ user: user }).populate('product');
    //     let sum = 0;
    //     if (cart) {
    //         for (let i = 0; i < cart.length; i++) {
    //             let product = await Product.findById(cart[i].product);
    //             sum += cart[i].quantity * product.price;
    //         }
    //     }
    // }


}
export default  new UserService();