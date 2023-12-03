import ConstructionIcon from "@mui/icons-material/Construction";

function Integration() {
  return (
    <div className="Integration">
      <div className="integration-main">
        <div className="integration-Welcome">
          <ConstructionIcon width={20} style={{ color: "#8247ff" }} />
          <span className="Welcome">&nbsp;Integrations</span>
        </div>
        <div className="integration-h1">
          Enable <span>integration</span> with other popular tools and platforms
        </div>
        <div className="explore-p integration-p">
          <p>
            Seamlessly connect and amplify your workflow by enabling integration
            with a diverse array of widely-used tools and platforms.
          </p>
        </div>
        <div>
          <img
            src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
            alt="Integration"
            srcSet="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=512 512w, https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png 1449w"
            sizes="min(min(95vw, 1200px), 580px)"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "cover",
              imageRendering: "auto",
            }}
            loading="lazy"
          />
        </div>
      </div>

      <div className="Discover-grid-1"></div>
    </div>
  );
}

export default Integration;
