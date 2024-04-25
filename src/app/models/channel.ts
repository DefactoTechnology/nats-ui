import { Subscription } from "./subscription";

export class Channel {
    name!:string;
    msgs!:number;
    bytes!:number;
    first_seq!:number;
    last_seq!:number;
    subs_count!:number;
    subscriptions:Subscription[]=[]
    desc:string="";
}   