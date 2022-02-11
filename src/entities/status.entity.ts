import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ default: true })
    active: boolean;
}