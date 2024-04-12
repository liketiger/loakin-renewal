import { Box, TextField } from '@mui/material';
import React, { CSSProperties } from 'react';
import { useController, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  onBlur?: () => void;
  sx?: CSSProperties;
}

export const HookFormInput = ({ name, onBlur, sx }: Props) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange }
  } = useController({ name, control });
  const onSubmit = () => {
    onBlur?.();
  };
  return (
    <Box sx={{ ...sx }}>
      <TextField
        variant='outlined'
        value={value}
        onChange={onChange}
        onBlur={onSubmit}
        sx={{ width: '100%'}}
      />
    </Box>
  );
};
