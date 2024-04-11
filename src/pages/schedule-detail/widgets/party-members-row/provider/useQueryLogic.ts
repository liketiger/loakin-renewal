import { useParams } from 'react-router-dom';
import { scheduleDetailRepository } from '../../../repository';
import { useEffect } from 'react';
import { useScheduleDetailsState } from '../../../usetState';

export { useQueryLogic as useScheduleDetailPartyMembersRowQueryLogic };

const useQueryLogic = () => {
  const { raidId } = useParams();
  const setMemberCount = useScheduleDetailsState(
    (state) => state.setMemberCount
  );
  const { data: partyMembersList } =
    scheduleDetailRepository.usePartyMembersGet(+raidId!);
  const { run: onPartyMembersCreate } =
    scheduleDetailRepository.usePartyMembersCreate(+raidId!);
  const { run: onPartyMembersUpdate } =
    scheduleDetailRepository.usePartyMembersUpdate(+raidId!);
  const { run: onPartyMembersDelete } =
    scheduleDetailRepository.usePartyMembersDelete(+raidId!);

  useEffect(() => {
    setMemberCount(partyMembersList?.length ?? 0);
  }, [partyMembersList, setMemberCount]);

  return {
    onPartyMembersCreate,
    onPartyMembersUpdate,
    onPartyMembersDelete,
    partyMembersList
  };
};
