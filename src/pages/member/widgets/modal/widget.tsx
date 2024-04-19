import { Suspense } from 'react';
import Spinner from '../../../../components/show-data/Spinner';
import { MemberModal } from '../search/components/Modal';
import { MemberModalProvider } from './provider/provier';

export { Widget as MemberModalWidget };

const Widget = () => {
  return (
    <Suspense fallback={<Spinner width='300px' height='300px' />}>
      <MemberModalProvider>
        <MemberModal />
      </MemberModalProvider>
    </Suspense>
  );
};
