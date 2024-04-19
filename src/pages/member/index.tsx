import React from 'react';
import { membersLayout } from './components/layout';
import { MemberSearchWidget } from './widgets/search/widget';
import { MemberTableWidget } from './widgets/table/widget';

export { Index as MemberPage };

const Index = () => {
  const { Layout, Header } = membersLayout;
  return (
    <Layout>
      <Header title='멤버 설정'>
        <MemberSearchWidget />
      </Header>
      <MemberTableWidget />
    </Layout>
  );
};
