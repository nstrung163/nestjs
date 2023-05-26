"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCatDto = exports.createCatSchema = void 0;
const Joi = require("joi");
exports.createCatSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    breed: Joi.string().required(),
});
class CreateCatDto {
}
exports.CreateCatDto = CreateCatDto;
//# sourceMappingURL=create-cat.dto.js.map