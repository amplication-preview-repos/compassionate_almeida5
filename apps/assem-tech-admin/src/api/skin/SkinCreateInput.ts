import { WeaponWhereUniqueInput } from "../weapon/WeaponWhereUniqueInput";
import { PatternWhereUniqueInput } from "../pattern/PatternWhereUniqueInput";

export type SkinCreateInput = {
  name?: string | null;
  description?: string | null;
  weapon?: WeaponWhereUniqueInput | null;
  pattern?: PatternWhereUniqueInput | null;
};
