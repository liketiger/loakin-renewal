import { scheduleDetailRepository } from '../../../repository';
import { useScheduleDetailsState } from '../../../usetState';

export { useQueryLogic as useRaidSchedulesRowQueryLogic };

const useQueryLogic = () => {
  const date = useScheduleDetailsState((state) => state.date);
  const { data: raidList } = scheduleDetailRepository.useRaidGet(date);
  const { run: onRaidCreate } = scheduleDetailRepository.useRaidCreate(date!);
  const { run: onRaidUpdate } = scheduleDetailRepository.useRaidUpdate(date!);
  const { run: onRaidDelete } = scheduleDetailRepository.useRaidDelete(date!);

  return {
    raidList,
    onRaidCreate,
    onRaidUpdate,
    onRaidDelete
  }
};
