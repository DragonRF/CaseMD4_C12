import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderTime: string;

    @Column()
    customerName: string;

    @Column()
    idUser: number;



}