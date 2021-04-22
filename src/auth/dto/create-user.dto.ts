import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    // @IsNotEmpty()
    // @IsString()
    // @MinLength(6)
    // @MaxLength(20)
    // password:string;

    @IsNotEmpty()
    @IsMobilePhone()
    phoneNumber:string;

    @IsOptional()
    user_city: string;

    // Carrier
    @IsOptional()
    vehicle_maticule: string;

    @IsOptional()
    vehicle_mark: string;

    @IsOptional()
    vehicle_capacity: string;

    @IsOptional()
    vehicle_type: string;

    @IsOptional()
    vehicle_picture: string;
}