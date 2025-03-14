import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LiveEntity } from './live.entity';
import { LiveService } from "./live.service";
import { LiveController } from "./live.controller";
import { LiveRepository } from "./live.repository";

@Module({
    imports: [TypeOrmModule.forFeature([LiveEntity])],
    controllers:[LiveController],
    providers: [LiveService, LiveRepository]
})

export class UserModule {};