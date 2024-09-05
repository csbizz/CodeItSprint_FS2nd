import App from './components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

function Pandamarket() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pandamarket;
