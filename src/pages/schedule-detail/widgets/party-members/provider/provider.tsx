import { useMemo } from 'react';
import { ScheduleDetailPartyMembersContext } from './context';
import { useScheduleDetailPartyMembersQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailPartyMembersProvider };

const Provider = ({ children }: { children: React.ReactNode }) => {
  const {
    onPartyMembersCreate,
    onPartyMembersDeleteAll,
    isPartyMembersCreatePending,
    isPartyMembersDeleteAllPending
  } = useScheduleDetailPartyMembersQueryLogic();
  const value = useMemo(
    () => ({
      onPartyMembersCreate,
      onPartyMembersDeleteAll,
      isPartyMembersCreatePending,
      isPartyMembersDeleteAllPending
    }),
    [
      onPartyMembersCreate,
      onPartyMembersDeleteAll,
      isPartyMembersCreatePending,
      isPartyMembersDeleteAllPending
    ]
  );
  return (
    <ScheduleDetailPartyMembersContext.Provider value={value}>
      {children}
    </ScheduleDetailPartyMembersContext.Provider>
  );
};
