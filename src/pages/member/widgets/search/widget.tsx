import React, { Suspense } from 'react';
import { MemberSearchInput } from './components/MemberSearchInput';
import { MemberSearchProvider } from './provider/provider';
import Spinner from '../../../../components/show-data/Spinner';

export { Widget as MemberSearchWidget };

const Widget = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <MemberSearchProvider>
        <MemberSearchInput />
      </MemberSearchProvider>
    </Suspense>
  );
};
