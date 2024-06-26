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
  },

  useRaidDetailsGet: (id: number) => {
    const { data } = useSuspenseQuery({
      queryKey: ['schedule', 'raids', 'details', id],
      queryFn: () => scheduleDetailApi.getRaidDetails(id)
    });

    return {
      data
    };
  },

  usePartyMembersGet: (raidId: number) => {
    const { data } = useSuspenseQuery({
      queryKey: ['schedule', 'raids', 'members', raidId],
      queryFn: () => scheduleDetailApi.getPartyMembers(raidId)
    });

    return {
      data
    };
  }
};
