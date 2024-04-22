import { memberRepository } from '../../../repository';

export { useQueryLogic as useMemberSearchQueryLogic };

const useQueryLogic = () => {
  const { run: updateMemberList } = memberRepository.useMemberListUpdate();

  return {
    updateMemberList
  };
};
