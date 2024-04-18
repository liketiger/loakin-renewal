import { create } from "zustand"

interface State {
    keyword: string,
    setKeyword: (keyword: string) => void
}

export { useState as useMemberState };

const useState = create<State>((set) => ({
    keyword: '',
    setKeyword: (keyword: string) => set({ keyword })
}))