import { scheduleDetailMutation } from '../api/mutation';
import { scheduleDetailQuery } from '../api/query';
import { RaidParams } from '../types/parameter';

export const scheduleDetailRepository = {
  useRaidGet: (date?: string) => {
    const { data } = scheduleDetailQuery.useRaidGet(date);
    return {
      data
    };
  },
  useRaidCreate: (date: string) => {
    const { mutate } = scheduleDetailMutation.useRaidCreate(date);
    return {
      run: (data: RaidParams) => mutate(data)
    }
  },
  useRaidUpdate: (date: string) => {
    const { mutate } = scheduleDetailMutation.useRaidUpdate(date);
    return {
      run: (data: RaidParams) => mutate(data)
    }
  },
  useRaidDelete: (date: string) => {
    const { mutate } = scheduleDetailMutation.useRaidDelete(date);
    return {
      run: (idList: number[]) => mutate(idList)
    }
  }
};
