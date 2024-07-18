/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Pattern as PrismaPattern,
  Skin as PrismaSkin,
} from "@prisma/client";

export class PatternServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PatternCountArgs, "select">): Promise<number> {
    return this.prisma.pattern.count(args);
  }

  async patterns(args: Prisma.PatternFindManyArgs): Promise<PrismaPattern[]> {
    return this.prisma.pattern.findMany(args);
  }
  async pattern(
    args: Prisma.PatternFindUniqueArgs
  ): Promise<PrismaPattern | null> {
    return this.prisma.pattern.findUnique(args);
  }
  async createPattern(args: Prisma.PatternCreateArgs): Promise<PrismaPattern> {
    return this.prisma.pattern.create(args);
  }
  async updatePattern(args: Prisma.PatternUpdateArgs): Promise<PrismaPattern> {
    return this.prisma.pattern.update(args);
  }
  async deletePattern(args: Prisma.PatternDeleteArgs): Promise<PrismaPattern> {
    return this.prisma.pattern.delete(args);
  }

  async findSkins(
    parentId: string,
    args: Prisma.SkinFindManyArgs
  ): Promise<PrismaSkin[]> {
    return this.prisma.pattern
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .skins(args);
  }
}
