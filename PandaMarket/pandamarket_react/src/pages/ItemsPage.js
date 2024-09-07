import '../css/market.css';
import BestProducts from '../components/BestProducts';
import ProductsOnSale from '../components/ProductsOnSale';
import { useError } from '../contexts/ErrorContext';
import Modal from '../components/Modal';
import { usePending } from '../contexts/PendingContext';

function ItemsPage() {
  const isLoading = usePending();
  const err = useError();

  return (
    <>
      <BestProducts />
      <ProductsOnSale />

      {/* {isLoading && <Modal message="로딩 중입니다." btn={false} />} */}
      {err && <Modal message={err.message} />}
    </>
  );
}

export default ItemsPage;
