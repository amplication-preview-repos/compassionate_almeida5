import * as graphql from "@nestjs/graphql";
import { SkinResolverBase } from "./base/skin.resolver.base";
import { Skin } from "./base/Skin";
import { SkinService } from "./skin.service";

@graphql.Resolver(() => Skin)
export class SkinResolver extends SkinResolverBase {
  constructor(protected readonly service: SkinService) {
    super(service);
  }
}
