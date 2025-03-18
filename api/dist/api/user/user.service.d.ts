import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(userData: UserEntity): Promise<UserEntity>;
}
