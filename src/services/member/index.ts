import { MemberParams } from '../../pages/member/types/parameter';
import supabase from '../supabase';

export const getSupabaseMemberList = async () => {
  const { data, error } = await supabase.from('totalCharacters').select('*');

  if (error) throw new Error('Supabase에서 MemberList를 가져올 수 없습니다.');

  return data;
};

export const updateSupabaseMemberList = async (characterList: MemberParams[]) => {
    const { error } = await supabase.from('totalCharacters').upsert(characterList);

    if (error) throw new Error('Supabase에서 CharacterList를 업데이트할 수 없습니다. 이미 등록된 캐릭터인지 확인해 주세요.');
}

export const deleteSupabaseMemberList = async (characterName: string) => {
  const { error } = await supabase
    .from('totalCharacters')
    .delete()
    .eq('characterName', characterName);

  if (error) throw new Error('Supabase에서 CharacterList를 삭제할 수 없습니다.');
};
