import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../user.entity";

@EntityRepository(User)
export class CarrierRepository extends Repository<User> {

    async signUpCarrier(createUserDto: CreateUserDto){
        const { name, email, phoneNumber } = createUserDto;

        const carrier = new User();
        carrier.user_name = name;
        carrier.user_email = email;
        carrier.user_phoneNumber = phoneNumber;
        await carrier.save();

        return carrier;
    }
}