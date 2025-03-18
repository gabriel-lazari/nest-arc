"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveEntity = void 0;
const typeorm_1 = require("typeorm");
let LiveEntity = class LiveEntity {
    id;
    created_at;
    updated_at;
    url;
    name;
    description;
    group;
    deleted_at;
};
exports.LiveEntity = LiveEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LiveEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], LiveEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], LiveEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'url', length: 300, nullable: false }),
    __metadata("design:type", String)
], LiveEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', length: 300, nullable: false }),
    __metadata("design:type", String)
], LiveEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', length: 300, nullable: false }),
    __metadata("design:type", String)
], LiveEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'group', length: 300, nullable: false }),
    __metadata("design:type", String)
], LiveEntity.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", String)
], LiveEntity.prototype, "deleted_at", void 0);
exports.LiveEntity = LiveEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'lives' })
], LiveEntity);
//# sourceMappingURL=live.entity.js.map