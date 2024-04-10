import { useMemo } from 'react';
import { ScheduleDetailPartyMembersContext } from './context';
import { useScheduleDetailPartyMembersQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailPartyMembersProvider };

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { onPartyMembersCreate, onPartyMembersDeleteAll } =
    useScheduleDetailPartyMembersQueryLogic();
  const value = useMemo(
    () => ({ onPartyMembersCreate, onPartyMembersDeleteAll }),
    [onPartyMembersCreate, onPartyMembersDeleteAll]
  );
  return (
    <ScheduleDetailPartyMembersContext.Provider value={value}>
      {children}
    </ScheduleDetailPartyMembersContext.Provider>
  );
};
