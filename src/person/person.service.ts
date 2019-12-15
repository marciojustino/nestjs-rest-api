import { Injectable } from '@nestjs/common';
import { Person } from '../entity/person';
import * as moment from 'moment';

@Injectable()
export class PersonService {

    getAll(): Person[] {
        return [
            <Person>{
                birth: moment(1981, 'YYYY').format('YYYY-MM-DD'),
                document: '111.111.111-11',
                name: 'Fulano de Tal'
            }
        ]
    }
}
