import { memberRepository } from '../../../repository';
import { CharacterView } from '../../../types/view';
import { useMemberState } from '../../../useState';

export { useQueryLogic as useMemberModalQueryLogic };

const useQueryLogic = () => {
  const characterName = useMemberState((state) => state.characterName);
  const { data } = memberRepository.useCharacterList(characterName);

  const characterList = data.map((item: CharacterView) => ({
    ...item,
    ItemLevel: item.ItemAvgLevel
  }));

  return {
    characterList
  };
};
