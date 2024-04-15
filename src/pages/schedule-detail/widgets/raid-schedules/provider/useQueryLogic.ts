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

  
  const { run: onRaidCreate, isPending: isRaidCreatePending } = scheduleDetailRepository.useRaidCreate(date!);
  const { run: onRaidDeleteAll, isPending: isRaidDeleteAllPending } = scheduleDetailRepository.useAllRaidDelete(date!);

  useEffect(() => {
    if (!dateParams) navigate('/');
    setDate(dateParams!);
  }, [dateParams, setDate, navigate]);

  return {
    onRaidCreate,
    onRaidDeleteAll,
    isRaidCreatePending,
    isRaidDeleteAllPending
  };
};
