import { Skin } from "../skin/Skin";

export type Weapon = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField?: "Option1" | null;
  skins?: Array<Skin>;
};
