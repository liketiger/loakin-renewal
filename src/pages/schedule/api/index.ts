import { getSupabaseRaids } from '../../../services/raids/getSupabaseRaids';

const url = {
  getRaids: (date?: string) => getSupabaseRaids(date),
};

export const scheduleApi = {
  getRaids: url.getRaids
};
