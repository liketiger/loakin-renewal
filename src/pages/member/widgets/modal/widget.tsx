import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Spinner from '../../../../components/show-data/Spinner';
import { MemberModalCharacterTable } from './components/ModalCharacterTable';
import { MemberModalProvider } from './provider/provier';
import { Typography } from '@mui/material';

export { Widget as MemberModalCharacterTableWidget };

const Widget = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={() => (
            <Typography textAlign='center'>없는 캐릭터명입니다.</Typography>
          )}
        >
          <Suspense fallback={<Spinner />}>
            <MemberModalProvider>
              <MemberModalCharacterTable />
            </MemberModalProvider>
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
