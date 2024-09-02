import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <p>©codeit - 2024</p>
      </div>
      <div className="footer-link">
        <a href="../privacy/">Privacy Policy</a>
        <a href="../faq/">FAQ</a>
      </div>
      <div className="sns-link">
        <a href="https://www.facebook.com/">
          <img src="src/Image/ic_facebook.png" alt="facebook" />
        </a>
        <a href="https://twitter.com/home">
          <img src="src/Image/ic_twitter.png" alt="twitter" />
        </a>
        <a href="https://www.youtube.com/">
          <img src="src/Image/ic_youtube.png" alt="youtube" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="src/Image/ic_instagram.png" alt="instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
