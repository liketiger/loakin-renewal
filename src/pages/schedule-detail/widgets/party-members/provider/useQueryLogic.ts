import { useParams } from 'react-router-dom';
import { scheduleDetailRepository } from '../../../repository';

export { useQueryLogic as useScheduleDetailPartyMembersQueryLogic };

const useQueryLogic = () => {
  const { raidId } = useParams();
  const { run: onPartyMembersCreate } =
    scheduleDetailRepository.usePartyMembersCreate(+raidId!);
  const { run: onPartyMembersDeleteAll } =
    scheduleDetailRepository.usePartyMembersDeleteAll(+raidId!);

  return {
    onPartyMembersCreate,
    onPartyMembersDeleteAll
  };
};
