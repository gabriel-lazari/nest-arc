import { UserRepository } from "./user.repository";
import { CreateDTO } from "./dto/create.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private userRepository;
    private userService;
    constructor(userRepository: UserRepository, userService: UserService);
    create(userData: CreateDTO): Promise<{
        message: string;
    }>;
}
