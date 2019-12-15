import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { name: string, version: string, owner: string } {
    return {
      name: process.env.APP_NAME,
      version: process.env.APP_VERSION,
      owner: process.env.APP_OWNER
    };
  }
}
