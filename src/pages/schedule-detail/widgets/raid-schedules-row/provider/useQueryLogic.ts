import { scheduleDetailRepository } from '../../../repository';
import { useScheduleDetailsState } from '../../../usetState';

export { useQueryLogic as useRaidSchedulesRowQueryLogic };

const useQueryLogic = () => {
  const date = useScheduleDetailsState((state) => state.date);
  const { data: raidList } = scheduleDetailRepository.useRaidGet(date);
  const { run: onRaidCreate, isPending: isRaidCreatePending } =
    scheduleDetailRepository.useRaidCreate(date!);
  const { run: onRaidUpdate } = scheduleDetailRepository.useRaidUpdate();
  const { run: onRaidDelete, isPending: isRaidDeletePending } =
    scheduleDetailRepository.useRaidDelete();

  return {
    raidList,
    onRaidCreate,
    onRaidUpdate,
    onRaidDelete,
    isRaidCreatePending,
    isRaidDeletePending
  };
};
