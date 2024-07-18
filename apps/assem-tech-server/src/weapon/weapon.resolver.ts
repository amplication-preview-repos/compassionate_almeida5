import * as graphql from "@nestjs/graphql";
import { WeaponResolverBase } from "./base/weapon.resolver.base";
import { Weapon } from "./base/Weapon";
import { WeaponService } from "./weapon.service";

@graphql.Resolver(() => Weapon)
export class WeaponResolver extends WeaponResolverBase {
  constructor(protected readonly service: WeaponService) {
    super(service);
  }
}
