import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class freeTime {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    oneToTwo: string;

    @Column()
    twoToThree: string;

    @Column()
    threeToFour: string;

    @Column()
    fourToFive: string;

    @Column()
    fiveToSix: string;

    @Column()
    sixToSeven: string;

    @Column()
    sevenToEight: string;

    @Column()
    eightToNine: string;

    @Column()
    nineToTen: string;


}