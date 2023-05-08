import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import {detail} from "./Detail";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    quantity: number;

    @ManyToOne(() => detail)
    product: detail;

    @ManyToOne(() => User)
    user: User;
}
