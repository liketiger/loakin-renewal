import { getSupabaseRaids } from '../../../services/raids';

const url = {
  getRaids: (date?: string) => getSupabaseRaids(date)
};

export const scheduleApi = {
  getRaids: url.getRaids
};
