import { Channel } from "./channel";

export class Channelz {
    cluster_id!:string;
    server_id!:string;
    now!:string;
    offset!:number;
    limit!:number;
    count!:number;
    total!:number;
    channels:Channel[]=[]
}   