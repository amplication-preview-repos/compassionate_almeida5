import { SkinUpdateManyWithoutWeaponsInput } from "./SkinUpdateManyWithoutWeaponsInput";

export type WeaponUpdateInput = {
  name?: string | null;
  typeField?: "Option1" | null;
  skins?: SkinUpdateManyWithoutWeaponsInput;
};
