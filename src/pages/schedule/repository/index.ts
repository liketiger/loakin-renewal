import { scheduleQuery } from '../api/query';

export const scheduleRepository = {
  useRaidsGet: (date?: string) => {
    const { data } = scheduleQuery.useRaidsGet(date);
    return {
      data
    };
  }
};
