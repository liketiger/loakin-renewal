import { memberRepository } from '../../../repository';

export { useQueryLogic as useMemberTableQueryLogic };

const useQueryLogic = () => {
  const { data: memberList } = memberRepository.useMemberListGet();
  
  const { run: deleteMemberList } = memberRepository.useMemberListDelete();
  return {
    memberList,
    deleteMemberList
  };
};
