import { InputJsonValue } from "../../types";
import { SkinCreateNestedManyWithoutPatternsInput } from "./SkinCreateNestedManyWithoutPatternsInput";

export type PatternCreateInput = {
  name?: string | null;
  image?: InputJsonValue;
  skins?: SkinCreateNestedManyWithoutPatternsInput;
};
