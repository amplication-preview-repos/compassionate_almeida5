import { SkinWhereInput } from "./SkinWhereInput";
import { SkinOrderByInput } from "./SkinOrderByInput";

export type SkinFindManyArgs = {
  where?: SkinWhereInput;
  orderBy?: Array<SkinOrderByInput>;
  skip?: number;
  take?: number;
};
