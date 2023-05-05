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
exports.freeTime = void 0;
const typeorm_1 = require("typeorm");
let freeTime = class freeTime {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], freeTime.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "oneToTwo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "twoToThree", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "threeToFour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "fourToFive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "fiveToSix", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "sixToSeven", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "sevenToEight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "eightToNine", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], freeTime.prototype, "nineToTen", void 0);
freeTime = __decorate([
    (0, typeorm_1.Entity)()
], freeTime);
exports.freeTime = freeTime;
//# sourceMappingURL=freetime.js.map