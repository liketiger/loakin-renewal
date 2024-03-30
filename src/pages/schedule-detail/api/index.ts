import {
  createSupabaseRaid,
  deleteAllSupabaseRaid,
  deleteSupabaseRaid,
  getSupabaseRaidDetails,
  getSupabaseRaids,
  updateSupabaseRaid
} from '../../../services/raids';
import { RaidParams } from '../types/parameter';

const url = {
  getRaid: (date?: string) => getSupabaseRaids(date),
  getRaidDetails: (id: number) => getSupabaseRaidDetails(id),
  createRaids: (date: string) => createSupabaseRaid(date),
  updateRaids: (data: RaidParams) => updateSupabaseRaid(data),
  deleteRaid: (id: number) => deleteSupabaseRaid(id),
  deleteAllRaids: (date: string) => deleteAllSupabaseRaid(date)
};

export const scheduleDetailApi = {
  getRaid: url.getRaid,
  getRaidDetails: url.getRaidDetails,
  createRaids: url.createRaids,
  updateRaids: url.updateRaids,
  deleteRaid: url.deleteRaid,
  deleteAllRaids: url.deleteAllRaids
};
