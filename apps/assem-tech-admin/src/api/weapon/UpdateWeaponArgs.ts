import { WeaponWhereUniqueInput } from "./WeaponWhereUniqueInput";
import { WeaponUpdateInput } from "./WeaponUpdateInput";

export type UpdateWeaponArgs = {
  where: WeaponWhereUniqueInput;
  data: WeaponUpdateInput;
};
