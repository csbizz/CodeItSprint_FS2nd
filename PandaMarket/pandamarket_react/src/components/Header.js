import { Link } from 'react-router-dom';
import style from '../css/Header.module.css';
import logoImg from '../Image/logo.png';

function Header() {
  return (
    <header>
      <Link to="/">
        <img id={`${style.pandaLogo}`} src={logoImg} alt="판다마켓 로고" />
      </Link>
      <nav id={`${style.topNav}`}>
        <Link to="/">자유게시판</Link>
        <Link to="/items">중고마켓</Link>
      </nav>
      <Link to="/login/" id={`${style.loginButton}`} className="button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
