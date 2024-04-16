import { useMutation, useQueryClient } from '@tanstack/react-query';
import { scheduleDetailApi } from '.';
import { PartyMembersParams, RaidParams } from '../types/parameter';

export const scheduleDetailMutation = {
  useRaidCreate: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: () => scheduleDetailApi.createRaids(date),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids']
        });
      },
    });
    return {
      mutate,
      isPending
    };
  },
  useRaidUpdate: () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: RaidParams) => scheduleDetailApi.updateRaids(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids']
        });
      },
    });
    return {
      mutate
    };
  },
  useRaidDelete: () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: (id: number) => scheduleDetailApi.deleteRaid(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids']
        });
      }
    });
    return {
      mutate,
      isPending
    };
  },

  useAllRaidDelete: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: () => scheduleDetailApi.deleteAllRaids(date),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids']
        });
      },
    });
    return {
      mutate,
      isPending
    };
  },

  usePartyMembersCreate: (raidId: number) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: () => scheduleDetailApi.createPartyMembers(raidId),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', 'members', raidId]
        });
      },

    });
    return {
      mutate,
      isPending
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
    const { mutate, isPending } = useMutation({
      mutationFn: (id: number) => scheduleDetailApi.deletePartyMembers(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', 'members', raidId]
        });
      },
    });
    return {
      mutate,
      isPending
    };
  },

  usePartyMembersDeleteAll: (raidId: number) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: () => scheduleDetailApi.deleteAllPartyMembers(raidId),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', 'members', raidId]
        });
      },
    });
    return {
      mutate,
      isPending
    };
  }
};
