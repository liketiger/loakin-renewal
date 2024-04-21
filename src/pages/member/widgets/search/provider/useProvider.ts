import { useContext } from 'react';
import { MemberSearchContext } from './context';

export { useProvider as useMemberSearchProvider };

const useProvider = () => {
  const { characterList } = useContext(MemberSearchContext);
  return {
    characterList
  };
};
