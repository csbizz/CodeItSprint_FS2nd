import './css/import.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import ItemsPage from './pages/ItemsPage';
import LandingPage from './pages/LandingPage';

function Pandamarket() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="items" element={<ItemsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pandamarket;
