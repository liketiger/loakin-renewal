import { CharacterParams } from '../types/parameter';

export const convertToMemberParams = (
  list: CharacterParams[],
  userName: string
) =>
  list.map((item) => ({
    ServerName: item.ServerName,
    CharacterName: item.CharacterName,
    CharacterLevel: item.CharacterLevel,
    CharacterClassName: item.CharacterClassName,
    ItemLevel: item.ItemLevel,
    userName
  }));
