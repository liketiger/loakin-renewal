import { Suspense } from 'react';
import TableSpinner from '../../../../components/show-data/TableSpinner';
import { RaidSettingsTableList } from './components/RaidSettingsTableList';
import { RaidSettingsRowProvider } from './provider/provider';

export { Widget as RaidSettingsTableRowWidget };

const Widget = () => {
  return (
    <Suspense fallback={<TableSpinner colspan={3} />}>
      <RaidSettingsRowProvider>
        <RaidSettingsTableList />
      </RaidSettingsRowProvider>
    </Suspense>
  );
};
