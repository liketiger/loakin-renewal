import React, { useMemo } from 'react';
import { RaidSettingsContext } from './context';
import { useRaidSettingsQueryLogic } from './useQueryLogic';

export { Provider as RaidSettingsProvider };

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const { onSettingsCreate, onSettingsDeleteAll } = useRaidSettingsQueryLogic();
  const value = useMemo(
    () => ({
      onSettingsCreate,
      onSettingsDeleteAll
    }),
    [onSettingsCreate, onSettingsDeleteAll]
  );
  return (
    <RaidSettingsContext.Provider value={value}>
      {children}
    </RaidSettingsContext.Provider>
  );
};
