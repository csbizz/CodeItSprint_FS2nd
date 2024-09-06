import '../css/market.css';
import BestProducts from '../components/BestProducts';
import ProductsOnSale from '../components/ProductsOnSale';

function ItemsPage() {
  return (
    <>
      <BestProducts />
      <ProductsOnSale />

      {/* {isLoading && <Modal message="로딩 중입니다." btn={false} />} */}
      {/* {err && <Modal message={err.message} />} */}
    </>
  );
}

export default ItemsPage;
