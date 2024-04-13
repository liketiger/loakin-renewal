import React from 'react';
import { settingsLayout } from '../../components/layout';
import { RaidSettingsTable } from './components/RaidSettingsTable';
import { RaidSettingsProvider } from './provider/provider';
import { RaidSettingsSearchInput } from './components/RaidSettingsSearchInput';

export { Widget as RaidSettingsWidget };

const Widget = () => {
  const { Layout, Header } = settingsLayout;

  return (
    <RaidSettingsProvider>
      <Layout>
        <Header title='레이드 설정'>
          <RaidSettingsSearchInput />
        </Header>
        <RaidSettingsTable />
      </Layout>
    </RaidSettingsProvider>
  );
};
