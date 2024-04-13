import { TableRow } from '@mui/material';
import React from 'react';
import { Td } from '../../../../../components/table/Td';
import { HookFormInput } from '../../../../../components/common/HookFormInput';
import { FormProvider, useForm } from 'react-hook-form';
import { RaidSettingsParams } from '../../../types/parameter';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { getCommonControlPanelItemList } from '../../../../../constants';
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
  const actions = {
    onCreate: onSettingsCreate,
    onDelete: () => onSettingsDelete(item.id)
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
