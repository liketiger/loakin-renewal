import { DayCellContentArg } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';
import { useScheduleDetailsState } from '../../../../schedule-detail/usetState';
import { convertRaidsToEvents } from '../../../utils';
import { useScheduleProvider } from '../provider/useProvider';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const Calendar = () => {
  const { raids } = useScheduleProvider();
  const setDate = useScheduleDetailsState((state) => state.setDate);
  dayjs.extend(customParseFormat);

  const onDateClick = (e: any) => {
    setDate(e.dateStr);
  };
  console.log(dayjs('20:00:00', 'HH:mm:ss'));


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
