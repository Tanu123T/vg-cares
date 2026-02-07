import "./Download_app.css";

import playStoreImg from "../../assets/images/playstore.png";
import appStoreImg from "../../assets/images/appstore.png";
import phoneImg from "../../assets/images/downloadapp.png";

const DownloadApp = () => {
  return (
    <section className="downloadapp">
      {/* Background blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Glass Card */}
      <section className="app-card">
        {/* Left Content */}
        <div className="app-content">
          <h1 className="app-title">
            Download the <br />
            <span className="gradient-text">VG Care App</span> now!
          </h1>

          <p className="app-description">
            Seamless access to international hospitals, doctors, and treatment
            support with VG Care. Your health journey, simplified.
          </p>

          <div className="store-btns">
            <a href="#" className="btn-link">
              <img src={playStoreImg} alt="Get it on Google Play" />
            </a>
            <a href="#" className="btn-link">
              <img src={appStoreImg} alt="Download on the App Store" />
            </a>
          </div>
        </div>

        {/* Right Phone */}
        <div className="phone-wrapper">
          <div className="phone-frame"></div>
          <img
            src={phoneImg}
            alt="VG Care App Interface"
            className="phone-img"
          />
        </div>
      </section>
    </section>
  );
};

export default DownloadApp;
