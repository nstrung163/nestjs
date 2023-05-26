import * as Joi from "joi";
export declare const createCatSchema: Joi.ObjectSchema<any>;
export declare class CreateCatDto {
    name: string;
    age: number;
    breed: string;
}
