import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { LiveDTO } from "./dto/create.dto";
import { LiveEntity } from "./live.entity";

@Injectable()
export class LiveService {
    constructor(
        @InjectRepository(LiveEntity)
        private readonly liveRepository: Repository<LiveEntity>
    ) {}

    async create(userData: LiveEntity) {
        const created = await this.liveRepository.save(userData);
        
        return created;
    }
}