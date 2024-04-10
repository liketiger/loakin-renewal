import { Suspense } from 'react';
import TableSpinner from '../../../../components/show-data/TableSpinner';
import { ScheduleDetailPartyMembersTableList } from './components/PartyMembersTableList';
import { ScheduleDetailPartyMembersRowProvider } from './provider/provider';

export { Widget as ScheduleDetailPartyMembersRowWidget };

const Widget = () => {
  return (
    <Suspense fallback={<TableSpinner colspan={5} />}>
      <ScheduleDetailPartyMembersRowProvider>
        <ScheduleDetailPartyMembersTableList />
      </ScheduleDetailPartyMembersRowProvider>
    </Suspense>
  );
};
