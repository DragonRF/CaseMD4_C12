"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
=======
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
exports.detail = void 0;
const typeorm_1 = require("typeorm");
let detail = class detail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], detail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "information", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "commit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "workTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "timeStart", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detail.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], detail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], detail.prototype, "idCategory", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], detail.prototype, "idDistrict", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], detail.prototype, "freeTimeId", void 0);
detail = __decorate([
    (0, typeorm_1.Entity)()
], detail);
exports.detail = detail;
>>>>>>> c4a1abd6e1bf6c84920a8e055435d3ad8aa35560
//# sourceMappingURL=Detail.js.map