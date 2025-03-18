import { LiveRepository } from "./live.repository";
import { LiveDTO } from "./dto/create.dto";
import { LiveService } from './live.service';
export declare class LiveController {
    private liveRepository;
    private liveService;
    constructor(liveRepository: LiveRepository, liveService: LiveService);
    create(linkData: LiveDTO): Promise<{
        message: string;
    }>;
}
