import { Suspense } from 'react';
import Spinner from '../../../../components/show-data/Spinner';
import Layout from '../../components/layouts/Layout';
import { Calendar } from './components/Calendar';
import { ScheduleProvider } from './provider/provider';

export { Widget as ScheduleWidget };
const Widget = () => {
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
