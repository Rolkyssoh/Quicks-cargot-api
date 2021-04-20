import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    user_name: string;

    @Column()
    user_email: string;

    @Column()
    user_phoneNumber: string;

    @Column()
    user_password: string;

    @Column()
    user_city: string;

    // Carrier
    @Column()
    vehicle_maticule: string;

    @Column()
    vehicle_mark: string;

    @Column()
    vehicle_capacity: string;

    @Column()
    vehicle_type: string;

    @Column()
    vehicle_picture: string;

}