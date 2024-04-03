import { Suspense } from 'react';
import TableSpinner from '../../../../components/show-data/TableSpinner';
import { ScheduleDetailRaidTableList } from './components/RaidTableList';
import { RaidSchedulesRowProvider } from './provider/provider';

export { Widget as RaidSchedulesRowWidget };

const Widget = () => {
  return (
    <Suspense fallback={<TableSpinner colspan={4} />}>
      <RaidSchedulesRowProvider>
        <ScheduleDetailRaidTableList />
      </RaidSchedulesRowProvider>
    </Suspense>
  );
};
