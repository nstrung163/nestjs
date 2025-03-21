"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cats_controller_1 = require("./cats/cats.controller");
const admin_controller_1 = require("./admin/admin.controller");
const cats_service_1 = require("./cats/cats.service");
const cats_module_1 = require("./cats/cats.module");
const logger_middleware_1 = require("./logger/logger.middleware");
const core_1 = require("@nestjs/core");
const validation_pipe_1 = require("./validation/validation.pipe");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes(cats_controller_1.CatsController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [cats_module_1.CatsModule],
        controllers: [app_controller_1.AppController, cats_controller_1.CatsController, admin_controller_1.AdminController],
        providers: [
            app_service_1.AppService,
            cats_service_1.CatsService,
            {
                provide: core_1.APP_PIPE,
                useClass: validation_pipe_1.ValidationPipe,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map