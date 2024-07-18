import { SortOrder } from "../../util/SortOrder";

export type SkinOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  weaponId?: SortOrder;
  patternId?: SortOrder;
};
