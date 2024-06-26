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

  useManagableVariable: () => {
    const { data } = useSuspenseQuery({
      queryKey: ['managableVariable'],
      queryFn: () => settingsApi.getManagableVariable()
    });

    return {
      data
    };
  }
};
