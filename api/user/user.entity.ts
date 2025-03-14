import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @CreateDateColumn({ name: 'created_at' })
    created_at: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: string;

    @Column({ name: 'is_active', nullable: false, default: true })
    is_active: boolean;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'email', length: 70, nullable: false })
    email: string;

    @Column({ name: 'password', length: 255, nullable: false })
    password: string;

    @Column({ name: 'store_id', nullable: true })
    store_id: string;

    @Column({ name: 'symbolic_degree_id', nullable: true })
    symbolic_degree_id: string;

    @Column({ name: 'birthday', nullable: true })
    birthday: string;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deleted_at: string;
}