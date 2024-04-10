import { createSupabasePartyMembers, deleteAllSupabasePartyMembers, deleteSupabasePartyMembers, getSupabasePartyMembers, updateSupabasePartyMembers } from '../../../services/party-members';
import {
  createSupabaseRaid,
  deleteAllSupabaseRaid,
  deleteSupabaseRaid,
  getSupabaseRaidDetails,
  getSupabaseRaids,
  updateSupabaseRaid
} from '../../../services/raids';
import { PartyMembersParams, RaidParams } from '../types/parameter';

const url = {
  getRaid: (date?: string) => getSupabaseRaids(date),
  getRaidDetails: (id: number) => getSupabaseRaidDetails(id),
  createRaids: (date: string) => createSupabaseRaid(date),
  updateRaids: (data: RaidParams) => updateSupabaseRaid(data),
  deleteRaid: (id: number) => deleteSupabaseRaid(id),
  deleteAllRaids: (date: string) => deleteAllSupabaseRaid(date),

  getPartyMembers: (raidId: number) => getSupabasePartyMembers(raidId),
  createPartyMembers: (raidId: number) => createSupabasePartyMembers(raidId),
  updatePartyMembers: (data: PartyMembersParams) => updateSupabasePartyMembers(data),
  deletePartyMembers: (memberId: number) => deleteSupabasePartyMembers(memberId),
  deleteAllSupabasePartyMembers: (raidId: number) => deleteAllSupabasePartyMembers(raidId)
};

export const scheduleDetailApi = {
  getRaid: url.getRaid,
  getRaidDetails: url.getRaidDetails,
  createRaids: url.createRaids,
  updateRaids: url.updateRaids,
  deleteRaid: url.deleteRaid,
  deleteAllRaids: url.deleteAllRaids,

  getPartyMembers: url.getPartyMembers,
  createPartyMembers: url.createPartyMembers,
  updatePartyMembers: url.updatePartyMembers,
  deletePartyMembers: url.deletePartyMembers,
  deleteAllPartyMembers: url.deleteAllSupabasePartyMembers
};
