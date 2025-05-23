import { Module } from "@nestjs/common";
import { FeatureController } from "./feature.controller";
import { FeatureService } from "./feature.service";

@Module({
    imports: [],
    controllers: [FeatureController],
    providers: [FeatureService]
})
export class FeatureModule { }
