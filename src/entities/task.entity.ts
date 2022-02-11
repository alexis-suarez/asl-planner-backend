import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Label } from './label.entity';
import { Project } from './project.entity';
import { Section } from './section.entity';
import { Status } from './status.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    checked: boolean;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => Project)
    @JoinColumn()
    project_: Project;

    @ManyToOne(() => Section)
    @JoinColumn()
    section_: Section;

    @ManyToMany(() => Label)
    @JoinTable()
    labels: Label[];

    @ManyToOne(() => Status)
    @JoinColumn()
    status_: Status;
}