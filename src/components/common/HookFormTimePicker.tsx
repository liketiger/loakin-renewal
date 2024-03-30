import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  onSubmit?: () => void;
  width?: string;
};

export const HookFormTimePicker = ({ name, onSubmit, width }: Props) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange: onHookFormChange }
  } = useController({
    name,
    control
  });
  const handleChange = useCallback(
    (value: any) => {
      onHookFormChange(dayjs(value));
      onSubmit?.();
    },
    [onHookFormChange, onSubmit]
  );
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label='시간 선택'
        value={value}
        onChange={handleChange}
        sx={{
          width,
          padding: '10px'
        }}
        slotProps={{
          textField: {
            sx: {
              '& .MuiInputBase-input': {
                height: '36px',
                padding: '10px',
                minWidth: '80px'
              }
            }
          }
        }}
      />
    </LocalizationProvider>
  );
};
