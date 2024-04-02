import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import { SchedulePage } from './pages/schedule';
import { ScheduleDetailPage } from './pages/schedule-detail';
import { Dialog } from './components/dialog/Dialog';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300 * 1000,
    },
    mutations: {
      onError: async (error: unknown) => {
        console.log(error);
      },
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/' element={<SchedulePage />} />
          <Route path='/schedule-detail'>
            <Route path=':date' element={<ScheduleDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Dialog />
    </QueryClientProvider>
  );
}

export default App;
