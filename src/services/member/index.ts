import { MemberParams } from '../../pages/member/types/parameter';
import supabase from '../supabase';

export const getSupabaseMemberList = async (keyword: string) => {
  let query = supabase.from('totalCharacters').select('*');

  if (keyword) {
    query = query.or(
      `CharacterName.ilike.%${keyword}%, userName.ilike.%${keyword}%, ServerName.ilike.%${keyword}%, CharacterClassName.ilike.%${keyword}%`
    );
  }

  const { data, error } = await query;

  if (error) throw new Error('Supabase에서 MemberList를 가져올 수 없습니다.');

  return data.sort((curr, next) => curr.id - next.id);
};

export const updateSupabaseMemberList = async (
  characterList: MemberParams[]
) => {
  const { error } = await supabase
    .from('totalCharacters')
    .upsert(characterList, { onConflict: 'CharacterName' });

  if (error)
    throw new Error('Supabase에서 CharacterList를 업데이트할 수 없습니다');
};

export const deleteSupabaseMemberList = async (characterName: string) => {
  const { error } = await supabase
    .from('totalCharacters')
    .delete()
    .eq('characterName', characterName);

  if (error)
    throw new Error('Supabase에서 CharacterList를 삭제할 수 없습니다.');
};
