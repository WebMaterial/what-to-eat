import feedbackIcon from '../assets/common/feedback-icon.png';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">

      <div className="feedback-icon">
        <a href="#">
          <img src={feedbackIcon} alt="フィードバック" />
        </a>
      </div>

      <div className="footer__inner">
        <div className="footer__brand">飯どこ！</div>
        <nav className="footer__nav" aria-label="フッターメニュー">
          <ul className="footer__links">
            <li><a href="#">メニュー</a></li>
            <li><a href="#">利用規約</a></li>
            <li><a href="#">プライバシーポリシー</a></li>
            <li><a href="#">お問い合わせ</a></li>
            <li><a href="#">免責事項</a></li>
            <li><a href="#">運営者情報</a></li>
            <li><a href="#">ヘルプ</a></li>
            <li><a href="#">フィードバック</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer__legal">
        <small>© {new Date().getFullYear()} 飯どこ！</small>
      </div>
    </footer>
  );
}

export default Footer;