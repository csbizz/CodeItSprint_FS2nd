import { Outlet } from 'react-router-dom';
import { ViewportProvider } from '../contexts/ViewportContext';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <ViewportProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ViewportProvider>
  );
}

export default App;
