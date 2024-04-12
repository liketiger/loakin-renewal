import { TableRow } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { HookFormSelect } from '../../../../../components/common/HookFormSelect';
import { HookFormTimePicker } from '../../../../../components/common/HookFormTimePicker';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { Td } from '../../../../../components/table/Td';
import { getCommonControlPanelItemList } from '../../../../../constants';
import { PartyMembersView } from '../../../types/view';
import { useScheduleDetailPartyMembersRowProvider } from '../provider/useProvider';
import { HookFormText } from '../../../../../components/common/HookFormText';
import { useScheduleDetailsState } from '../../../usetState';
import { useShallow } from 'zustand/react/shallow';
import { useDialog } from '../../../../../components/dialog/useDialog';

export { PartyMembersTableRow as ScheduleDetailPartyMembersTableRow };

type Props = {
  item: PartyMembersView;
};

const PartyMembersTableRow = ({ item }: Props) => {
  const { onPartyMembersCreate, onPartyMembersDelete, onPartyMembersUpdate } =
    useScheduleDetailPartyMembersRowProvider();
  const memberCount = useScheduleDetailsState((state) => state.memberCount);
  const methods = useForm({
    values: {
      id: item.id,
      characterName: item.characterName ?? '',
      itemLevel: item.itemLevel ?? '',
      class: item.class ?? '',
      userName: item.userName ?? ''
    }
  });
  const {alert} = useDialog();
  const actions = {
    onCreate: () => {
      if (memberCount === 8) {
        alert({title: '알림', description: '8명이상 등록할 수 없습니다'});
        return;
      }
      onPartyMembersCreate();
    },
    onDelete: () => onPartyMembersDelete(item.id)
  };

  const onSubmit = methods.handleSubmit((data) => {
    onPartyMembersUpdate(data);
  });

  return (
    <FormProvider {...methods}>
      <TableRow>
        <Td>
          <ControlPanel itemList={getCommonControlPanelItemList({ actions })} />
        </Td>
        <Td>
          <HookFormSelect
            name='userName'
            optionList={[
              { label: 'test', value: '1' },
              { label: 'test2', value: '2' }
            ]}
            defaultValue='선택'
            onSubmit={onSubmit}
          />
        </Td>
        <Td sx={{ whiteSpace: 'nowrap' }}>
          <HookFormSelect
            name='characterName'
            optionList={[
              { label: 'test', value: '1' },
              { label: 'test2', value: '2' }
            ]}
            defaultValue='선택'
            onSubmit={onSubmit}
          />
        </Td>
        <Td>
          <HookFormText name='itemLevel' />
        </Td>
        <Td>
          <HookFormText name='class' />
        </Td>
      </TableRow>
    </FormProvider>
  );
};
