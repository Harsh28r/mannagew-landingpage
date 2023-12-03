import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Faq() {
  const [accordion, openAccordion] = useState([0, 0, 0, 0, 0]);

  const openAcc = (index) => {
    openAccordion((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = prevArray[index] === 0 ? 1 : 0;
      return newArray;
    });
  };

  return (
    <div className="FAQ">
      {/* Left FAQ */}
      <div className="left-faq">
        <div className="integration-main FAQ-main">
          <div className="integration-Welcome">
            <span className="Welcome">🙋‍♀️ FAQ</span>
          </div>
          <div className="FAQ-h1">
            Need <br />
            <span>Answers ?</span>
          </div>
          <div className="explore-p integration-p FAQ-p">
            <p>
              Check out our most commonly asked questions below to find the
              information you need.
            </p>
          </div>
        </div>
      </div>
      {/* Right FAQ */}

      <div className="right-faq">
        {/* Accordion */}
        <div className="accordion">
          <div className="accordion-header" onClick={() => openAcc(0)}>
            <h4
              className="accordion-h4"
              style={{ color: `${accordion[0] === 1 ? "#8247ff" : "inherit"}` }}
            >
              What is Manage Wise and what does it offer?
            </h4>
            {accordion[0] === 1 ? (
              <CloseIcon width={20} style={{ color: "#8247ff" }} />
            ) : (
              <AddIcon width={20} style={{ color: "#8247ff" }} />
            )}
          </div>

          <p
            className="accordion-p"
            style={{
              display: `${accordion[0] === 1 ? "block" : "none"}`,
            }}
          >
            Manage Wise is a comprehensive management platform designed to
            streamline your business operations, enhance productivity, and drive
            success. It offers a range of features including task management,
            scheduling, communication tools, analytics, and more.
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-header" onClick={() => openAcc(1)}>
            <h4
              className="accordion-h4"
              style={{ color: `${accordion[1] === 1 ? "#8247ff" : "inherit"}` }}
            >
              Is Manage Wise suitable for small businesses and larger
              enterprises alike?
            </h4>
            {accordion[1] === 1 ? (
              <CloseIcon width={20} style={{ color: "#8247ff" }} />
            ) : (
              <AddIcon width={20} style={{ color: "#8247ff" }} />
            )}
          </div>
          <p
            className="accordion-p"
            style={{ display: `${accordion[1] === 1 ? "block" : "none"}` }}
          >
            Yes, Manage Wise is designed to cater to the needs of both small
            businesses and larger enterprises. Its scalable features and
            customizable options make it versatile for various business sizes.
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-header" onClick={() => openAcc(2)}>
            <h4
              className="accordion-h4"
              style={{ color: `${accordion[2] === 1 ? "#8247ff" : "inherit"}` }}
            >
              Can I access Manage Wise from different devices and platforms?
            </h4>
            {accordion[2] === 1 ? (
              <CloseIcon width={20} style={{ color: "#8247ff" }} />
            ) : (
              <AddIcon width={20} style={{ color: "#8247ff" }} />
            )}
          </div>
          <p
            className="accordion-p"
            style={{ display: `${accordion[2] === 1 ? "block" : "none"}` }}
          >
            Yes, Manage Wise offers cross-platform compatibility, allowing you
            to access and use the platform seamlessly on desktops, web browsers,
            and mobile devices.
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-header" onClick={() => openAcc(3)}>
            <h4
              className="accordion-h4"
              style={{ color: `${accordion[3] === 1 ? "#8247ff" : "inherit"}` }}
            >
              What kind of support options do you offer to users?
            </h4>
            {accordion[3] === 1 ? (
              <CloseIcon width={20} style={{ color: "#8247ff" }} />
            ) : (
              <AddIcon width={20} style={{ color: "#8247ff" }} />
            )}
          </div>
          <p
            className="accordion-p"
            style={{ display: `${accordion[3] === 1 ? "block" : "none"}` }}
          >
            We provide responsive customer support via chat and email to assist
            you with any inquiries, issues, or guidance you may need while using
            Manage Wise.
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-header" onClick={() => openAcc(4)}>
            <h4
              className="accordion-h4"
              style={{ color: `${accordion[4] === 1 ? "#8247ff" : "inherit"}` }}
            >
              How secure is the data stored within Manage Wise?
            </h4>
            {accordion[4] === 1 ? (
              <CloseIcon width={20} style={{ color: "#8247ff" }} />
            ) : (
              <AddIcon width={20} style={{ color: "#8247ff" }} />
            )}
          </div>
          <p
            className="accordion-p"
            style={{ display: `${accordion[4] === 1 ? "block" : "none"}` }}
          >
            Your data&#39;s security is a top priority. Manage Wise employs
            robust data encryption and follows industry best practices to ensure
            your sensitive information is safe and protected.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
