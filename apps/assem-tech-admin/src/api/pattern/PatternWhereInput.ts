import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SkinListRelationFilter } from "../skin/SkinListRelationFilter";

export type PatternWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  image?: JsonFilter;
  skins?: SkinListRelationFilter;
};
