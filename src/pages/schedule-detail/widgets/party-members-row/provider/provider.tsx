import { useMemo } from 'react';
import { ScheduleDetailPartyMembersRowContext } from './context';
import { useScheduleDetailPartyMembersRowQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailPartyMembersRowProvider };

const Provider = ({ children }: { children: React.ReactNode }) => {
  const {
    onPartyMembersCreate,
    onPartyMembersDelete,
    onPartyMembersUpdate,
    partyMembersList,
    isPartyMembersCreatePending,
    isPartyMembersDeletePending
  } = useScheduleDetailPartyMembersRowQueryLogic();
  const value = useMemo(
    () => ({
      onPartyMembersCreate,
      onPartyMembersDelete,
      onPartyMembersUpdate,
      partyMembersList,
      isPartyMembersCreatePending,
      isPartyMembersDeletePending
    }),
    [
      onPartyMembersCreate,
      onPartyMembersDelete,
      onPartyMembersUpdate,
      partyMembersList,
      isPartyMembersCreatePending,
      isPartyMembersDeletePending
    ]
  );
  return (
    <ScheduleDetailPartyMembersRowContext.Provider value={value}>
      {children}
    </ScheduleDetailPartyMembersRowContext.Provider>
  );
};
