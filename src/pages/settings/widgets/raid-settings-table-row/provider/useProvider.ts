import { useContext } from 'react';
import { RaidSettingsRowContext } from './context';

export { useProvider as useRaidSettingsRowProvider };

const useProvider = () => {
  const {
    onSettingsCreate,
    onSettingsDelete,
    onSettingsUpdate,
    settingsList,
    isSettingsCreatePending,
    isSettingsDeletePending
  } = useContext(RaidSettingsRowContext);

  return {
    onSettingsCreate,
    onSettingsDelete,
    onSettingsUpdate,
    settingsList,
    isSettingsCreatePending,
    isSettingsDeletePending
  };
};
