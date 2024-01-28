import supabase from '../supabase';

export const getRaids = async () => {
  const { data, error } = await supabase
    .from('raids')
    .select('*');

  if (error) {
    console.log(error);
    throw new Error('Raids 를 가져올 수 없습니다.');
  }

  return data;
};
