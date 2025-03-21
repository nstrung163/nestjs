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
	UseGuards,
	UseInterceptors,
	UsePipes,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { Observable, of } from 'rxjs'
import { CatsService } from './cats.service'
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto'
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter'
import { ValidationPipe } from 'src/validation/validation.pipe'
import { JoiValidationPipe } from 'src/joi-validation/joi-validation.pipe'
import { RolesGuard } from 'src/roles/roles.guard'
import { LoggingInterceptor } from 'src/logging/logging.interceptor'
import { TransformInterceptor } from 'src/transform/transform.interceptor'

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
@UseGuards(RolesGuard)
export class CatsController {
	constructor(private catesService: CatsService) {}
	@Get()
	@UseInterceptors(TransformInterceptor)
	async findAll(): Promise<any[]> {
		return this.catesService.findAll()
		// throw new BadRequestException("Something bad happened", {
		//   cause: new Error(),
		//   description: "Some error description",
		// });
	}

	// @Post()
	// @UsePipes(new JoiValidationPipe(createCatSchema))
	// async create(@Body() createCateDto: CreateCatDto): Promise<any> {
	//   this.catesService.create(createCateDto);
	// }

	// @Post()
	// async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto): Promise<any> {
	// 	this.catesService.create(createCatDto)
	// }

	@Post()
	async create(@Body() createCatDto: CreateCatDto): Promise<any> {
		this.catesService.create(createCatDto)
	}

	@Get(':id')
	findOne(
		@Param('id', ValidationPipe)
		id: number
	) {
		console.log(`This action return a ${id} ${typeof id} cat`)
		return id
	}
}
