import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormInput } from '../../../../../components/common/HookFormInput';
import { useMemberState } from '../../../useState';
import { MemberModal } from './Modal';

export const MemberSearchInput = () => {
  const setKeyword = useMemberState((state) => state.setKeyword);
  const methods = useForm({
    values: {
      keyword: ''
    }
  });
  const onChange = methods.handleSubmit((data) => {
    setKeyword(data.keyword);
  });

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          height: '40px',
          width: '350px',
          alignItems: 'center',
          justifyContent: 'right',
          gap: '20px'
        }}
      >
        <MemberModal />
        <HookFormInput
          name='keyword'
          onChange={onChange}
          padding='5px'
          placeholder='검색'
        />
        <SearchIcon sx={{ position: 'absolute', top: '6px', right: '5px' }} />
      </Box>
    </FormProvider>
  );
};
