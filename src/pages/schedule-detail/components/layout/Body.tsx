import { Box } from '@mui/material';
import React from 'react';

type Props = {
    children: React.ReactNode;
}

export const Body = ({children}: Props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            {children}
        </Box>
    );
};