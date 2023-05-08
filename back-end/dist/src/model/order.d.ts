import { User } from './User';
import { detail } from "./Detail";
export declare class Order {
    id: number;
    status: string;
    quantity: number;
    product: detail;
    user: User;
}
