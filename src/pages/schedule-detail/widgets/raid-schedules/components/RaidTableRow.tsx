import { Checkbox, TableRow } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormTimePicker } from '../../../../../components/common/HookFormTimePicker';
import { Td } from '../../../../../components/table/Td';
import { RaidView } from '../../../types/view';

export { RaidTableRow as ScheduleDetailRaidTableRow };

type Props = {
  item: RaidView;
};

const RaidTableRow = ({ item }: Props) => {
  const methods = useForm<RaidView>({
    values: {
      id: item.id,
      created_at: item.created_at,
      name: item.name,
      level: item.level,
      date: item.date,
      time: item.time
    }
  });

  return (
    <FormProvider {...methods}>
      <TableRow>
        <Td>
          <Checkbox />
        </Td>
        <Td>
          <HookFormTimePicker name='time' />
        </Td>
        <Td></Td>
        <Td></Td>
      </TableRow>
    </FormProvider>
  );
};
