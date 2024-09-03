import '../css/ProductsOnSale.css';
import { useState } from 'react';
import ProductCard from './ProductCard';
import SortOrderSelect from './SortOrderSelect';
import Pagination from './Pagination';

function ProductsOnSale({
  items,
  totalCount,
  onSearch,
  onSortOrderChange,
  onPageChange
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // onSearch(e.target.value);
  };
  const handleSearch = (e) => {
    if (e.key === 'Enter') onSearch(searchQuery);
  };

  return (
    <section id="productOnSale">
      <div id="productOnSaleTitle">
        <h3>판매 중인 상품</h3>
        <input
          type="text"
          className="search-query"
          placeholder="검색할 상품을 입력해주세요"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearch}
        />
        {/* <div className="search-query">검색할 상품을 입력해주세요</div> */}
        <button className="regist-button">상품 등록하기</button>
        <SortOrderSelect onChange={onSortOrderChange} />
      </div>
      <div id="productOnSaleItems">
        {items.map((item) => {
          return (
            <ProductCard classNames="productOnSale" item={item} key={item.id} />
          );
        })}
      </div>
      <Pagination totalCount={totalCount} onPageChange={onPageChange} />
    </section>
  );
}

export default ProductsOnSale;
