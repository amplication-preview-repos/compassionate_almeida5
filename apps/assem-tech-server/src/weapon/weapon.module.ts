import { Module } from "@nestjs/common";
import { WeaponModuleBase } from "./base/weapon.module.base";
import { WeaponService } from "./weapon.service";
import { WeaponController } from "./weapon.controller";
import { WeaponResolver } from "./weapon.resolver";

@Module({
  imports: [WeaponModuleBase],
  controllers: [WeaponController],
  providers: [WeaponService, WeaponResolver],
  exports: [WeaponService],
})
export class WeaponModule {}
