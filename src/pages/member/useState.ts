import { create } from "zustand"

interface State {
    keyword: string,
    setKeyword: (keyword: string) => void,
    characterName: string,
    setCharacterName: (characterName: string) => void,
    showConfirm?: boolean,
    setShowConfirm: (showConfirm: boolean) => void
}

export { useState as useMemberState };

const useState = create<State>((set) => ({
    keyword: '',
    setKeyword: (keyword: string) => set({ keyword }),
    characterName: '',
    setCharacterName: (characterName: string) => set({ characterName }),
    setShowConfirm: (showConfirm: boolean) => set({ showConfirm })
}))