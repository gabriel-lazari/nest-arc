import { Body, Controller, Post } from "@nestjs/common";
import { UserEntity} from "./user.entity";
import { UserRepository } from "./user.repository";
import { CreateDTO } from "./dto/createDto";
import { v4 as uuid } from "uuid";

@Controller('/user')
export class UserController {
    constructor(private userRepository: UserRepository) {};
    
    @Post()
    async create(@Body() userData: CreateDTO) {
        const userEntity = new UserEntity();

        userEntity.uuid = uuid();
        userEntity.email = userData.email;
        userEntity.password = userData.password;

        await this.userRepository.create(userEntity);

        return { uuid: userEntity.uuid, message: 'usuario criado com sucesso' };
    }
}