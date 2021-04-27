import { EntityRepository, Repository } from "typeorm";
import { IdentifyUserDto } from "../dto/create-user.dto";
import { User } from "../user.entity";

@EntityRepository(User)
export class AuthUsersRepository extends Repository<User>{

    // async loginUsers(identifyUserDto: IdentifyUserDto){
    //     const { phoneNumber } = identifyUserDto;

    //     const exist = this.findOne({ user_phoneNumber: phoneNumber });
    //     if(exist){
    //         //on envoie juste le code de connexion à ce num
    //     } else {
    //         //On sauvegarde le num et on envoie le code de login
    //     }
    // }
}