import { useParams } from 'react-router-dom';
import { scheduleDetailRepository } from '../../../repository';

export { useQueryLogic as useScheduleDetailPartyMembersRowQueryLogic };

const useQueryLogic = () => {
  const { raidId } = useParams();
  const { data: partyMembersList } =
    scheduleDetailRepository.usePartyMembersGet(+raidId!);
  const { run: onPartyMembersCreate } =
    scheduleDetailRepository.usePartyMembersCreate(+raidId!);
  const { run: onPartyMembersUpdate } =
    scheduleDetailRepository.usePartyMembersUpdate(+raidId!);
  const { run: onPartyMembersDelete } =
    scheduleDetailRepository.usePartyMembersDelete(+raidId!);

  return {
    onPartyMembersCreate,
    onPartyMembersUpdate,
    onPartyMembersDelete,
    partyMembersList
  };
};
