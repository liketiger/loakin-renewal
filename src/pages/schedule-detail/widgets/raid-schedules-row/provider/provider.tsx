import React, { useMemo } from 'react';
import { RaidSchedulesRowContext } from './context';
import { useRaidSchedulesRowQueryLogic } from './useQueryLogic';

export { Provider as RaidSchedulesRowProvider };

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const { onRaidCreate, onRaidDelete, onRaidUpdate, raidList } =
    useRaidSchedulesRowQueryLogic();
  const value = useMemo(
    () => ({ onRaidCreate, onRaidDelete, onRaidUpdate, raidList }),
    [onRaidCreate, onRaidDelete, onRaidUpdate, raidList]
  );
  return (
    <RaidSchedulesRowContext.Provider value={value}>
      {children}
    </RaidSchedulesRowContext.Provider>
  );
};
