import { useSuspenseQuery } from '@tanstack/react-query';
import { scheduleApi } from '.';

export const scheduleQuery = {
    useRaidsGet: () => {
    const { data } = useSuspenseQuery({
      queryKey: ['schedule', 'raids'],
      queryFn: () => scheduleApi.getRaids()
    });
    return {
      data
    };
  }
};
