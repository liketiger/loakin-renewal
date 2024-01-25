import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Schedule from './pages/Schedule';

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
          <Route path='/' element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
