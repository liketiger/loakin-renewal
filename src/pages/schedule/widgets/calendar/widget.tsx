import { Suspense } from 'react';
import Layout from '../../components/layouts/Layout';
import { Calendar } from './components/Calendar';
import { ScheduleProvider } from './provider/provider';

export { Widget as ScheduleWidget };
const Widget = () => {
  return (
    <Suspense fallback={null}>
      <ScheduleProvider>
        <Layout>
          <Calendar />
        </Layout>
      </ScheduleProvider>
    </Suspense>
  );
};
