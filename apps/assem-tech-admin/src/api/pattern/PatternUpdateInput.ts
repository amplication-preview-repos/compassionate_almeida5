import { InputJsonValue } from "../../types";
import { SkinUpdateManyWithoutPatternsInput } from "./SkinUpdateManyWithoutPatternsInput";

export type PatternUpdateInput = {
  name?: string | null;
  image?: InputJsonValue;
  skins?: SkinUpdateManyWithoutPatternsInput;
};
