import "./Layout.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="footer-social-links">
          <h5>Social: </h5>
          <ul>
            <li>
              <a href="https://www.facebook.com/" rel="noreferrer" target='_blank'>
                <i className="bi bi-facebook"></i>Facebook
              </a>
            </li>
            <li>
              <a href="https://www.github.com/" rel="noreferrer" target='_blank'>
                <i className="bi bi-github"></i>Github
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" rel="noreferrer" target='_blank'>
                <i className="bi bi-twitter"></i>Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-useful-links">
          <h5>Useful links: </h5>
          <ul>
            <li>
              <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
                React
              </a>
            </li>
            <li>
              <a
                href="https://www.syncfusion.com/"
                rel="noreferrer"
                target="_blank"
              >
                Syncfusion
              </a>
            </li>
            <li>
              <a
                href="https://icons.getbootstrap.com/"
                rel="noreferrer"
                target="_blank"
              >
                Bootstrap icons
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyrights">
          <p>
            Copyrights &copy; <span>Dario Mitev</span>,{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
