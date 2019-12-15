import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Module({})
export class EnvironmentModule {
    constructor() {
        dotenv.config();
    }
}
