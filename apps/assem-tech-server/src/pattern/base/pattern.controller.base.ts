/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PatternService } from "../pattern.service";
import { PatternCreateInput } from "./PatternCreateInput";
import { Pattern } from "./Pattern";
import { PatternFindManyArgs } from "./PatternFindManyArgs";
import { PatternWhereUniqueInput } from "./PatternWhereUniqueInput";
import { PatternUpdateInput } from "./PatternUpdateInput";
import { SkinFindManyArgs } from "../../skin/base/SkinFindManyArgs";
import { Skin } from "../../skin/base/Skin";
import { SkinWhereUniqueInput } from "../../skin/base/SkinWhereUniqueInput";

export class PatternControllerBase {
  constructor(protected readonly service: PatternService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pattern })
  async createPattern(
    @common.Body() data: PatternCreateInput
  ): Promise<Pattern> {
    return await this.service.createPattern({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        image: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pattern] })
  @ApiNestedQuery(PatternFindManyArgs)
  async patterns(@common.Req() request: Request): Promise<Pattern[]> {
    const args = plainToClass(PatternFindManyArgs, request.query);
    return this.service.patterns({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        image: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pattern })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pattern(
    @common.Param() params: PatternWhereUniqueInput
  ): Promise<Pattern | null> {
    const result = await this.service.pattern({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        image: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pattern })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePattern(
    @common.Param() params: PatternWhereUniqueInput,
    @common.Body() data: PatternUpdateInput
  ): Promise<Pattern | null> {
    try {
      return await this.service.updatePattern({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          image: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Pattern })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePattern(
    @common.Param() params: PatternWhereUniqueInput
  ): Promise<Pattern | null> {
    try {
      return await this.service.deletePattern({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          image: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/skins")
  @ApiNestedQuery(SkinFindManyArgs)
  async findSkins(
    @common.Req() request: Request,
    @common.Param() params: PatternWhereUniqueInput
  ): Promise<Skin[]> {
    const query = plainToClass(SkinFindManyArgs, request.query);
    const results = await this.service.findSkins(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

        weapon: {
          select: {
            id: true,
          },
        },

        pattern: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/skins")
  async connectSkins(
    @common.Param() params: PatternWhereUniqueInput,
    @common.Body() body: SkinWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skins: {
        connect: body,
      },
    };
    await this.service.updatePattern({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/skins")
  async updateSkins(
    @common.Param() params: PatternWhereUniqueInput,
    @common.Body() body: SkinWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skins: {
        set: body,
      },
    };
    await this.service.updatePattern({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/skins")
  async disconnectSkins(
    @common.Param() params: PatternWhereUniqueInput,
    @common.Body() body: SkinWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skins: {
        disconnect: body,
      },
    };
    await this.service.updatePattern({
      where: params,
      data,
      select: { id: true },
    });
  }
}
