
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class detail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    information: string;

    @Column()
    service: string;

    @Column()
    commit: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    workTime: string;

    @Column()
    timeStart: string;

    @Column()
    address: string;

    @Column()
    price: number;

    @Column()
    idCategory: number;

    @Column()
    idDistrict: number;

    @Column()
    freeTimeId: number;

}

