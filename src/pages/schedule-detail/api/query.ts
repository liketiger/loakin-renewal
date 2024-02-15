import { useSuspenseQuery } from '@tanstack/react-query';
import { scheduleDetailApi } from '.';

export const scheduleDetailQuery = {
    useRaidGet: (date?: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['schedule', 'raids', date],
      queryFn: () => scheduleDetailApi.getRaid(date)
    });
    return {
      data
    };
  }
};
