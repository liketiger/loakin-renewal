import { useSuspenseQuery } from '@tanstack/react-query';
import { scheduleApi } from '.';

export const scheduleQuery = {
    useRaidsGet: (date?: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['schedule', 'raids', date],
      queryFn: () => scheduleApi.getRaids(date)
    });
    return {
      data
    };
  }
};