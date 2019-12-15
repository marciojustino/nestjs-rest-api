import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from '../entity/person';

@Controller('person')
export class PersonController {

    constructor(private readonly personSrv: PersonService) {}

    @Get()
    getAll(): Person[] {
        return this.personSrv.getAll();
    }
}
