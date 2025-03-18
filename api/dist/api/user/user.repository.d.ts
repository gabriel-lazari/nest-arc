import { UserEntity } from "./user.entity";
export declare class UserRepository {
    private users;
    create(user: UserEntity): Promise<void>;
    isExistThisEmail(email: string): Promise<boolean>;
}
