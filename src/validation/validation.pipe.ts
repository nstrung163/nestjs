import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
	private toValidate(metatype: Function): boolean {
		const types: Function[] = [String, Number, Boolean, Array, Object]
		return !types.includes(metatype)
	}

	async transform(value: any, { metatype }: ArgumentMetadata) {
		if (!metatype || !this.toValidate(metatype)) return value
		console.log('metatype', metatype)
		console.log('value', value)
		const object = plainToInstance(metatype, value)
		console.log('object', object)
		const errors = await validate(object)
		console.log('errors', errors)
		if (errors.length > 0) {
			throw new BadRequestException('Validation failed')
		}
		return value
	}
}
