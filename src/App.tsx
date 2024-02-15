import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import { SchedulePage } from './pages/schedule';
import { ScheduleDetailPage } from './pages/schedule-detail';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300 * 1000
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SchedulePage />} />
          <Route path='/schedule-detail' element={<ScheduleDetailPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
