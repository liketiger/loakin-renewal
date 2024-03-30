import { Suspense } from 'react';
import { scheduleDetailLayout } from '../../components/layout';
import { ScheduleDetailBtnGroup } from './components/BtnGroup';
import { ScheduleDetailRaidTable } from './components/RaidTable';
import { ScheduleDetailProvider } from './provider/provider';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';

export { Widget as ScheduleDetailWidget };
const Widget = () => {
  const { Header, Body } = scheduleDetailLayout;
  const { date } = useParams();

  return (
    <Suspense fallback={null}>
      <ScheduleDetailProvider>
        <Body sx={{ width: '50%' }}>
          <Header title='레이드 등록'>
            <Typography fontWeight={'bold'}>
              {date}
            </Typography>
          </Header>
          <ScheduleDetailRaidTable />
        </Body>
      </ScheduleDetailProvider>
    </Suspense>
  );
};
