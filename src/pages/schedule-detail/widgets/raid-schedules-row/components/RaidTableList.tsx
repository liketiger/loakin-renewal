import { NoResult } from '../../../../../components/show-data/NoResult';
import { RaidView } from '../../../types/view';
import { useRaidSchedulesRowProvider } from '../provider/useProvider';
import { ScheduleDetailRaidTableRow } from './RaidTableRow';

export { RaidTableList as ScheduleDetailRaidTableList };

const RaidTableList = () => {
    const { raidList } = useRaidSchedulesRowProvider();

    const isListEmpty = raidList?.length === 0;
  return (
    <>
      {isListEmpty && <NoResult colsapn={4} />}
      {!isListEmpty &&
        raidList?.map((item: RaidView) => (
          <ScheduleDetailRaidTableRow key={item.id} item={item} />
        ))}
    </>
  );
};

