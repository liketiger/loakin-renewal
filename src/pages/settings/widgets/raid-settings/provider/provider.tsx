import React, { useMemo } from 'react';
import { RaidSettingsContext } from './context';
import { useRaidSettingsQueryLogic } from './useQueryLogic';

export { Provider as RaidSettingsProvider };

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const { onSettingsCreate, onSettingsDeleteAll, isSettingsCreatePending, isSettingsDeleteAllPending } = useRaidSettingsQueryLogic();
  const value = useMemo(
    () => ({
      onSettingsCreate,
      onSettingsDeleteAll,
      isSettingsCreatePending,
      isSettingsDeleteAllPending
    }),
    [onSettingsCreate, onSettingsDeleteAll, isSettingsCreatePending, isSettingsDeleteAllPending]
  );
  return (
    <RaidSettingsContext.Provider value={value}>
      {children}
    </RaidSettingsContext.Provider>
  );
};
