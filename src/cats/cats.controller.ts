import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Res,
} from "@nestjs/common";
import { Request, Response } from "express";
import { Observable, of } from "rxjs";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller("cats")
export class CatsController {
  constructor(private catesService: CatsService) {}
  @Get()
  async findAll(): Promise<any[]> {
    return this.catesService.findAll();
  }

  @Post()
  async create(@Body() createCateDto: CreateCatDto): Promise<any> {
    this.catesService.create(createCateDto);
  }

  @Get(":id")
  findOne(@Param("id") id: any): string {
    return `This action return a ${id} cat`;
  }
}
