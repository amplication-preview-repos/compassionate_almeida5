import { SortOrder } from "../../util/SortOrder";

export type PatternOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  image?: SortOrder;
};
