import { getSupabaseRaids } from "../../../services/raids/getSupabaseRaids";

const url = {
  getRaids: (date?: string) => getSupabaseRaids(date),
};

export const scheduleDetailApi = {
  getRaids: url.getRaids
};
