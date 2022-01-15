import {
    Entity, 
    Column, 
    CreateDateColumn, 
    PrimaryColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm'

import {v4 as uniqID} from 'uuid';
import { Category } from './Category';

@Entity('videos')
export class Videos {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @Column()
    category_id: string;



    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id){
            this.id = uniqID()
        }
    }

}