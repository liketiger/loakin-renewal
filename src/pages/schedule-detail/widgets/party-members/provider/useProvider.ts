import { useContext } from 'react';
import { ScheduleDetailPartyMembersContext } from './context';

export { useProvider as useScheduleDetailPartyMembersProvider };

const useProvider = () => {
  const {
    onPartyMembersCreate,
    onPartyMembersDeleteAll,
    isPartyMembersCreatePending,
    isPartyMembersDeleteAllPending
  } = useContext(ScheduleDetailPartyMembersContext);
  return {
    onPartyMembersCreate,
    onPartyMembersDeleteAll,
    isPartyMembersCreatePending,
    isPartyMembersDeleteAllPending
  };
};
