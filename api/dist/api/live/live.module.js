"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const live_entity_1 = require("./live.entity");
const live_service_1 = require("./live.service");
const live_controller_1 = require("./live.controller");
const live_repository_1 = require("./live.repository");
let LiveModule = class LiveModule {
};
exports.LiveModule = LiveModule;
exports.LiveModule = LiveModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([live_entity_1.LiveEntity])],
        controllers: [live_controller_1.LiveController],
        providers: [live_service_1.LiveService, live_repository_1.LiveRepository]
    })
], LiveModule);
;
//# sourceMappingURL=live.module.js.map