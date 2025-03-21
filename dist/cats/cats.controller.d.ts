import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsController {
    private catesService;
    constructor(catesService: CatsService);
    findAll(): Promise<any[]>;
    create(createCatDto: CreateCatDto): Promise<any>;
    findOne(id: number): number;
}
