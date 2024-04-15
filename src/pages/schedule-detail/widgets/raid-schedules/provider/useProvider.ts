import { useContext } from 'react';
import { ScheduleDetailContext } from './context';

export { useProvider as useRaidScheduleProvider };
const useProvider = () => {
  const { onRaidCreate, onRaidDeleteAll, isRaidCreatePending, isRaidDeleteAllPending } = useContext(ScheduleDetailContext);
  return {
    onRaidCreate,
    onRaidDeleteAll,
    isRaidCreatePending,
    isRaidDeleteAllPending
  };
};
