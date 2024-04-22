import { TableRow } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormSelect } from '../../../../../components/common/HookFormSelect';
import { HookFormText } from '../../../../../components/common/HookFormText';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { useDialog } from '../../../../../components/dialog/useDialog';
import { Td } from '../../../../../components/table/Td';
import { getCommonControlPanelItemList } from '../../../../../constants';
import { PartyMembersView } from '../../../types/view';
import { useScheduleDetailsState } from '../../../usetState';
import { getCharacterOptionList, getUserOptionList } from '../../../utils';
import { useScheduleDetailPartyMembersRowProvider } from '../provider/useProvider';

export { PartyMembersTableRow as ScheduleDetailPartyMembersTableRow };

type Props = {
  item: PartyMembersView;
};

const PartyMembersTableRow = ({ item }: Props) => {
  const {
    onPartyMembersCreate,
    onPartyMembersDelete,
    onPartyMembersUpdate,
    memberList
  } = useScheduleDetailPartyMembersRowProvider();
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

  const { getValues, setValue } = methods;

  const { alert, confirm } = useDialog();

  const actions = {
    onCreate: () => {
      if (memberCount === 8) {
        alert({ title: '알림', description: '8명이상 등록할 수 없습니다' });
        return;
      }
      onPartyMembersCreate();
    },
    onDelete: () => {
      confirm({
        title: '삭제 확인',
        description: '삭제하시겠습니까?',
        onConfirm: () => onPartyMembersDelete(item.id)
      });
    }
  };

  const onSubmit = methods.handleSubmit((data) => {
    onPartyMembersUpdate(data);
  });

  const onCharacterNameChange = () => {
    const value = memberList?.find(
      (item) => item.CharacterName === getValues('characterName')
    );
    setValue(
      'itemLevel',
      value?.ItemLevel ? Math.floor(+value.ItemLevel.replace(/,/g, '')) : 0
    );
    setValue(
      'class',
      value?.CharacterClassName ? value.CharacterClassName : '-'
    );
    onSubmit();
  };

  return (
    <FormProvider {...methods}>
      <TableRow>
        <Td>
          <ControlPanel itemList={getCommonControlPanelItemList({ actions })} />
        </Td>
        <Td>
          <HookFormSelect
            name='userName'
            optionList={getUserOptionList(memberList ?? [])}
            defaultValue='선택'
            onSubmit={onSubmit}
          />
        </Td>
        <Td sx={{ whiteSpace: 'nowrap' }}>
          <HookFormSelect
            name='characterName'
            optionList={getCharacterOptionList(
              memberList ?? [],
              getValues('userName')
            )}
            defaultValue='선택'
            onSubmit={onCharacterNameChange}
            disabled={getValues('userName') === ''}
          />
        </Td>
        <Td>
          <HookFormText name='itemLevel' />
        </Td>
        <Td sx={{ whiteSpace: 'nowrap' }}>
          <HookFormText name='class' />
        </Td>
      </TableRow>
    </FormProvider>
  );
};
