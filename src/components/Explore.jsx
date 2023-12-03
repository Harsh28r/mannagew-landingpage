import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

function Explore() {
  return (
    <div className="Explore">
      <div className="explore-main">
        <div className="explore-Welcome">
          <span className="Welcome">🤩 AND MORE...</span>
        </div>
        <div className="explore-h1">
          Explore an array of features that elevate your <br />
          <span>Productivity</span> to new heights
        </div>
        <div className="explore-p">
          <p>
            Discover the tools that will revolutionize the way you <br /> manage
            and optimize your operations
          </p>
        </div>
      </div>

      <div className="Discover-grid-1">
        <div className="grid3 explore-grid">
          <div className="boost-img1 boost-img3 explore-bars">
            <div className="explore-icon">
              <div className="icon">
                <PhoneIphoneIcon width={24} style={{ color: "white" }} />
              </div>
            </div>

            <p className="boost-img-h3 explore-h3">
              Cross-Platform Compatibility
            </p>
            <p className=" boost-img-p explore-img-p">
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device.
            </p>
          </div>
          <div className="boost-img1 boost-img3 explore-bars">
            <div className="explore-icon">
              <div className="icon">
                <NotificationsIcon width={24} style={{ color: "white" }} />
              </div>
            </div>
            <p className="boost-img-h3 explore-h3">
              Stay Informed with Essential Notifications
            </p>
            <p className=" boost-img-p explore-img-p">
              Automate support from first customer contact to closing the
              ticket. Drastically improve time to resolution.Automate support
              from first customer contact to closing the ticket.
            </p>
          </div>
          <div className="boost-img1 boost-img3 explore-bars">
            <div className="explore-icon">
              <div className="icon">
                <LocalFireDepartmentIcon
                  width={24}
                  style={{ color: "white" }}
                />
              </div>
            </div>
            <p className="boost-img-h3 explore-h3">
              Secure Data Encryption at all times
            </p>
            <p className=" boost-img-p explore-img-p">
              Trust in our robust data encryption to keep your sensitive
              information safe and secure. Rest easy knowing your data is
              protected at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
