import { Suspense } from 'react';
import Spinner from '../../../../components/show-data/Spinner';
import { scheduleLayout } from '../../components/layouts';
import { Calendar } from './components/Calendar';
import { ScheduleProvider } from './provider/provider';

export { Widget as ScheduleWidget };
const Widget = () => {
  const { Layout } = scheduleLayout;
  return (
    <Suspense fallback={<Spinner width='100vw' height='100vh' />}>
      <ScheduleProvider>
        <Layout>
          <Calendar />
        </Layout>
      </ScheduleProvider>
    </Suspense>
  );
};
