import { scheduleRepository } from '../../../repository';

export { useQueryLogic as useScheduleQueryLogic };

const useQueryLogic = () => {
  const { data: raids } = scheduleRepository.useRaidsGet();

  return {
    raids
  };
};
