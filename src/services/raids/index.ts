import { RaidParams } from '../../pages/schedule-detail/types/parameter';
import supabase from '../supabase';

export const getSupabaseRaids = async (date?: string) => {
  let query = supabase
    .from('raids')
    .select('*')
    .order('time', { ascending: true });

  if (date) {
    query = query.eq('date', date);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Raids를 가져올 수 없습니다.');
  }

  console.log(data);

  return data;
};

export const createSupabaseRaid = async (data: RaidParams) => {
  const { error } = await supabase.from('raids').insert(data);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Raid를 생성할 수 없습니다.');
  }
};

export const updateSupabaseRaid = async (data: RaidParams) => {
  const { error } = await supabase.from('raids').update(data).eq('id', data.id);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Raid를 업데이트 할 수 없습니다.');
  }
};

export const deleteSupabaseRaid = async (idList: number[]) => {
  const { error } = await supabase.from('raids').delete().in('id', idList);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Raid를 삭제할 수 없습니다.');
  }
};
