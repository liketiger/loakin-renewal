import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { scheduleDetailRepository } from '../../../repository';
import { useScheduleDetailsState } from '../../../usetState';

export { useQueryLogic as useScheduleDetailQueryLogic };
const useQueryLogic = () => {
  const { date, setDate } = useScheduleDetailsState(
    useShallow((state) => ({ date: state.date, setDate: state.setDate }))
  );
  const { date: dateParams } = useParams();
  const navigate = useNavigate();

  const { data: raidList } = scheduleDetailRepository.useRaidGet(date);
  const { run: onRaidCreate } = scheduleDetailRepository.useRaidCreate(date!);
  const { run: onRaidUpdate } = scheduleDetailRepository.useRaidUpdate(date!);
  const { run: onRaidDelete } = scheduleDetailRepository.useRaidDelete(date!);
  const { run: onRaidDeleteAll } = scheduleDetailRepository.useAllRaidDelete(date!);

  useEffect(() => {
    if (!dateParams) navigate('/');
    setDate(dateParams!);
  });

  return {
    raidList,
    onRaidCreate,
    onRaidUpdate,
    onRaidDelete,
    onRaidDeleteAll
  };
};
