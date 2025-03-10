import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async create(user: UserEntity) {
        this.users.push(user);
    }

    async isExistThisEmail(email: string) {
        const isExist = this.users.find(user => user.email === email);

        return !isExist;
    }
}