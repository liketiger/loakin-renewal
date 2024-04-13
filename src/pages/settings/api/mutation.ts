import { useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsApi } from '.';
import { RaidSettingsParams } from '../types/parameter';

export const settingsMutation = {
  useSettingsCreate: () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => settingsApi.createSettings(),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings']
        });
      }
    });

    return {
      mutate
    };
  },

  useSettingsUpdate: () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: RaidSettingsParams) =>
        settingsApi.updateSettings(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings']
        });
      }
    });

    return {
      mutate
    };
  },

  useSettingsDelete: () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (id: number) => settingsApi.deleteSettings(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings']
        });
      }
    });

    return {
      mutate
    };
  },

  useSettingsDeleteAll: () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => settingsApi.deleteAllSettings(),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings']
        });
      }
    });

    return {
      mutate
    };
  }
};
