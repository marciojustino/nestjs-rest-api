import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { EnvironmentModule } from './environment/environment.module';

const port = 3000;

async function bootstrap() {
    const env = await NestFactory.create(EnvironmentModule);
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle(process.env.APP_NAME)
        .setDescription(process.env.APP_DESCRIPTION)
        .setVersion(process.env.APP_VERSION)
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(port);
    console.info(`Server running at ${port}`);
}
bootstrap();
