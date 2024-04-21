import React, { useMemo } from 'react';
import { MemberSearchContext } from './context';
import { useMemberSearchQueryLogic } from './useQueryLogic';

export { Provier as MemberSearchProvider };

const Provier = ({ children }: { children: React.ReactNode }) => {
  const { characterList } = useMemberSearchQueryLogic();
  const value = useMemo(() => ({ characterList }), [characterList]);
  return (
    <MemberSearchContext.Provider value={value}>
      {children}
    </MemberSearchContext.Provider>
  );
};
