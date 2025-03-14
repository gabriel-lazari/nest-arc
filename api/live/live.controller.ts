import { Body, Controller, Post } from "@nestjs/common";
import { LiveEntity } from "./live.entity";
import { LiveRepository } from "./live.repository";
import { LiveDTO } from "./dto/create.dto";
import { LiveService } from './live.service';

@Controller('/live')
export class LiveController {
    constructor(
        private liveRepository: LiveRepository,
        private liveService: LiveService
    ) {};
    
    @Post()
    async create(@Body() linkData: LiveDTO) {
        const liveEntity = new LiveEntity();

        liveEntity.url = linkData.url;

        const liveCreated = await this.liveService.create(liveEntity);

        return { message: 'live criado com sucesso' };
    }
}