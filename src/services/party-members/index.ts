import { PartyMembersParams } from '../../pages/schedule-detail/types/parameter';
import supabase from '../supabase';

export const getSupabasePartyMembers = async (raidId: number) => {
  const { data, error } = await supabase
    .from('partyMembers')
    .select('*')
    .eq('raidId', raidId).order('id', { ascending: true });

  if (error) throw new Error('Supabase에서 Members를 가져올 수 없습니다.');

  return data;
};

export const createSupabasePartyMembers = async (raidId: number) => {
  const { error } = await supabase.from('partyMembers').insert({ raidId });

  if (error) throw new Error('Supabase에서 Members를 생성할 수 없습니다.');
};

export const updateSupabasePartyMembers = async (data: PartyMembersParams) => {
  const { error } = await supabase
    .from('partyMembers')
    .update(data)
    .eq('id', data.id);

  if (error) throw new Error('Supabase에서 Members를 업데이트할 수 없습니다.');
};

export const deleteSupabasePartyMembers = async (id: number) => {
  const { error } = await supabase.from('partyMembers').delete().match({ id });

  if (error) throw new Error('Supabase에서 Members를 삭제할 수 없습니다.');
};

export const deleteAllSupabasePartyMembers = async (raidId: number) => {
  const { error } = await supabase
    .from('partyMembers')
    .delete()
    .eq('raidId', raidId);

  if (error) throw new Error('Supabase에서 Members를 삭제할 수 없습니다.');
};
