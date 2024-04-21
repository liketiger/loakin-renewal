import { createContext } from "react";
import { CharacterView } from "../../../types/view";

interface State {
    characterList?: CharacterView[]
}

export {context as MemberSearchContext}

const context = createContext<State>({
    characterList: [],
});