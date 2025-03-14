import { Injectable } from "@nestjs/common";
import { LiveEntity } from "./live.entity";

@Injectable()
export class LiveRepository {
    private lives: LiveEntity[] = [];

    async create(live: LiveEntity) {
        this.lives.push(live);
    }
}