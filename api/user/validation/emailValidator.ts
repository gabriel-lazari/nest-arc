import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class SingleEmailValidator implements ValidatorConstraintInterface {
    constructor(private UserRepository: UserRepository) {}

    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const isExistThisEmail = await this.UserRepository.isExistThisEmail(email);

        return isExistThisEmail;
    }
}

export const IsExistThisEmail = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: SingleEmailValidator
        })
    }
}