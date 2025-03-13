import { IsEmail, IsNotEmpty, minLength, MinLength } from "class-validator";
import { IsExistThisEmail } from "../validation/emailValidator";

export class CreateDTO {
    @IsNotEmpty() @MinLength(3)
    name: string;

    @IsEmail() @IsExistThisEmail({ message: 'já existe um usuário com esse email' })
    email: string;

    @MinLength(6)
    password: string;
}