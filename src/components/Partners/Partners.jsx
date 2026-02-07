import "./Partners.css";
import supporter1 from "../../assets/images/supporter1.png";
import supporter2 from "../../assets/images/supporter2.png";
import supporter3 from "../../assets/images/supporter3.png";
import supporter4 from "../../assets/images/supporter4.png";
import supporter5 from "../../assets/images/supporter5.png";
import supporter6 from "../../assets/images/supporter6.png";

const partners = [
  { src: supporter1, alt: "Innovate Global" },
  { src: supporter2, alt: "City General" },
  { src: supporter3, alt: "Pinnacle" },
  { src: supporter4, alt: "Future Builders" },
  { src: supporter5, alt: "Global Tech Alliance" },
  { src: supporter6, alt: "Green Energy Corp" }
];

function Partners() {
  return (
    <div className="partners-section">
      <div className="partners-header">
        <h2>Our Trusted Partners</h2>
        <p>Key Supporters Empowering our Visions</p>
      </div>

      <div className="slider-wrapper">
        <div className="logo-track">
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;