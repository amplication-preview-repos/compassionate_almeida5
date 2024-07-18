import { Skin as TSkin } from "../api/skin/Skin";

export const SKIN_TITLE_FIELD = "name";

export const SkinTitle = (record: TSkin): string => {
  return record.name?.toString() || String(record.id);
};
