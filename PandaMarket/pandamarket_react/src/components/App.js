import '../css/market.css';
import { useCallback, useEffect, useState } from 'react';
import BestProducts from './BestProducts';
import Header from './Header';
import ProductsOnSale from './ProductsOnSale';
import Footer from './Footer';
import { getProducts } from '../api';
import useAsync from '../hooks/useAsync';
import { SORT_ORDER } from './SortOrderSelect';

const BEST_ITEM_PAGE_SIZE = [4, 2, 1];
export const ITEM_PAGE_SIZE = [10, 6, 4];

function App() {
  const [bestItems, setBestItems] = useState([]);
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.RECENT);
  const [searchQuery, setSearchQuery] = useState('');
  const [now, setNow] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
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
      setTotalCount(data.totalCount);
      setNow(params.page);
    },
    [getProductsAsync]
  );
  const handleSearch = (query) => setSearchQuery(query);
  const handleSortOrderChange = (order) => setSortOrder(order);
  const handlePageChange = useCallback((p) => setNow(p), []);

  useEffect(() => {
    handleLoadBestItem({
      page: 1,
      pageSize: BEST_ITEM_PAGE_SIZE[0],
      orderBy: SORT_ORDER.FAVORITE
    });
    handleLoadItem({
      page: now,
      pageSize: ITEM_PAGE_SIZE[0],
      orderBy: sortOrder,
      keyword: searchQuery
    });
  }, [now, sortOrder, searchQuery, handleLoadBestItem, handleLoadItem]);

  return (
    <>
      <Header />
      <main>
        <BestProducts items={bestItems} />
        <ProductsOnSale
          items={items}
          totalCount={totalCount}
          onSearch={handleSearch}
          onSortOrderChange={handleSortOrderChange}
          onPageChange={handlePageChange}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
