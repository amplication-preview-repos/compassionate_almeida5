import { WeaponWhereInput } from "./WeaponWhereInput";
import { WeaponOrderByInput } from "./WeaponOrderByInput";

export type WeaponFindManyArgs = {
  where?: WeaponWhereInput;
  orderBy?: Array<WeaponOrderByInput>;
  skip?: number;
  take?: number;
};
