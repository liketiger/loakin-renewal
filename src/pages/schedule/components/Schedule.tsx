import { DayCellContentArg } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { Box } from '@mui/material';
import classes from './Schedule.module.css';

const Schedule = () => {
  return (
    <Box className={classes.container}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        locale='ko'
        dayCellContent={(e: DayCellContentArg) =>
          e.dayNumberText.replace('일', '')
        }
        dateClick={(e) => console.log(e)}
        events={[{ title: 'event1', date: '2024-01-02' }]}
        eventClick={(e) => console.log(e)}
      />
    </Box>
  );
};

export default Schedule;
