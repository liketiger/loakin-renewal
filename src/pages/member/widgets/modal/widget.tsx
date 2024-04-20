import { Suspense } from 'react';
import TableSpinner from '../../../../components/show-data/TableSpinner';
import { MemberModalTableList } from './components/List';
import { MemberModalProvider } from './provider/provier';

export { Widget as MemberModalListWidget };

const Widget = () => {
  return (
    <Suspense fallback={<TableSpinner colspan={4} />}>
      <MemberModalProvider>
        <MemberModalTableList />
      </MemberModalProvider>
    </Suspense>
  );
};
