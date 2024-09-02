import '../css/market.css';
import { useCallback, useEffect, useState } from 'react';
import BestProducts from './BestProducts';
import Header from './Header';
import ProductsOnSale from './ProductsOnSale';
import Footer from './Footer';
import { getProducts } from '../api';
import useAsync from '../hooks/useAsync';

const BEST_ITEM_PAGE_SIZE = [4, 2, 1];
const ITEM_PAGE_SIZE = [10, 6, 4];
const SORT_ORDER = Object.freeze({
  RECENT: 'recent',
  FAVORITE: 'favorite'
});

function App() {
  const [offset, setOffset] = useState(0);
  const [bestItems, setBestItems] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, err, getProductsAsync] = useAsync(getProducts);

  const handleLoadBestItem = useCallback(
    async (params) => {
      const data = await getProductsAsync(params);
      if (!data) return;

      setBestItems(data.list);
    },
    [getProductsAsync]
  );

  const handleLoadItem = useCallback(
    async (params) => {
      const data = await getProductsAsync(params);
      if (!data) return;

      setItems(data.list);
      setOffset(params.page * ITEM_PAGE_SIZE[0]);
    },
    [getProductsAsync]
  );

  useEffect(() => {
    handleLoadBestItem({
      page: 1,
      pageSize: BEST_ITEM_PAGE_SIZE[0],
      orderBy: SORT_ORDER.FAVORITE
    });
    handleLoadItem({
      page: 1,
      pageSize: ITEM_PAGE_SIZE[0],
      orderBy: SORT_ORDER.RECENT
    });
  }, [handleLoadBestItem, handleLoadItem]);

  return (
    <>
      <Header />
      <main>
        <BestProducts items={bestItems} />
        <ProductsOnSale items={items} />
      </main>
      <Footer />
    </>
  );
}

export default App;
