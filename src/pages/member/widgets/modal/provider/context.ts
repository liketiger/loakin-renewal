import { createContext } from "react";
import { CharacterView } from "../../../types/view";

interface State {
    characterList?: CharacterView[]
}

export {context as MemberModalContext}

const context = createContext<State>({
    characterList: [],
});