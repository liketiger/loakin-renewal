import { TableRow } from '@mui/material';
import dayjs from 'dayjs';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { HookFormSelect } from '../../../../../components/common/HookFormSelect';
import { HookFormTimePicker } from '../../../../../components/common/HookFormTimePicker';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { useDialog } from '../../../../../components/dialog/useDialog';
import { Td } from '../../../../../components/table/Td';
import { getCommonControlPanelItemList } from '../../../../../constants';
import { convertToOptionList } from '../../../../../utils';
import { ColorPalette } from '../../../../../utils/colors';
import { RaidView } from '../../../types/view';
import { useScheduleDetailsState } from '../../../usetState';
import { useRaidSchedulesRowProvider } from '../provider/useProvider';
import { levelOptionList } from '../../../utils/constants';

export { RaidTableRow as ScheduleDetailRaidTableRow };

type Props = {
  item: RaidView;
};

const RaidTableRow = ({ item }: Props) => {
  const {
    onRaidCreate,
    onRaidDelete,
    onRaidUpdate,
    raidOptionList,
  } = useRaidSchedulesRowProvider();
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

  const { confirm } = useDialog();

  const actions = {
    onCreate: onRaidCreate,
    onDelete: () => {
      confirm({
        title: '삭제 확인',
        description: '삭제하시겠습니까?',
        onConfirm: () => {
          onRaidDelete(item.id);
          navigate(`/schedule-detail/${date}`);
        }
      });
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
            optionList={convertToOptionList(raidOptionList ?? [])}
            defaultValue='선택'
            onSubmit={onSubmit}
          />
        </Td>
        <Td>
          <HookFormSelect
            name='level'
            optionList={levelOptionList}
            defaultValue='선택'
            onSubmit={onSubmit}
          />
        </Td>
      </TableRow>
    </FormProvider>
  );
};
