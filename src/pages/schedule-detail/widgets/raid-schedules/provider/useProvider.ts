import { useContext } from 'react';
import { ScheduleDetailContext } from './context';

export { useProvider as useScheduleProvider };
const useProvider = () => {
  const { raidDetails, onRaidCreate, onRaidUpdate, onRaidDelete } = useContext(
    ScheduleDetailContext
  );
  return {
    raidDetails,
    onRaidCreate,
    onRaidUpdate,
    onRaidDelete
  };
};
