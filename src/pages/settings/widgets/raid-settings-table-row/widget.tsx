import { Suspense } from 'react';
import TableSpinner from '../../../../components/show-data/TableSpinner';
import { RaidSettingsTableList } from './components/RaidSettingsTableList';
import { RaidSettingsRowProvider } from './provider/provider';
import { SettingsBackdropWrapper } from './components/BackdropWrapper';

export { Widget as RaidSettingsTableRowWidget };

const Widget = () => {
  return (
    <Suspense fallback={<TableSpinner colspan={3} />}>
      <RaidSettingsRowProvider>
        <SettingsBackdropWrapper />
        <RaidSettingsTableList />
      </RaidSettingsRowProvider>
    </Suspense>
  );
};
