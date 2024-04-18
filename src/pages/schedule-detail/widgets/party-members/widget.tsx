import { scheduleDetailLayout } from '../../components/layout';
import { ScheduleDetailPartyMembersTable } from './components/PartyMembersTable';
import { ScheduleDetailPartyMembersProvider } from './provider/provider';

export { Widget as ScheduleDetailPartyMembersWidget };

const Widget = () => {
  const { Header, Body } = scheduleDetailLayout;

  return (
    <ScheduleDetailPartyMembersProvider>
      <Body sx={{ width: '50%' }}>
        <Header title='파티 멤버' center={true} />
        <ScheduleDetailPartyMembersTable />
      </Body>
    </ScheduleDetailPartyMembersProvider>
  );
};
