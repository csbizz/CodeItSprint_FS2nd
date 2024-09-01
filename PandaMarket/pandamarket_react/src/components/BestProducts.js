import ProductCard from './ProductCard';
import '../css/BestProducts.css';

function BestProducts() {
  return (
    <section id="bestProducts">
      <div id="bestProductsTitle">
        <h3>베스트 상품</h3>
      </div>
      <div id="bestProductsItems">
        <ProductCard classNames="bestItem" />
        <ProductCard classNames="bestItem" />
        <ProductCard classNames="bestItem" />
        <ProductCard classNames="bestItem" />
      </div>
    </section>
  );
}

export default BestProducts;
