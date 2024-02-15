import { useMemo } from 'react';
import { ScheduleDetailContext } from './context';
import { useScheduleDetailQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailProvider };

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const { raidDetails, onRaidCreate, onRaidUpdate, onRaidDelete } =
    useScheduleDetailQueryLogic();
  const value = useMemo(
    () => ({
      raidDetails,
      onRaidCreate,
      onRaidUpdate,
      onRaidDelete
    }),
    [raidDetails, onRaidCreate, onRaidUpdate, onRaidDelete]
  );
  
  return (
    <ScheduleDetailContext.Provider value={value}>
      {children}
    </ScheduleDetailContext.Provider>
  );
};
