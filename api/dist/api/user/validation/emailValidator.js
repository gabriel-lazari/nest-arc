"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExistThisEmail = exports.SingleEmailValidator = void 0;
const class_validator_1 = require("class-validator");
const user_repository_1 = require("../user.repository");
const common_1 = require("@nestjs/common");
let SingleEmailValidator = class SingleEmailValidator {
    UserRepository;
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async validate(email, validationArguments) {
        const isExistThisEmail = await this.UserRepository.isExistThisEmail(email);
        return isExistThisEmail;
    }
};
exports.SingleEmailValidator = SingleEmailValidator;
exports.SingleEmailValidator = SingleEmailValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], SingleEmailValidator);
const IsExistThisEmail = (opcoesDeValidacao) => {
    return (objeto, propriedade) => {
        (0, class_validator_1.registerDecorator)({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: SingleEmailValidator
        });
    };
};
exports.IsExistThisEmail = IsExistThisEmail;
//# sourceMappingURL=emailValidator.js.map