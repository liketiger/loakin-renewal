import { create } from 'zustand';
import { CharacterParams } from './types/parameter';

interface State {
  keyword: string;
  setKeyword: (keyword: string) => void;
  characterName: string;
  setCharacterName: (characterName: string) => void;
  showConfirm?: boolean;
  setShowConfirm: (showConfirm: boolean) => void;
  selectedCharacterList?: CharacterParams[];
  setSelectedCharacterList: (selectedCharacterList: CharacterParams[]) => void;
  pushSelectedCharacterList: (selectedCharacterList: CharacterParams) => void;
}

export { useState as useMemberState };

const useState = create<State>((set) => ({
  keyword: '',
  setKeyword: (keyword: string) => set({ keyword }),
  characterName: '',
  setCharacterName: (characterName: string) => set({ characterName }),
  setShowConfirm: (showConfirm: boolean) => set({ showConfirm }),
  setSelectedCharacterList: (selectedCharacterList: CharacterParams[]) =>
    set((state) => {
      if (
        !state.selectedCharacterList ||
        state.selectedCharacterList.length === 0 ||
        state.selectedCharacterList.length !== selectedCharacterList.length
      ) {
        return {
          selectedCharacterList
        };
      }
      return { selectedCharacterList: [] };
    }),
  pushSelectedCharacterList: (selectedCharacterList: CharacterParams) => {
    set((state) => {
      if (
        state.selectedCharacterList?.some(
          (el) => el.CharacterName === selectedCharacterList.CharacterName
        )
      ) {
        return {
          selectedCharacterList: state.selectedCharacterList.filter(
            (item) => item.CharacterName !== selectedCharacterList.CharacterName
          )
        };
      }
      return {
        selectedCharacterList: [
          ...(state.selectedCharacterList ?? []),
          selectedCharacterList
        ]
      };
    });
  }
}));
