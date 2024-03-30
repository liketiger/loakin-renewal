import { Checkbox, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormSelect } from '../../../../../components/common/HookFormSelect';
import { HookFormTimePicker } from '../../../../../components/common/HookFormTimePicker';
import { Td } from '../../../../../components/table/Td';
import { RaidView } from '../../../types/view';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { getCommonControlPanelItemList } from '../../../../../constants';
import { useRaidScheduleProvider } from '../provider/useProvider';

export { RaidTableRow as ScheduleDetailRaidTableRow };

type Props = {
  item: RaidView;
};

const RaidTableRow = ({ item }: Props) => {
  const { onRaidCreate, onRaidDelete } = useRaidScheduleProvider();
  const methods = useForm({
    values: {
      id: item.id,
      created_at: item.created_at,
      name: item.name ?? '',
      level: item.level ?? '',
      date: item.date,
      time: dayjs(item.time, 'HH:mm:ss')
    }
  });
  const actions = {
    onCreate: onRaidCreate,
    onRaidDelete: () => onRaidDelete(item.id)
  };

  return (
    <FormProvider {...methods}>
      <TableRow>
        <Td>
          <ControlPanel itemList={getCommonControlPanelItemList({ actions })} />
        </Td>
        <Td>
          <HookFormTimePicker
            onSubmit={() => console.log(methods.watch('time'))}
            name='time'
          />
        </Td>
        <Td>
          <HookFormSelect
            name='name'
            optionList={[
              { label: 'test', value: '1' },
              { label: 'test2', value: '2' }
            ]}
            defaultValue='선택'
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
          />
        </Td>
      </TableRow>
    </FormProvider>
  );
};
