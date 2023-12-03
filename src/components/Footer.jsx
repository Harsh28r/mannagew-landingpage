import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-grid-1">
        <div className="footer-brand">
          <div className="logo">
            <img
              src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
              alt="Logo"
              style={{ display: "block", width: "100", height: "100" }}
              className="image"
            />
            <h3>ManageWise</h3>
          </div>
          {/* Nav */}
          <div className="nav">
            <nav className="navbar navbar-expand-lg ">
              <ul className="navbar footer-nav">
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Grid-2 */}

      <div className="footer-grid-1">
        <div className="footer-brand">
          <div className="logo">
            <h5>© 2022 ManageWise, Inc</h5>
          </div>
          {/* Nav */}
          <div className="nav">
            <nav className="navbar navbar-expand-lg ">
              <ul className="navbar">
                <a href="#">
                  <InstagramIcon width={20} className="footer-icon" />
                </a>
                <a href="#">
                  <TwitterIcon width={20} className="footer-icon" />
                </a>
                <a href="#">
                  <LinkedInIcon width={20} className="footer-icon" />
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
