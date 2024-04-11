import { NoResult } from "../../../../../components/show-data/NoResult";
import { PartyMembersView } from "../../../types/view";
import { useScheduleDetailPartyMembersRowProvider } from "../provider/useProvider";
import { ScheduleDetailPartyMembersTableRow } from "./PartyMembersTableRow";


export { PartyMembersTableList as ScheduleDetailPartyMembersTableList };

const PartyMembersTableList = () => {
  const {partyMembersList} = useScheduleDetailPartyMembersRowProvider();
    const isListEmpty = partyMembersList?.length === 0;
  return (
    <>
      {isListEmpty && <NoResult colsapn={5} />}
      {!isListEmpty &&
        partyMembersList?.map((item: PartyMembersView) => (
          <ScheduleDetailPartyMembersTableRow key={item.id} item={item} len={partyMembersList.length} />
        ))}
    </>
  );
};

