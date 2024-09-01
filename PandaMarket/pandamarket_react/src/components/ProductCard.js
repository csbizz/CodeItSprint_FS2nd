import '../css/ProductCard.css';

function ProductCard({ classNames }) {
  const cn = `card ` + classNames;

  return (
    <div className={cn}>
      <div className="product-img"></div>
      <div className="product-info">
        <h5 className="title">아이패드 미니 팝니다</h5>
        <p className="price">500,000원</p>
        <p className="like">❤️ 240</p>
      </div>
    </div>
  );
}

export default ProductCard;
