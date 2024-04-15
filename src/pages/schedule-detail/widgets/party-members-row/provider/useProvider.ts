import { useContext } from 'react';
import { ScheduleDetailPartyMembersRowContext } from './context';

export { useProvider as useScheduleDetailPartyMembersRowProvider };

const useProvider = () => {
  const {
    onPartyMembersCreate,
    onPartyMembersDelete,
    onPartyMembersUpdate,
    partyMembersList,
    isPartyMembersCreatePending,
    isPartyMembersDeletePending
  } = useContext(ScheduleDetailPartyMembersRowContext);
  return {
    onPartyMembersCreate,
    onPartyMembersDelete,
    onPartyMembersUpdate,
    partyMembersList,
    isPartyMembersCreatePending,
    isPartyMembersDeletePending
  };
};
