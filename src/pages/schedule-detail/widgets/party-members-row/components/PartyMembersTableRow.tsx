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

export { PartyMembersTableRow as ScheduleDetailPartyMembersTableRow };

type Props = {
  item: PartyMembersView;
};

const PartyMembersTableRow = ({ item }: Props) => {
  const navigate = useNavigate();
  const { onPartyMembersCreate, onPartyMembersDelete, onPartyMembersUpdate } =
    useScheduleDetailPartyMembersRowProvider();
  const methods = useForm({
    values: {
      id: item.id,
      characterName: item.characterName ?? '',
      itemLevel: item.itemLevel ?? '',
      class: item.class ?? '',
      userName: item.userName ?? ''
    }
  });
  const actions = {
    onCreate: onPartyMembersCreate,
    onDelete: () => onPartyMembersDelete(item.id),
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
        </Td>
        <Td>
          <HookFormSelect
            name='name'
            optionList={[
              { label: 'test', value: '1' },
              { label: 'test2', value: '2' }
            ]}
            defaultValue='선택'
            onSubmit={onSubmit}
          />
        </Td>
        <Td>
          <HookFormSelect
            name='level'
            optionList={[
              { label: 'test', value: '1' },
              { label: 'test2', value: '2' }
            ]}
            defaultValue='선택'
            onSubmit={onSubmit}
          />
        </Td>
      </TableRow>
    </FormProvider>
  );
};
