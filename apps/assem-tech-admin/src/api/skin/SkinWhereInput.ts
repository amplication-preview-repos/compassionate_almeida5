import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WeaponWhereUniqueInput } from "../weapon/WeaponWhereUniqueInput";
import { PatternWhereUniqueInput } from "../pattern/PatternWhereUniqueInput";

export type SkinWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  weapon?: WeaponWhereUniqueInput;
  pattern?: PatternWhereUniqueInput;
};
