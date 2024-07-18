import { SortOrder } from "../../util/SortOrder";

export type WeaponOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
};
