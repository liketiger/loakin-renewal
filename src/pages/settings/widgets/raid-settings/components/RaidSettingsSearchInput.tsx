import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormInput } from '../../../../../components/common/HookFormInput';
import { useSettingsState } from '../../../useState';

export const RaidSettingsSearchInput = () => {
  const setKeyword = useSettingsState((state) => state.setKeyword);
  const methods = useForm({
    values: {
      keyword: ''
    }
  });
  const onChange = methods.handleSubmit((data) => {
    setKeyword(data.keyword)});
  return (
    <FormProvider {...methods}>
      <Box>
        <HookFormInput name='keyword' onChange={onChange} padding='5px' />
      </Box>
    </FormProvider>
  );
};
