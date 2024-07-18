/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WeaponWhereUniqueInput } from "./WeaponWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WeaponUpdateInput } from "./WeaponUpdateInput";

@ArgsType()
class UpdateWeaponArgs {
  @ApiProperty({
    required: true,
    type: () => WeaponWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WeaponWhereUniqueInput)
  @Field(() => WeaponWhereUniqueInput, { nullable: false })
  where!: WeaponWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WeaponUpdateInput,
  })
  @ValidateNested()
  @Type(() => WeaponUpdateInput)
  @Field(() => WeaponUpdateInput, { nullable: false })
  data!: WeaponUpdateInput;
}

export { UpdateWeaponArgs as UpdateWeaponArgs };
