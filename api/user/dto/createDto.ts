import { IsEmail, IsNotEmpty, minLength, MinLength } from "class-validator";

export class CreateDTO {
    @IsNotEmpty() @MinLength(3)
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}