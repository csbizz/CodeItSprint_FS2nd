import style from './css/ItemsPage.module.css';
import BestProducts from '../components/BestProducts';
import ProductsOnSale from '../components/ProductsOnSale';
import { useError } from '../contexts/ErrorContext';
import Modal from '../components/Modal';
import { usePending } from '../contexts/PendingContext';

function ItemsPage() {
  const isLoading = usePending();
  const err = useError();

  return (
    <main id={`${style.itemsPage}`}>
      <div id={`${style.bestProductWrapper}`}>
        <BestProducts />
      </div>
      <ProductsOnSale />

      {/* {isLoading && <Modal message="로딩 중입니다." noButton />} */}
      {err && <Modal message={err.message} />}
    </main>
  );
}

export default ItemsPage;
