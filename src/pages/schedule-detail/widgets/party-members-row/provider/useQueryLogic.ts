import { useParams } from 'react-router-dom';
import { scheduleDetailRepository } from '../../../repository';
import { useEffect } from 'react';
import { useScheduleDetailsState } from '../../../usetState';
import { memberRepository } from '../../../../member/repository';

export { useQueryLogic as useScheduleDetailPartyMembersRowQueryLogic };

const useQueryLogic = () => {
  const { raidId } = useParams();
  const setMemberCount = useScheduleDetailsState(
    (state) => state.setMemberCount
  );
  const { data: partyMembersList } =
    scheduleDetailRepository.usePartyMembersGet(+raidId!);
  const { run: onPartyMembersCreate, isPending: isPartyMembersCreatePending } =
    scheduleDetailRepository.usePartyMembersCreate(+raidId!);
  const { run: onPartyMembersUpdate } =
    scheduleDetailRepository.usePartyMembersUpdate(+raidId!);
  const { run: onPartyMembersDelete, isPending: isPartyMembersDeletePending } =
    scheduleDetailRepository.usePartyMembersDelete(+raidId!);
    const { data: memberList } = memberRepository.useMemberListGet('');
 
  useEffect(() => {
    setMemberCount(partyMembersList?.length ?? 0);
  }, [partyMembersList, setMemberCount]);

  return {
    onPartyMembersCreate,
    onPartyMembersUpdate,
    onPartyMembersDelete,
    partyMembersList,
    isPartyMembersCreatePending,
    isPartyMembersDeletePending,
    memberList
  };
};
