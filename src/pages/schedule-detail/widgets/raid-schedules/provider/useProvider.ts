import { useContext } from 'react';
import { ScheduleDetailContext } from './context';

export { useProvider as useRaidScheduleProvider };
const useProvider = () => {
  const { onRaidCreate, onRaidDeleteAll } = useContext(ScheduleDetailContext);
  return {
    onRaidCreate,
    onRaidDeleteAll
  };
};
