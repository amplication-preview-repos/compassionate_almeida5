import { Weapon as TWeapon } from "../api/weapon/Weapon";

export const WEAPON_TITLE_FIELD = "name";

export const WeaponTitle = (record: TWeapon): string => {
  return record.name?.toString() || String(record.id);
};
