import FoodList from './FoodList';
import { useCallback, useEffect, useState } from 'react';
import { createFood, deleteFood, getFoods, patchFood } from '../api';
import FoodForm from './FoodForm';
import useAsync from '../hooks/useAsync';

const SORT_ORDER = Object.freeze({
  CREATEDAT: 'createdAt',
  CALORIE: 'calorie'
});

const PAGE_SIZE = 10;

function App() {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.CREATEDAT);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, err, getFoodsAsync] = useAsync(getFoods);
  const [search, setSearch] = useState('');

  const sortedItems = items.sort((a, b) => b[sortOrder] - a[sortOrder]);

  const handleNewestClick = () => setSortOrder(SORT_ORDER.CREATEDAT);
  const handleCalorieClick = () => setSortOrder(SORT_ORDER.CALORIE);
  const handleDelete = async (id) => {
    const res = await deleteFood(id);
    if (!res) return;

    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleLoad = useCallback(
    async (params) => {
      const data = await getFoodsAsync(params);
      if (!data) return;

      const { foods, paging } = data;

      setItems(foods);
      setNextCursor(paging.nextCursor);
    },
    [getFoodsAsync]
  );
  const handleLoadMore = () => {
    handleLoad({
      order: sortOrder,
      limit: PAGE_SIZE,
      cursor: nextCursor,
      search
    });
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value);
  };
  const handleCreateSuccess = (food) => setItems((items) => [food, ...items]);
  const handleUpdateSuccess = (food) =>
    setItems((items) => {
      const idx = items.findIndex((item) => item.id === food.id);

      return [...items.slice(0, idx), food, ...items.slice(idx + 1)];
    });

  useEffect(() => {
    handleLoad({ order: sortOrder, limit: PAGE_SIZE, search });
  }, [sortOrder, search, handleLoad]);

  return (
    <div>
      <FoodForm onSubmit={createFood} onSubmitSuccess={handleCreateSuccess} />
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" name="search" />
        <button type="submit">검색</button>
      </form>
      <FoodList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={patchFood}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {nextCursor && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {err?.message && <span>{err.message}</span>}
    </div>
  );
}

export default App;
