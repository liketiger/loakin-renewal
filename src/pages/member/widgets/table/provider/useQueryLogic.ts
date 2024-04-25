import { memberRepository } from '../../../repository';
import { useMemberState } from '../../../useState';

export { useQueryLogic as useMemberTableQueryLogic };

const useQueryLogic = () => {
  const keyword = useMemberState((state) => state.keyword);
  const { data: memberList } = memberRepository.useMemberListGet(keyword);
  const { run: deleteMemberList } = memberRepository.useMemberListDelete();

  return {
    memberList,
    deleteMemberList
  };
};
