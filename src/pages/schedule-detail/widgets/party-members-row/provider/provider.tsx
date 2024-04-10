import { useMemo } from 'react';
import { ScheduleDetailPartyMembersRowContext } from './context';
import { useScheduleDetailPartyMembersRowQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailPartyMembersRowProvider };

const Provider = ({ children }: { children: React.ReactNode }) => {
  const {
    onPartyMembersCreate,
    onPartyMembersDelete,
    onPartyMembersUpdate,
    partyMembersList
  } = useScheduleDetailPartyMembersRowQueryLogic();
  const value = useMemo(
    () => ({
      onPartyMembersCreate,
      onPartyMembersDelete,
      onPartyMembersUpdate,
      partyMembersList
    }),
    [
      onPartyMembersCreate,
      onPartyMembersDelete,
      onPartyMembersUpdate,
      partyMembersList
    ]
  );
  return (
    <ScheduleDetailPartyMembersRowContext.Provider value={value}>
      {children}
    </ScheduleDetailPartyMembersRowContext.Provider>
  );
};
