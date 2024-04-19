import { lostArkURL } from "../utils/constants"

const url = {
  getCharacterList: (characterName: string) => `${lostArkURL}/characters/${characterName}/siblings`
};

export const memberApi = {
  getCharacterList: async (characterName: string) => {
    const { VITE_LOSTARK_API_KEY } = import.meta.env;
    const response = await fetch(url.getCharacterList(characterName), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${VITE_LOSTARK_API_KEY}`
      }
    });
    const data = await response.json();
    return data;
  }
};
