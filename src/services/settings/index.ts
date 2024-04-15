import { RaidSettingsParams } from '../../pages/settings/types/parameter';
import supabase from '../supabase';

export const getSupabaseSettings = async (keyword?: string) => {
  const query = supabase
    .from('settings')
    .select('*')
    .or(`level.ilike.%${keyword}%, name.ilike.%${keyword}%`)

  const { data, error } = await query;

  if (error) throw new Error('Supabase에서 Settings를 가져올 수 없습니다.');

  return data.sort((a, b) => a.id - b.id);
};

export const getSupabaseManagableVariable = async (params: string) => {
  const { data, error } = await supabase.from('settings').select(params ?? '*');

  if (error)
    throw new Error('Supabase에서 ManagableVariable를 가져올 수 없습니다.');

  return data;
};

export const createSupabaseSettings = async () => {
  const { error } = await supabase.from('settings').insert({});

  if (error) throw new Error('Supabase에서 Settings를 생성할 수 없습니다.');
};

export const updateSupabaseSettings = async (data: RaidSettingsParams) => {
  const { error } = await supabase
    .from('settings')
    .update(data)
    .eq('id', data.id);

  if (error) throw new Error('Supabase에서 Settings를 업데이트할 수 없습니다.');
};

export const deleteSupabseSettings = async (id: number) => {
  const { error } = await supabase.from('settings').delete().eq('id', id);

  if (error) throw new Error('Supabase에서 Settings를 삭제할 수 없습니다.');
};

export const deleteAllSupabaseSettings = async () => {
  const { error } = await supabase.from('settings').delete();

  if (error) throw new Error('Supabase에서 Settings를 전체삭제할 수 없습니다.');
};
