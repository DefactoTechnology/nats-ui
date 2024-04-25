export class Subscription {
    client_id!:string;
    inbox!:string;
    ack_inbox!:string;
    queue_name!:string;
    is_durable!:boolean;
    is_offline!:boolean;
    max_inflight!:number;
    ack_wait!:number;
    last_sent!:number;
    pending_count!:number;
    is_stalled!:boolean
}   