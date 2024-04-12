import { Outlet } from 'react-router-dom';
import { scheduleDetailLayout } from './components/layout';
import { RaidDetailsModalWrapper } from './widgets/raid-details-modal/components/RaidDetailsModalWrapper';
import { ScheduleDetailWidget } from './widgets/raid-schedules/widget';

export { Index as ScheduleDetailPage };
const Index = () => {
  const { Layout } = scheduleDetailLayout;
  return (
    <Layout>
      <RaidDetailsModalWrapper />
      <ScheduleDetailWidget />
      <Outlet />
    </Layout>
  );
};