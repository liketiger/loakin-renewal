import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  title?: string;
  center?: boolean;
};

export const Header = ({ children, title, center }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: center ? 'center' : 'space-between'
      }}
    >
      {title && <Typography fontWeight='bold'>{title}</Typography>}
      {!center && (
        <Box
          sx={{
            display: 'flex',
            width: '200px',
            justifyContent: 'right',
            gap: '10px'
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};
