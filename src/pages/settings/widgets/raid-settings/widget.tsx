import React from 'react';
import { settingsLayout } from '../../components/layout';
import { RaidSettingsTable } from './components/RaidSettingsTable';

export { Widget as RaidSettingsWidget };

const Widget = () => {
  const { Layout, Header } = settingsLayout;

  return (
    <Layout>
      <Header title='레이드 설정'>hi</Header>
      <RaidSettingsTable />
    </Layout>
  );
};
