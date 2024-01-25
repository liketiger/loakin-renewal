import FullCalendar from '@fullcalendar/react';
import { Box } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react';

const Schedule = () => {
    return (
        <Box>
            <FullCalendar plugins={[ dayGridPlugin ]} initialView='dayGridMonth' />
        </Box>
    );
};

export default Schedule;