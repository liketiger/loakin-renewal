import { scheduleDetailMutation } from '../api/mutation';
import { scheduleDetailQuery } from '../api/query';
import { PartyMembersParams, RaidParams } from '../types/parameter';

export const scheduleDetailRepository = {
  useRaidGet: (date?: string) => {
    const { data } = scheduleDetailQuery.useRaidGet(date);
    return {
      data
    };
  },
  useRaidDetailsGet: (id: number) => {
    const { data } = scheduleDetailQuery.useRaidDetailsGet(id);
    return {
      data
    };
  },
  useRaidCreate: (date: string) => {
    const { mutate } = scheduleDetailMutation.useRaidCreate(date);
    return {
      run: () => mutate()
    };
  },
  useRaidUpdate: (date: string) => {
    const { mutate } = scheduleDetailMutation.useRaidUpdate(date);
    return {
      run: (data: RaidParams) => mutate(data)
    };
  },
  useRaidDelete: (date: string) => {
    const { mutate } = scheduleDetailMutation.useRaidDelete(date);
    return {
      run: (id: number) => mutate(id)
    };
  },

  useAllRaidDelete: (date: string) => {
    const { mutate } = scheduleDetailMutation.useAllRaidDelete(date);
    return {
      run: () => mutate()
    };
  },

  usePartyMembersGet: (raidId: number) => {
    const { data } = scheduleDetailQuery.usePartyMembersGet(raidId);
    return {
      data
    };
  },

  usePartyMembersCreate: (raidId: number) => {
    const { mutate } = scheduleDetailMutation.usePartyMembersCreate(raidId);
    return {
      run: () => mutate()
    };
  },

  usePartyMembersUpdate: (raidId: number) => {
    const { mutate } = scheduleDetailMutation.usePartyMembersUpdate(raidId);
    return {
      run: (data: PartyMembersParams) => mutate(data)
    };
  },

  usePartyMembersDelete: (raidId: number) => {
    const { mutate } = scheduleDetailMutation.usePartyMembersDelete(raidId);
    return {
      run: (id: number) => mutate(id)
    };
  },

  usePartyMembersDeleteAll: (raidId: number) => {
    const { mutate } = scheduleDetailMutation.usePartyMembersDeleteAll(raidId);
    return {
      run: () => mutate()
    };
  }
};
