function Testimonial() {
  return (
    <div className="Testimonial">
      <div className="explore-main testimonial-main">
        <div className="explore-Welcome">
          <span className="Welcome">🧡 TESTIMONIALS</span>
        </div>
        <div className="explore-h1 testimonial-h1">
          Hear from our
          <span>Satisfied</span> clients
        </div>
        <div className="explore-p testimonial-p">
          <p>
            Discover why our clients love working with us. Read their
            testimonials and learn how we has helped businesses.
          </p>
        </div>
      </div>

      <div className="Discover-grid-1">
        <div className="grid3 explore-grid">
          <div className="boost-img1 boost-img3 testimonial-bars">
            <p className="testimonial-p testimonial-p-bars">
              &ldquo;I can&#39;t imagine running my business without this
              product. The automation features have saved me hours of manual
              work, allowing me to focus on strategic tasks.&rdquo;
            </p>

            <div className="testimonial-footer">
              <img
                src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg"
                className="testimonial-img"
              />
              <div className="footer-uid">
                <div className="footer-name">Alex</div>

                <div className="footer-passion">Freelancer</div>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="boost-img1 boost-img3 testimonial-bars">
            <p className="testimonial-p testimonial-p-bars">
              &ldquo;Using this product has been a game-changer for our team.
              The collaboration features and intuitive interface have greatly
              improved our productivity.&rdquo;
            </p>

            <div className="testimonial-footer">
              <img
                src="	https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg"
                className="testimonial-img"
              />
              <div className="footer-uid">
                <div className="footer-name">David</div>

                <div className="footer-passion">Freelancer</div>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="boost-img1 boost-img3 testimonial-bars">
            <p className="testimonial-p testimonial-p-bars">
              &ldquo;Manage Wise transformed our team&#39;s productivity. The
              intuitive interface and powerful features have made a significant
              impact on our daily operations&rdquo;
            </p>

            <div className="testimonial-footer">
              <img
                src="https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
                className="testimonial-img"
              />
              <div className="footer-uid">
                <div className="footer-name">Emily</div>

                <div className="footer-passion">ArtDirector</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
