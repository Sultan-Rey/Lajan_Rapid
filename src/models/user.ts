

export class User{
     public constructor(init ?: Partial<User>){Object.assign(this,init);}
id!:string;
type ?: string;
name: string;
civilite: string;
birthday: Date;
address: Address;
email: string;
password: string;
phone: string;
method:string;
connection ?: boolean;
status ?:boolean;
}
export interface Address{
     id: string;
     name: string;
     address1: string;
     address2: string;
     city: string;
     phone: string;
     state: string;
     zipcode: number;
     default: boolean;
 }
