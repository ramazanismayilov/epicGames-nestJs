import { Module } from "@nestjs/common";
import { GlobalController } from "./global.controller";
import { GlobalService } from "./global.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [GlobalController],
    providers: [GlobalService]
})
export class GlobalModule { }