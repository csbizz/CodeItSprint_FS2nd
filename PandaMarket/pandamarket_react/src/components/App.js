import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import GlobalContextProvider from './GlobalContextProvider';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
