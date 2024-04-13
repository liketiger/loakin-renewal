import { useContext } from 'react';
import { RaidSettingsContext } from './context';

export { useProvider as useRaidSettingsProvider };

const useProvider = () => {
  const { onSettingsCreate, onSettingsDeleteAll } =
    useContext(RaidSettingsContext);
  return { onSettingsCreate, onSettingsDeleteAll };
};
