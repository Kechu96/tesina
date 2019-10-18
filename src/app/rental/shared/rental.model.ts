import { University } from 'src/app/user/shared/university.model';
import { User } from 'src/app/user/shared/user.model';

export class Rental{
    lane: string;//
    number: number;
    suburb: string;//
    pc: number;
    closeTo: University;
    title: string;//
    description: string;//
    cost: number;
    likes: number;
    dislikes: number;
    date: Date;
    features: string[];
    photos: string[];
    owner: User;
    constructor(){
        this.lane, this.suburb, this.title, this.description = '';
        this.number = 0;
        this.pc = 0 ;
        this.cost = 0;
        this.likes = 0;
        this.dislikes = 0;
        this.date = new Date();
        this.features = null;
        this.photos = null;
        this.owner = null;
        this.closeTo = null;
    }
}