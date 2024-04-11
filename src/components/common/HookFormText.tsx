import { Box, Typography } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  align?: 'left' | 'center' | 'right';
}

export const HookFormText = ({ name, align }: Props) => {
  const { control } = useFormContext();
  const {
    field: { value }
  } = useController({
    name,
    control
  });
  return (
    <Box sx={{ textAlign: align }}>
      <Typography>{value}</Typography>
    </Box>
  );
};
