import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckIcon from "@mui/icons-material/Check";

function Pricing() {
  return (
    <div className="Price">
      <div>
        <div className="discover-Intro">
          <div className="integration-Welcome">
            <AttachMoneyIcon width={20} style={{ color: "#8247ff" }} />
            <span className="Welcome">Pricing</span>
          </div>
          <div className="discover-h1">
            Select your ideal <span>Pricing</span> plan
          </div>
          <div className="discover-p">
            <p>
              At Manage Wise, we believe in providing you with pricing plans
              that adapt to your unique needs.
            </p>
          </div>
        </div>
      </div>

      {/* Price Card */}
      <div className="Card-main">
        <div className="Card card-1">
          <div>
            <p className="price-head">FREE</p>
            <p>
              <strong>$0</strong>/month
            </p>
          </div>
          <div>
            <ul className="Price-list">
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Access to all basic features
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Reporting and analytics
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Up to 5 individual users
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Chat and email support
              </li>
            </ul>
          </div>
          <button className="btn-price btn-price-1">Get Started</button>
        </div>
        <div className="Card card-2">
          <div>
            <p className="price-head">STANDARD</p>
            <p className="card-2-p">
              <strong>$25</strong>/month
            </p>
          </div>
          <div>
            <ul className="Price-list">
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Access to all basic features
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Reporting and analytics
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Up to 5 individual users
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Chat and email support
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;3+ integrations
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Account performance reporting
              </li>
            </ul>
          </div>
          <button className="btn-price btn-price-2">Get Started</button>
        </div>
        <div className="Card card-1">
          <div>
            <p className="price-head">BUSINESS</p>
            <p>
              <strong>$42</strong>/month
            </p>
          </div>
          <div>
            <ul className="Price-list">
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Access to all basic features
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Reporting and analytics
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Up to 5 individual users
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;Chat and email support
              </li>
              <li>
                <CheckIcon width={20} style={{ color: "green" }} />
                &nbsp;3+ integrations
              </li>
            </ul>
          </div>
          <button className="btn-price">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
