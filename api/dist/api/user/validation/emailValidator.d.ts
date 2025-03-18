import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
export declare class SingleEmailValidator implements ValidatorConstraintInterface {
    private UserRepository;
    constructor(UserRepository: UserRepository);
    validate(email: string, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const IsExistThisEmail: (opcoesDeValidacao: ValidationOptions) => (objeto: object, propriedade: string) => void;
