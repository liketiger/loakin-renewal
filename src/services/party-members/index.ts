import supabase from '../supabase';

export const getSupabasePartyMembers = async (raidId: number) => {
  const { data, error } = await supabase
    .from('partyMembers')
    .select('*')
    .eq('raidId', raidId);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Raids를 가져올 수 없습니다.');
  }

  return data;
};
