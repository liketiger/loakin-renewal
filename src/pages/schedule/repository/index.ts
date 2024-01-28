import { scheduleQuery } from '../api/query';

export const scheduleRepository = {
  useRaidsGet: () => {
    const { data } = scheduleQuery.useRaidsGet();
    return {
      data
    };
  }
};
