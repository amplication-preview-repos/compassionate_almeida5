import { Module } from "@nestjs/common";
import { SkinModuleBase } from "./base/skin.module.base";
import { SkinService } from "./skin.service";
import { SkinController } from "./skin.controller";
import { SkinResolver } from "./skin.resolver";

@Module({
  imports: [SkinModuleBase],
  controllers: [SkinController],
  providers: [SkinService, SkinResolver],
  exports: [SkinService],
})
export class SkinModule {}
