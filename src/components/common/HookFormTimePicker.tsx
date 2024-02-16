import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useController, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  onSubmit?: () => void;
  width?: string;
};

export const HookFormTimePicker = ({ name, onSubmit, width }: Props) => {
  const { control } = useFormContext();
  const {
    field: { value }
  } = useController({
    name,
    control
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label='시간 선택'
        value={value}
        onChange={onSubmit}
        sx={{
          width
        }}
        slotProps={{
          textField: {
            sx: {
              '& .MuiInputBase-input': {
                height: '36px', // 입력 필드 높이 조정
                padding: '10px' // 패딩을 조정하여 입력 필드 내부 높이 조절
              }
            }
          }
        }}
      />
    </LocalizationProvider>
  );
};
