export interface Account{
    amount: number;
    devise: 'USD'|'HTG';
    refillHistoric: reedeem[];
    transaction: transactions[];
}

export interface reedeem{
    code:string,
    amount:number, 
    date: Date 
}
export interface transactions{
    id: string;
    amount: number;
    date: Date;
    nature: 'Transfert'|'Received'
    paymethod?: string;
    sender?:string;
    beneficer?: string;
    senderId?: string;
    beneficerId?: string;
    taxes?: number;
    instructions?:string;

}