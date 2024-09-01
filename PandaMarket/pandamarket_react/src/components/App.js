import BestProducts from './BestProducts';
import Header from './Header';
import ProductsOnSale from './ProductsOnSale';
import '../css/market.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <BestProducts />
        <ProductsOnSale />
      </main>
    </>
  );
}

export default App;
