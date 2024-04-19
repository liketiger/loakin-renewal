import { useContext } from 'react';
import { MemberModalContext } from './context';

export { useProvider as useMemberModalProvider };

const useProvider = () => {
  const { characterList } = useContext(MemberModalContext);
  return {
    characterList
  };
};
