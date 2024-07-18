import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkinService } from "./skin.service";
import { SkinControllerBase } from "./base/skin.controller.base";

@swagger.ApiTags("skins")
@common.Controller("skins")
export class SkinController extends SkinControllerBase {
  constructor(protected readonly service: SkinService) {
    super(service);
  }
}
