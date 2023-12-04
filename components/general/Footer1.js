import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.logo}>
          <img src="your-logo.png" alt="Your logo" />
        </div>
        <div className={classes.links}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={classes.socialMedia}>
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
