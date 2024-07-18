import { JsonValue } from "type-fest";
import { Skin } from "../skin/Skin";

export type Pattern = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  image: JsonValue;
  skins?: Array<Skin>;
};
