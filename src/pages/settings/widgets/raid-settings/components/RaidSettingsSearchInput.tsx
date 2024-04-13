import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormInput } from '../../../../../components/common/HookFormInput';

export const RaidSettingsSearchInput = () => {
  const methods = useForm({
    values: {
      keyword: ''
    }
  });
  const onChange = methods.handleSubmit((data) => console.log(data));
  return (
    <FormProvider {...methods}>
      <Box>
        <HookFormInput name='keyword' onChange={onChange} padding='5px' />
      </Box>
    </FormProvider>
  );
};
