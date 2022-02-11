import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Status } from './status.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    colour: string;

    @Column()
    register: Date;

    @Column()
    start: Date;

    @Column()
    deadline: Date;

    @ManyToOne(type => Status)
    @JoinColumn()
    status_: Status;
}