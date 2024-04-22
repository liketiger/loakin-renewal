import { membersLayout } from './components/layout';
import { MemberSearchWidget } from './widgets/search/widget';
import { MemberTable } from './widgets/table/components/MemberTable';

export { Index as MemberPage };

const Index = () => {  
  const { Layout, Header } = membersLayout;
  return (
    <Layout>
      <Header title='멤버 설정'>
        <MemberSearchWidget />
      </Header>
      <MemberTable />
    </Layout>
  );
};
