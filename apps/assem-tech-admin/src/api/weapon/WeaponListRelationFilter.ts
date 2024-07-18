import { WeaponWhereInput } from "./WeaponWhereInput";

export type WeaponListRelationFilter = {
  every?: WeaponWhereInput;
  some?: WeaponWhereInput;
  none?: WeaponWhereInput;
};
