import { useContext } from 'react';
import { ScheduleDetailContext } from './context';

export { useProvider as useRaidScheduleProvider };
const useProvider = () => {
  const { raidList, onRaidCreate, onRaidDelete, onRaidDeleteAll } = useContext(
    ScheduleDetailContext
  );
  return {
    raidList,
    onRaidCreate,
    onRaidDeleteAll,
    onRaidDelete
  };
};
