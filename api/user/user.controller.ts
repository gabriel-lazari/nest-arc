import { Body, Controller, Post } from "@nestjs/common";
import { UserEntity} from "./user.entity";
import { UserRepository } from "./user.repository";
import { CreateDTO } from "./dto/create.dto";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {
    constructor(
        private userRepository: UserRepository,
        private userService: UserService
    ) {};
    
    @Post()
    async create(@Body() userData: CreateDTO) {
        const userEntity = new UserEntity();

        userEntity.name = userData.name;
        userEntity.email = userData.email;
        userEntity.password = userData.password;

        // await this.userRepository.create(userEntity);
        const userCreated = await this.userService.create(userEntity);
        // console.log(userCreated);

        return { message: 'usuario criado com sucesso' };
    }
}