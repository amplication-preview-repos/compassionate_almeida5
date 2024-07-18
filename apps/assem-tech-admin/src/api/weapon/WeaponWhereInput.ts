import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkinListRelationFilter } from "../skin/SkinListRelationFilter";

export type WeaponWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  skins?: SkinListRelationFilter;
};
