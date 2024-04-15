import { Suspense } from 'react';
import TableSpinner from '../../../../components/show-data/TableSpinner';
import { ScheduleDetailPartyMembersTableList } from './components/PartyMembersTableList';
import { ScheduleDetailPartyMembersRowProvider } from './provider/provider';
import { PartyMembersRowBackdropWrapper } from './components/BackdropWrapper';

export { Widget as ScheduleDetailPartyMembersRowWidget };

const Widget = () => {
  return (
    <Suspense fallback={<TableSpinner colspan={5} />}>
      <ScheduleDetailPartyMembersRowProvider>
        <PartyMembersRowBackdropWrapper />
        <ScheduleDetailPartyMembersTableList />
      </ScheduleDetailPartyMembersRowProvider>
    </Suspense>
  );
};
