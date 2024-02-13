import supabase from '../supabase';

export const getSupabaseRaids = async (date?: string) => {
  let query = supabase
    .from('raids')
    .select('*');

  if (date) {
    query = query.eq('date', date);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Raids를 가져올 수 없습니다.');
  }

  return data;
};