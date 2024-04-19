import React, { useMemo } from 'react';
import { useMemberModalQueryLogic } from './useQueryLogic';
import { MemberModalContext } from './context';

export { Provier as MemberModalProvider };

const Provier = ({ children }: { children: React.ReactNode }) => {
  const { characterList } = useMemberModalQueryLogic();
  const value = useMemo(() => ({ characterList }), [characterList]);
  return (
    <MemberModalContext.Provider value={value}>
      {children}
    </MemberModalContext.Provider>
  );
};
