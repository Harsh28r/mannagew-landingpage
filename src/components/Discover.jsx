function Discover() {
  return (
    <div className="Discover">
      {/* Brand Info */}
      <div>
        <div className="discover-Intro">
          <div className="discover-Welcome">
            <span className="Welcome">🔥 PREMIER FEATURES</span>
          </div>
          <div className="discover-h1">
            Discover our product&#39;s <span>Capabilities</span>
          </div>
          <div className="discover-p">
            <p>
              Don&#39;t settle for mediocrity - embrace the future of management
              with Manage Wise.
            </p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="Discover-grid-1">
        <div className="boost-prod">
          <div className="boost-card">
            <div className="boost-icon">
              <div className="icon">⭐️</div>
            </div>
            <h3 className="discover-boost-h3">
              Boost productivity and <br /> streamline workflow with <br /> us.
              Enjoy our intuitive <br />
              interface and robust <br />
              features.
            </h3>
          </div>
        </div>
        <div className="boost-img1">
          <img
            src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png"
            alt="Task Management"
            style={{
              display: "block",
              objectPosition: "center",
              objectFit: "cover",
              imageRendering: "auto",
            }}
            className="Discover-img"
          />
          <p className="boost-img-h3">Smart Task Management</p>
          <p className=" boost-img-p">
            Say goodbye to chaos with our smart task management systemSay
            goodbye to chaos with our smart task management system
          </p>
        </div>
        <div className="grid3">
          <div className="boost-img1 boost-img3">
            <img
              src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
              alt="Upcoming Schedule"
              style={{
                display: "block",
                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
              className="Discover-img"
            />
            <p className="boost-img-h3">Flexible Scheduling</p>
            <p className=" boost-img-p">
              Stay productive with our flexible scheduling system
            </p>
          </div>
          <div className="boost-img1 boost-img3">
            <img
              src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
              alt="Easy Communication"
              style={{
                display: "block",
                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
              className="Discover-img"
            />
            <p className="boost-img-h3">Easy Communication</p>
            <p className=" boost-img-p">
              Collaborate seamlessly with your team in real-time
            </p>
          </div>
          <div className="boost-img1 boost-img3">
            <img
              src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
              alt="Analytics"
              style={{
                display: "block",

                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
              className="Discover-img"
            />
            <p className="boost-img-h3">Analytics</p>
            <p className=" boost-img-p">
              Gain valuable insights with our advanced analytics feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
