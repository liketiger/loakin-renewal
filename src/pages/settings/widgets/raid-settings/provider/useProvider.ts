import { useContext } from 'react';
import { RaidSettingsContext } from './context';

export { useProvider as useRaidSettingsProvider };

const useProvider = () => {
  const { onSettingsCreate, onSettingsDeleteAll, isSettingsCreatePending, isSettingsDeleteAllPending } =
    useContext(RaidSettingsContext);
  return { onSettingsCreate, onSettingsDeleteAll, isSettingsCreatePending, isSettingsDeleteAllPending };
};
