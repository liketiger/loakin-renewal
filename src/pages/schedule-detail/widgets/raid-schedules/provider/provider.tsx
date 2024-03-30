import { useMemo } from 'react';
import { ScheduleDetailContext } from './context';
import { useScheduleDetailQueryLogic } from './useQueryLogic';

export { Provider as ScheduleDetailProvider };

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const { raidList, onRaidCreate, onRaidDelete, onRaidDeleteAll } =
    useScheduleDetailQueryLogic();
  const value = useMemo(
    () => ({
      raidList,
      onRaidCreate,
      onRaidDelete,
      onRaidDeleteAll
    }),
    [raidList, onRaidCreate, onRaidDelete, onRaidDeleteAll]
  );

  return (
    <ScheduleDetailContext.Provider value={value}>
      {children}
    </ScheduleDetailContext.Provider>
  );
};
