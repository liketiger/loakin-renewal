import { scheduleDetailRepository } from '../../../repository';
import { useScheduleDetailsState } from '../../../usetState';

export { useQueryLogic as useScheduleDetailQueryLogic };
const useQueryLogic = () => {
  const date = useScheduleDetailsState((state) => state.date);
  const { data: raidDetails } = scheduleDetailRepository.useRaidGet(date);
  const { run: onRaidCreate } = scheduleDetailRepository.useRaidCreate(date!);
  const { run: onRaidUpdate } = scheduleDetailRepository.useRaidUpdate(date!);
  const { run: onRaidDelete } = scheduleDetailRepository.useRaidDelete(date!);

  return {
    raidDetails,
    onRaidCreate,
    onRaidUpdate,
    onRaidDelete
  };
};
