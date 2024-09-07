import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import GlobalContextProvider from './GlobalContextProvider';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
