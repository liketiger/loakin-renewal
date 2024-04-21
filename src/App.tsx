import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import { SchedulePage } from './pages/schedule';
import { ScheduleDetailPage } from './pages/schedule-detail';
import { Dialog } from './components/dialog/Dialog';
import { ScheduleDetailPartyMembersWidget } from './pages/schedule-detail/widgets/party-members/widget';
import { useDialog } from './components/dialog/useDialog';
import { SettingsPage } from './pages/settings';
import { MemberPage } from './pages/member';
import { ErrorBoundary } from 'react-error-boundary';
import { FallBackUI } from './components/show-data/FallBackUI';

const CustomQueryClientProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { alert } = useDialog();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300 * 1000,
        throwOnError: true
      },
      mutations: {
        onError: async (error) => {
          alert({
            description: '연결에 실패했습니다.',
            title: '알림'
          });
          console.log(error);
        }
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

function App() {
  return (
    <CustomQueryClientProvider>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={FallBackUI}>
            <BrowserRouter>
              <AppBar />
              <Routes>
                <Route path='/' element={<SchedulePage />} />
                <Route path='/schedule-detail'>
                  <Route path=':date' element={<ScheduleDetailPage />}>
                    <Route
                      path=':raidId'
                      element={<ScheduleDetailPartyMembersWidget />}
                    />
                  </Route>
                </Route>
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/member' element={<MemberPage />} />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <Dialog />
    </CustomQueryClientProvider>
  );
}

export default App;
