import { useMutation, useQueryClient } from '@tanstack/react-query';
import { scheduleDetailApi } from '.';
import { PartyMembersParams, RaidParams } from '../types/parameter';

export const scheduleDetailMutation = {
  useRaidCreate: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => scheduleDetailApi.createRaids(date),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      },
    });
    return {
      mutate
    };
  },
  useRaidUpdate: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: RaidParams) => scheduleDetailApi.updateRaids(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      },
    });
    return {
      mutate
    };
  },
  useRaidDelete: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (id: number) => scheduleDetailApi.deleteRaid(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      }
    });
    return {
      mutate
    };
  },

  useAllRaidDelete: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => scheduleDetailApi.deleteAllRaids(date),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      },
    });
    return {
      mutate
    };
  },

  usePartyMembersCreate: (raidId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => scheduleDetailApi.createPartyMembers(raidId),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', 'members', raidId]
        });
      },

    });
    return {
      mutate
    };
  },

  usePartyMembersUpdate: (raidId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: PartyMembersParams) => scheduleDetailApi.updatePartyMembers(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', 'members', raidId]
        });
      },
    });
    return {
      mutate
    };
  },

  usePartyMembersDelete: (raidId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (id: number) => scheduleDetailApi.deletePartyMembers(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', 'members', raidId]
        });
      },
    });
    return {
      mutate
    };
  },

  usePartyMembersDeleteAll: (raidId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => scheduleDetailApi.deleteAllPartyMembers(raidId),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', 'members', raidId]
        });
      },
    });
    return {
      mutate
    };
  }
};
