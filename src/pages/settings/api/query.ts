import { useSuspenseQuery } from '@tanstack/react-query';
import { settingsApi } from '.';

export const settingsQuery = {
  useSettingsGet: (keyword: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['settings', keyword],
      queryFn: () => settingsApi.getSettings(keyword)
    });

    return {
      data
    };
  },

  useManagableVariable: (params: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['managableVariable', params],
      queryFn: () => settingsApi.getManagableVariable(params)
    });

    return {
      data
    };
  }
};
