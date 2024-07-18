import { Weapon } from "../weapon/Weapon";
import { Pattern } from "../pattern/Pattern";

export type Skin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  weapon?: Weapon | null;
  pattern?: Pattern | null;
};
