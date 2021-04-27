import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCarrierDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsMobilePhone()
    phoneNumber:string;

    @IsNotEmpty()
    city: string;

    // Carrier
    @IsOptional()
    maticule: string;

    @IsOptional()
    mark: string;

    @IsOptional()
    capacity: string;

    @IsOptional()
    type: string;

    @IsOptional()
    picture: string;
};

export class CreateAdminDto {};

export class IdentifyUserDto {
    @IsNotEmpty()
    @IsMobilePhone()
    phoneNumber:string;
};