import { ScheduleDetailRaidTable } from './components/RaidTable';
import { ScheduleDetailProvider } from './provider/provider';

export { Widget as ScheduleDetailWidget };
const Widget = () => {
  return (
    <ScheduleDetailProvider>
      <ScheduleDetailRaidTable />
    </ScheduleDetailProvider>
  );
};
