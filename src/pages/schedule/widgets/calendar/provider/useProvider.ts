import { useContext } from 'react';
import { ScheduleContext } from './context';

export {useProvider as useScheduleProvider}
const useProvider = () => {
  const { raids } = useContext(ScheduleContext);
  return {
    raids
  };
};
