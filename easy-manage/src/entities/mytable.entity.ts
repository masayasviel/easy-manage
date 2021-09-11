import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MyTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        length: 20
    })
    name: string;

    @Column({
        name: 'message',
        length: 100
    })
    message: string;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;
    
    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date;
}
