import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkinServiceBase } from "./base/skin.service.base";

@Injectable()
export class SkinService extends SkinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
