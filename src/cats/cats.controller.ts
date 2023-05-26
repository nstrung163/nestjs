import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Redirect,
  Res,
  UseFilters,
  UsePipes,
} from "@nestjs/common";
import { Request, Response } from "express";
import { Observable, of } from "rxjs";
import { CatsService } from "./cats.service";
import { CreateCatDto, createCatSchema } from "./dto/create-cat.dto";
import { HttpExceptionFilter } from "src/http-exception/http-exception.filter";
import { ValidationPipe } from "src/validation/validation.pipe";
import { JoiValidationPipe } from "src/joi-validation/joi-validation.pipe";

@Controller("cats")
export class CatsController {
  constructor(private catesService: CatsService) {}
  @Get()
  async findAll(): Promise<any[]> {
    return this.catesService.findAll();
    // throw new BadRequestException("Something bad happened", {
    //   cause: new Error(),
    //   description: "Some error description",
    // });
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() createCateDto: CreateCatDto): Promise<any> {
    this.catesService.create(createCateDto);
  }

  @Get(":id")
  findOne(
    @Param("id", ValidationPipe)
    id: number
  ) {
    console.log(`This action return a ${id} ${typeof id} cat`);
    return id;
  }
}
