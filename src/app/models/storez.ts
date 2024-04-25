export class Storez{
    cluster_id!:string;
    server_id!:string;
    now!:string;
    type!:string;
    limits:Limits=new Limits();
    total_msgs!:number
    total_bytes!:number
}

class Limits{
    max_channels!:number
    max_msgs!:number
    max_bytes!:number
    max_age!:number
    max_subscriptions!:number
    max_inactivity!:number
    channels: { [channelName: string]: StorezChannel }  = {};
}

export class StorezChannel{
    max_msgs!:number
    max_bytes!:number
    max_age!:number
    max_subscriptions!:number
    max_inactivity!:number
}

export class NamedStorezChannel{
    name!:string
    namedChannel!:StorezChannel
}
