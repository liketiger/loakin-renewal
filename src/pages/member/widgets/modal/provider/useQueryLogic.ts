import { memberRepository } from '../../../repository';
import { useMemberState } from '../../../useState';

export { useQueryLogic as useMemberModalQueryLogic };

const useQueryLogic = () => {
  const characterName = useMemberState((state) => state.characterName);
  const { data: characterList } =
    memberRepository.useCharacterList(characterName);
  console.log(characterList);

  return {
    characterList
  };
};
