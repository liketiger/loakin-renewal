import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Header = ({ children, title }: Props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {title && <Typography fontWeight='bold'>{title}</Typography>}
      <Box
        sx={{
          display: 'flex',
          width: '200px',
          justifyContent: 'right',
          gap: '10px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
