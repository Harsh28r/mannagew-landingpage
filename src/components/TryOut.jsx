import Footer from "./Footer";
function TryOut() {
  return (
    <>
      <div className="TryItNow">
        <div className="tryIt-main">
          {/* Grid 1 */}
          <div className="tryIt-grid-1">
            <div className="explore-Welcome tryIt-welcome">
              <span className="Welcome">🤩 AND MORE...</span>
            </div>
            <div className="explore-h1 tryIt-h1">
              Unleash your <span>Potential</span> with us
            </div>
            <div className="explore-p">
              <p className="testimonial-p">
                Join our community of ambitious <br /> individuals and
                organizations eager to <br />
                make a difference.
              </p>
            </div>
            <div className="button">
              <button className="btn-start">Try Out Now</button>
            </div>
          </div>
          {/* Grid-2 */}
          <div className="tryIt-grid-2">
            <img
              src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=512"
              className="tryItout"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TryOut;
