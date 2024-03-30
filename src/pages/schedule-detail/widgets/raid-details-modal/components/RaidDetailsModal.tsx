import { Modal, TableBody, TableRow } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useShallow } from 'zustand/react/shallow';
import { HookFormTimePicker } from '../../../../../components/common/HookFormTimePicker';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Td } from '../../../../../components/table/Td';
import { Th } from '../../../../../components/table/Th';
import { useScheduleDetailsState } from '../../../usetState';
import { getRaidModalFormValues } from '../../../utils';
import { useRaidScheduleProvider } from '../../raid-schedules/provider/useProvider';
import { useRaidDetailsModalProvider } from '../provider/useProvider';
import { HookFormSelect } from '../../../../../components/common/HookFormSelect';

export const RaidDetailsModal = () => {
  const { raidDetails } = useRaidDetailsModalProvider();
  const { isModalOpen, setIsModalOpen, isCreate } = useScheduleDetailsState(
    useShallow((state) => ({
      isModalOpen: state.isModalOpen,
      setIsModalOpen: state.setIsModalOpen,
      isCreate: state.isCreate
    }))
  );
  const methods = useForm({
    values: getRaidModalFormValues(isCreate, raidDetails)
  });

  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <FormProvider {...methods}>
        <CommonTableContainer>
          <CommonTable>
            <TableBody>
              <TableRow>
                <Th>시간</Th>
                <Td>
                  <HookFormTimePicker
                    onSubmit={() => console.log(methods.watch('time'))}
                    name='time'
                  />
                </Td>
              </TableRow>
              <TableRow>
                <Th>레이드</Th>
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
              </TableRow>
              <TableRow>
                <Th>난이도</Th>
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
            </TableBody>
          </CommonTable>
        </CommonTableContainer>
      </FormProvider>
    </Modal>
  );
};
