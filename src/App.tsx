import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import { SchedulePage } from './pages/schedule';

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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
