import { Suspense } from 'react';
import TableSpinner from '../../../../components/show-data/TableSpinner';
import { MemberTableList } from './components/MemberTableList';
import { MemberTableProvider } from './provider/provider';

export { Widget as MemberTableWidget };

const Widget = () => {
  return (
    <Suspense fallback={<TableSpinner colspan={6} />}>
      <MemberTableProvider>
        <MemberTableList />
      </MemberTableProvider>
    </Suspense>
  );
};
