import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { AdminController } from "./admin/admin.controller";
import { CatsService } from "./cats/cats.service";
import { CatsModule } from "./cats/cats.module";
import { LoggerMiddleware } from "./logger/logger.middleware";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./http-exception/http-exception.filter";

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController, AdminController],
  providers: [
    AppService,
    CatsService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({ path: "cats", method: RequestMethod.GET }, "cats/(.*)")
      .forRoutes(CatsController);
  }
}
