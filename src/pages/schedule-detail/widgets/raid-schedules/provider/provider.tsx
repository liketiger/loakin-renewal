import { useMemo } from 'react';
import { ScheduleDetailContext } from './context';
import { useScheduleDetailQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailProvider };

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const { onRaidCreate, onRaidDeleteAll } = useScheduleDetailQueryLogic();
  const value = useMemo(
    () => ({
      onRaidCreate,
      onRaidDeleteAll
    }),
    [onRaidCreate, onRaidDeleteAll]
  );

  return (
    <ScheduleDetailContext.Provider value={value}>
      {children}
    </ScheduleDetailContext.Provider>
  );
};
