import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { scheduleDetailLayout } from '../../components/layout';
import { ScheduleDetailRaidTable } from './components/RaidTable';
import { ScheduleDetailProvider } from './provider/provider';

export { Widget as ScheduleDetailWidget };
const Widget = () => {
  const { Header, Body } = scheduleDetailLayout;
  const { date } = useParams();

  return (
    <ScheduleDetailProvider>
      <Body sx={{ width: '50%' }}>
        <Header title='레이드 등록'>
          <Typography fontWeight={'bold'}>{date}</Typography>
        </Header>
        <ScheduleDetailRaidTable />
      </Body>
    </ScheduleDetailProvider>
  );
};
