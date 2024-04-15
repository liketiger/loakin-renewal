import { Backdrop, CircularProgress, TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { FormProvider, useForm } from 'react-hook-form';
import { HookFormSelect } from '../../../../../components/common/HookFormSelect';
import { HookFormTimePicker } from '../../../../../components/common/HookFormTimePicker';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { Td } from '../../../../../components/table/Td';
import { getCommonControlPanelItemList } from '../../../../../constants';
import { RaidView } from '../../../types/view';
import { useRaidSchedulesRowProvider } from '../provider/useProvider';
import { ColorPalette } from '../../../../../utils/colors';
import { useNavigate, useParams } from 'react-router-dom';
import { useScheduleDetailsState } from '../../../usetState';

export { RaidTableRow as ScheduleDetailRaidTableRow };

type Props = {
  item: RaidView;
};

const RaidTableRow = ({ item }: Props) => {
  const { onRaidCreate, onRaidDelete, onRaidUpdate } =
    useRaidSchedulesRowProvider();
  const navigate = useNavigate();
  const date = useScheduleDetailsState((state) => state.date);
  const { raidId } = useParams();
  const methods = useForm({
    values: {
      id: item.id,
      name: item.name ?? '',
      level: item.level ?? '',
      date: item.date,
      time: item.time ? dayjs(item.time) : ''
    }
  });
  const actions = {
    onCreate: onRaidCreate,
    onDelete: () => {
      onRaidDelete(item.id);
      navigate(`/schedule-detail/${date}`);
    },
    onDetail: () => {
      navigate(`/schedule-detail/${date}/${item.id}`);
    }
  };
  const onSubmit = methods.handleSubmit((data) => {
    onRaidUpdate(data);
  });

  return (
    <FormProvider {...methods}>
      <TableRow
        sx={{
          backgroundColor:
            raidId === `${item.id}` ? ColorPalette.grayLight : 'inherit'
        }}
      >
        <Td>
          <ControlPanel itemList={getCommonControlPanelItemList({ actions })} />
        </Td>
        <Td>
          <HookFormTimePicker onSubmit={onSubmit} name='time' />
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
