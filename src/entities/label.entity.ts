import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Status } from './status.entity';

@Entity()
export class Label {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    colour: string;

    @ManyToOne(type => Status)
    @JoinColumn()
    status_: Status;
}