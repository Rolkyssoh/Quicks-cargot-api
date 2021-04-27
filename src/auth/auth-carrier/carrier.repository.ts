import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCarrierDto } from "../dto/create-user.dto";
import { User } from "../user.entity";

@EntityRepository(User)
export class CarrierRepository extends Repository<User> {

    async signUpCarrier(createCarrierDto: CreateCarrierDto){
        const { name, email, phoneNumber, city, 
                maticule, mark,type, capacity, picture  } = createCarrierDto;

        // const phoneExist = this.findOne({ user_phoneNumber: phoneNumber })
        // if(phoneExist){
        //     //on affiche un message
        // }

        const carrier = new User();
        carrier.user_name = name;
        carrier.user_email = email;
        carrier.user_phoneNumber = phoneNumber;
        carrier.user_city = city;
        carrier.vehicle_maticule = maticule;
        carrier.vehicle_mark = mark;
        carrier.vehicle_type = type;
        carrier.vehicle_capacity = capacity;

        try {
            await carrier.save();
        } catch(error){
            if(error.code === '23505'){
                const errorMessage = 'Numéro de téléphone déjà utilisé!';
                return errorMessage
            } else {
                throw new InternalServerErrorException();
            }
        }

        return carrier;
    }
}