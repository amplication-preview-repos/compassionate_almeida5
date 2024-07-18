import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeaponServiceBase } from "./base/weapon.service.base";

@Injectable()
export class WeaponService extends WeaponServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
