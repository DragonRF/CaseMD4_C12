import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class district {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idLocal: number;

    @Column()
    nameDistrict: string;


}