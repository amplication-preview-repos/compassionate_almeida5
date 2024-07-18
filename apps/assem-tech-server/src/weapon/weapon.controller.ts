import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeaponService } from "./weapon.service";
import { WeaponControllerBase } from "./base/weapon.controller.base";

@swagger.ApiTags("weapons")
@common.Controller("weapons")
export class WeaponController extends WeaponControllerBase {
  constructor(protected readonly service: WeaponService) {
    super(service);
  }
}
