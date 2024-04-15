import { useMemo } from 'react';
import { ScheduleDetailContext } from './context';
import { useScheduleDetailQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailProvider };

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const { onRaidCreate, onRaidDeleteAll, isRaidCreatePending, isRaidDeleteAllPending } = useScheduleDetailQueryLogic();
  const value = useMemo(
    () => ({
      onRaidCreate,
      onRaidDeleteAll,
      isRaidCreatePending,
      isRaidDeleteAllPending
    }),
    [onRaidCreate, onRaidDeleteAll, isRaidCreatePending, isRaidDeleteAllPending]
  );

  return (
    <ScheduleDetailContext.Provider value={value}>
      {children}
    </ScheduleDetailContext.Provider>
  );
};
