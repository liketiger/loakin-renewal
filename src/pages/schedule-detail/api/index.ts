import { createSupabaseRaid, deleteSupabaseRaid, getSupabaseRaids, updateSupabaseRaid } from '../../../services/raids';
import { RaidParams } from '../types/parameter';

const url = {
  getRaids: (date?: string) => getSupabaseRaids(date),
  createRaids: (data: RaidParams) => createSupabaseRaid(data),
  updateRaids: (data: RaidParams) => updateSupabaseRaid(data),
  deleteRaids: (idList: number[]) => deleteSupabaseRaid(idList)
};

export const scheduleDetailApi = {
  getRaids: url.getRaids,
  createRaids: url.createRaids,
  updateRaids: url.updateRaids,
  deleteRaids: url.deleteRaids
};
