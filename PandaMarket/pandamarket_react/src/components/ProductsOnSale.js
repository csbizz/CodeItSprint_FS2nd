import ProductCard from './ProductCard';
import '../css/ProductsOnSale.css';

function ProductsOnSale() {
  return (
    <section id="productOnSale">
      <div id="productOnSaleTitle">
        <h3>판매 중인 상품</h3>
        <div className="search-query">검색할 상품을 입력해주세요</div>
        <button className="regist-button">상품 등록하기</button>
        <div className="sort-order">최신순</div>
      </div>
      <div id="productOnSaleItems">
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
        <ProductCard classNames="productOnSale" />
      </div>
      <div id="productOnSalePagination">
        <div className="pagination productOnSale">
          <button id="pageBefore">&lt;</button>
          <button className="now">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button id="pageAfter">&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default ProductsOnSale;
