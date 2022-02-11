import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Status } from './status.entity';

@Entity()
export class Section {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => Status)
    @JoinColumn()
    status_: Status;
}