import { scheduleDetailQuery } from '../api/query';

export const scheduleRepository = {
  useRaidsGet: (date?: string) => {
    const { data } = scheduleDetailQuery.useRaidsGet(date);
    return {
      data
    };
  }
};
