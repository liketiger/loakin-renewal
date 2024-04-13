import React, { useMemo } from 'react';
import { RaidSettingsRowContext } from './context';
import {
    useRaidSettingsRowQueryLogic
} from './useQueryLogic';

export { Provider as RaidSettingsRowProvider };

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const { onSettingsCreate, onSettingsDelete, onSettingsUpdate, settingsList } =
    useRaidSettingsRowQueryLogic();
  const value = useMemo(
    () => ({
      onSettingsCreate,
      onSettingsDelete,
      settingsList,
      onSettingsUpdate
    }),
    [onSettingsCreate, onSettingsDelete, settingsList, onSettingsUpdate]
  );

  return (
    <RaidSettingsRowContext.Provider value={value}>
      {children}
    </RaidSettingsRowContext.Provider>
  );
};
