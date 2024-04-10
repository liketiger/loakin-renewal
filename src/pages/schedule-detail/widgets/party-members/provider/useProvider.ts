import { useContext } from 'react';
import { ScheduleDetailPartyMembersContext } from './context';

export { useProvider as useScheduleDetailPartyMembersProvider };

const useProvider = () => {
  const { onPartyMembersCreate, onPartyMembersDeleteAll } = useContext(
    ScheduleDetailPartyMembersContext
  );
  return {
    onPartyMembersCreate,
    onPartyMembersDeleteAll
  };
};
