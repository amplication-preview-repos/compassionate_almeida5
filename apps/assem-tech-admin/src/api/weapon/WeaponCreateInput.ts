import { SkinCreateNestedManyWithoutWeaponsInput } from "./SkinCreateNestedManyWithoutWeaponsInput";

export type WeaponCreateInput = {
  name?: string | null;
  typeField?: "Option1" | null;
  skins?: SkinCreateNestedManyWithoutWeaponsInput;
};
