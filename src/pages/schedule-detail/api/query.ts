import { useSuspenseQuery } from '@tanstack/react-query';
import { scheduleDetailApi } from '.';

export const scheduleDetailQuery = {
    useRaidsGet: (date?: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['schedule', 'raids', date],
      queryFn: () => scheduleDetailApi.getRaids(date)
    });
    return {
      data
    };
  }
};
