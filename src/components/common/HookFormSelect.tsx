import { Box, MenuItem, Select } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';
import { OptionList } from '../../type';

type Props = {
  defaultValue?: string;
  name: string;
  optionList: OptionList[];
  width?: string;
  onSubmit?: () => void;
  disabled?: boolean;
};

export const HookFormSelect = ({
  name,
  defaultValue,
  optionList,
  onSubmit,
  disabled
}: Props) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange: onHookFormChange }
  } = useController({
    name,
    control
  });
  const onChange = (e: any) => {
    onHookFormChange(e);
    onSubmit?.();
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Select
        sx={{ width: '100%', textAlign: 'left' }}
        value={value}
        onChange={onChange}
        displayEmpty
        disabled={disabled}
      >
        {defaultValue && (
          <MenuItem value='' disabled={true}>
            {defaultValue}
          </MenuItem>
        )}
        {optionList.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
