import { DayCellContentArg } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useNavigate } from 'react-router-dom';
import { useScheduleDetailsState } from '../../../../schedule-detail/usetState';
import { convertRaidsToEvents } from '../../../utils';
import { useScheduleProvider } from '../provider/useProvider';

export const Calendar = () => {
  const { raids } = useScheduleProvider();
  const navigate = useNavigate();
  dayjs.extend(customParseFormat);

  const onDateClick = (e: any) => {
    navigate(`/schedule-detail/${e.dateStr}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      locale='ko'
      dayCellContent={(e: DayCellContentArg) =>
        e.dayNumberText.replace('일', '')
      }
      dateClick={(e) => onDateClick(e)}
      events={convertRaidsToEvents(raids!)}
      eventClick={(e) => console.log(e)}
    />
  );
};
