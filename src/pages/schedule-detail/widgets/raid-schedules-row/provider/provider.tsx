import React, { useMemo } from 'react';
import { RaidSchedulesRowContext } from './context';
import { useRaidSchedulesRowQueryLogic } from './useQueryLogic';

export { Provider as RaidSchedulesRowProvider };

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const {
    onRaidCreate,
    onRaidDelete,
    onRaidUpdate,
    raidList,
    isRaidCreatePending,
    isRaidDeletePending,
    raidOptionList,
  } = useRaidSchedulesRowQueryLogic();
  const value = useMemo(
    () => ({
      onRaidCreate,
      onRaidDelete,
      onRaidUpdate,
      raidList,
      isRaidCreatePending,
      isRaidDeletePending,
      raidOptionList,
    }),
    [
      onRaidCreate,
      onRaidDelete,
      onRaidUpdate,
      raidList,
      isRaidCreatePending,
      isRaidDeletePending,
      raidOptionList,
    ]
  );
  return (
    <RaidSchedulesRowContext.Provider value={value}>
      {children}
    </RaidSchedulesRowContext.Provider>
  );
};
