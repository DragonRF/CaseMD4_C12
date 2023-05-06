import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class local {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameLocal: string;



}