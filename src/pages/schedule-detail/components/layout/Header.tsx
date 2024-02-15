import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Header = ({ children, title }: Props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {title && <Typography>{title}</Typography>}
      {children}
    </Box>
  );
};