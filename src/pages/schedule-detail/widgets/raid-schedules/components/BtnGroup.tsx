import { Btn } from '../../../../../components/common/Btn';
import { useScheduleDetailsState } from '../../../usetState';
import { useRaidScheduleProvider } from '../provider/useProvider';

export { BtnGroup as ScheduleDetailBtnGroup };

const BtnGroup = () => {
  const { onRaidCreate, onRaidDelete } = useRaidScheduleProvider();
  const setIsModalOpen =useScheduleDetailsState(state => state.setIsModalOpen)
  const onCreate = () => {
    setIsModalOpen(true);
  };
  const onUpdate = () => {
    onRaidDelete([]);
  };
  return (
    <>
      <Btn onClick={onUpdate}>선택삭제</Btn>
      <Btn onClick={onCreate}>추가</Btn>
    </>
  );
};
