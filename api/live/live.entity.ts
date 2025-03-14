import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'lives' })
export class LiveEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @CreateDateColumn({ name: 'created_at' })
    created_at: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: string;

    @Column({ name: 'url', length: 300, nullable: false })
    url: string;

    @Column({ name: 'name', length: 300, nullable: false })
    name: string;

    @Column({ name: 'description', length: 300, nullable: false })
    description: string;

    @Column({ name: 'group', length: 300, nullable: false })
    group: string;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deleted_at: string;
}