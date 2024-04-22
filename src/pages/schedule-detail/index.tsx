import { Outlet } from 'react-router-dom';
import { scheduleDetailLayout } from './components/layout';
import { ScheduleDetailWidget } from './widgets/raid-schedules/widget';

export { Index as ScheduleDetailPage };
const Index = () => {
  const { Layout } = scheduleDetailLayout;
  return (
    <Layout>
      <ScheduleDetailWidget />
      <Outlet />
    </Layout>
  );
};