import { Repository } from "typeorm";
import { LiveEntity } from "./live.entity";
export declare class LiveService {
    private readonly liveRepository;
    constructor(liveRepository: Repository<LiveEntity>);
    create(userData: LiveEntity): Promise<LiveEntity>;
}
