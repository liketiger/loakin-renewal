import { getSupabaseRaids } from '../../../services/raids';

const url = {
  getRaids: getSupabaseRaids
};

export const scheduleApi = {
  getRaids: url.getRaids
};
