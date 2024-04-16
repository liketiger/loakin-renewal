import { TableRow } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormInput } from '../../../../../components/common/HookFormInput';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { useDialog } from '../../../../../components/dialog/useDialog';
import { Td } from '../../../../../components/table/Td';
import { getCommonControlPanelItemList } from '../../../../../constants';
import { RaidSettingsParams } from '../../../types/parameter';
import { useRaidSettingsRowProvider } from '../provider/useProvider';

interface Props {
  item: RaidSettingsParams;
}

export const RaidSettingsTableRow = ({ item }: Props) => {
  const { onSettingsCreate, onSettingsDelete, onSettingsUpdate } =
    useRaidSettingsRowProvider();
  const methods = useForm({
    values: {
      id: item.id,
      name: item.name ?? '',
      level: item.level ?? ''
    }
  });
  const { confirm } = useDialog();
  const actions = {
    onCreate: onSettingsCreate,
    onDelete: () => {
      confirm({
        title: '삭제 확인',
        description: '삭제하시겠습니까?',
        onConfirm: () => onSettingsDelete(item.id)
      });
    }
  };
  const onSubmit = methods.handleSubmit((data) => onSettingsUpdate(data));
  return (
    <FormProvider {...methods}>
      <TableRow>
        <Td>
          <ControlPanel itemList={getCommonControlPanelItemList({ actions })} />
        </Td>
        <Td>
          <HookFormInput name='name' onBlur={onSubmit} />
        </Td>
        <Td>
          <HookFormInput name='level' onBlur={onSubmit} />
        </Td>
      </TableRow>
    </FormProvider>
  );
};
