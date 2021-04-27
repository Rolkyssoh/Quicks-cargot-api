import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['user_phoneNumber'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    user_name: string;

    @Column()
    user_email: string;

    @Column()
    user_phoneNumber: string;

    // @Column() 
    // user_password: string;

    @Column({nullable: true})
    user_city: string;

    // Carrier
    @Column({nullable: true})
    vehicle_maticule: string;

    @Column({nullable: true})
    vehicle_mark: string;

    @Column({nullable: true})
    vehicle_capacity: string;

    @Column({nullable: true})
    vehicle_type: string;

    @Column({nullable: true})
    vehicle_picture: string;

}