import '../css/market.css';
import BestProducts from './BestProducts';
import Header from './Header';
import ProductsOnSale from './ProductsOnSale';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <BestProducts />
        <ProductsOnSale />
      </main>
      <Footer />
    </>
  );
}

export default App;
