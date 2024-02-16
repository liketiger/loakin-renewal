import { scheduleDetailLayout } from '../../components/layout';
import { ScheduleDetailBtnGroup } from './components/BtnGroup';
import { ScheduleDetailRaidTable } from './components/RaidTable';
import { ScheduleDetailProvider } from './provider/provider';

export { Widget as ScheduleDetailWidget };
const Widget = () => {
  const { Header, Body } = scheduleDetailLayout;
  return (
    <ScheduleDetailProvider>
      <Body sx={{ width: '50vw'}}>
        <Header title='레이드 등록'>
          <ScheduleDetailBtnGroup />
        </Header>
        <ScheduleDetailRaidTable />
      </Body>
    </ScheduleDetailProvider>
  );
};
