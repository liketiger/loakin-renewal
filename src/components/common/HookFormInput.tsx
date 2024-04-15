import { Box, TextField } from '@mui/material';
import React, { CSSProperties, ChangeEvent, ChangeEventHandler } from 'react';
import { useController, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  onBlur?: () => void;
  sx?: CSSProperties;
  onChange?: () => void;
  padding?: string;
  placeholder?: string;
}

export const HookFormInput = ({ name, onBlur, onChange, sx, padding, ...props }: Props) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange: onHookFormChange },
  } = useController({ name, control });
  const onSubmit = () => {
    onBlur?.();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onHookFormChange(e);
    onChange?.();
  };
  return (
    <Box sx={{ ...sx }}>
      <TextField
        variant='outlined'
        value={value}
        onChange={onChangeHandler}
        onBlur={onSubmit}
        sx={{ width: '100%' }}
        inputProps={{ style: { padding } }}
        {...props}
      />
    </Box>
  );
};
