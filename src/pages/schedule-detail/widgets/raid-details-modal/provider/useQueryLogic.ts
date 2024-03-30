import { useShallow } from 'zustand/react/shallow';
import { scheduleDetailRepository } from '../../../repository';
import { useScheduleDetailsState } from '../../../usetState';

export { useQueryLogic as useRaidDetailsModalQueryLogic };

const useQueryLogic = () => {
  const { date, modalId, } = useScheduleDetailsState(
    useShallow((state) => ({
        date: state.date,
      modalId: state.modalId,
    }))
  );
  const { data: raidDetails } = scheduleDetailRepository.useRaidDetailsGet(modalId!);
  const { run: onUpdate } = scheduleDetailRepository.useRaidUpdate(date!);

  return {
    raidDetails,
    onUpdate
  };
};
