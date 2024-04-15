import { useParams } from 'react-router-dom';
import { scheduleDetailRepository } from '../../../repository';

export { useQueryLogic as useScheduleDetailPartyMembersQueryLogic };

const useQueryLogic = () => {
  const { raidId } = useParams();
  const { run: onPartyMembersCreate, isPending: isPartyMembersCreatePending } =
    scheduleDetailRepository.usePartyMembersCreate(+raidId!);
  const {
    run: onPartyMembersDeleteAll,
    isPending: isPartyMembersDeleteAllPending
  } = scheduleDetailRepository.usePartyMembersDeleteAll(+raidId!);

  return {
    onPartyMembersCreate,
    onPartyMembersDeleteAll,
    isPartyMembersCreatePending,
    isPartyMembersDeleteAllPending
  };
};
