import React from "react";

import Infosys from "@/assets/Infosys.webp";
import Deloitte from "@/assets/Deloitte.webp";
import TCS from "@/assets/TCS.webp";
import Google from "@/assets/Google.webp";
import Capgemini from "@/assets/Capgemini.webp";
import IBM from "@/assets/IBM.webp";
import Wipro from "@/assets/Wipro.webp";
import Amazon from "@/assets/Amazon.webp";
import Netflix from "@/assets/Netflix.webp";
import Meta from "@/assets/Meta.webp";

const HiringCompaniesSection: React.FC = () => {
  const companies = [
    { name: "Infosys", logo: Infosys },
    { name: "Deloitte", logo: Deloitte },
    { name: "TCS", logo: TCS },
    { name: "Google", logo: Google },
    { name: "Capgemini", logo: Capgemini },
    { name: "IBM", logo: IBM },
    { name: "Wipro", logo: Wipro },
    { name: "Amazon", logo: Amazon },
    { name: "Netflix", logo: Netflix },
    { name: "Meta", logo: Meta },
  ];

  return (
    <>
      <style>{`
  .hiring-section {
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    overflow: hidden;

    padding: 55px 0 40px;

    /* Increased from 20px to 40px */
    margin-bottom: 40px;

    text-align: center;
    font-family: inherit;
  }

  .hiring-content {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 25px;
    box-sizing: border-box;
  }

  .hiring-title {
    margin: 0;
    color: #08b6ef;
    font-size: 38px;
    line-height: 1.25;
    font-weight: 700;
    text-align: center;
  }

  .hiring-description {
    max-width: 1150px;
    margin: 25px auto 0;
    color: #111111;
    font-size: 17px;
    line-height: 1.7;
    font-weight: 400;
    text-align: center;
  }

  /* ================================
     LOGO SLIDER
  ================================= */

  .hiring-logo-slider {
    position: relative;
    width: 100%;
    overflow: hidden;

    margin-top: 80px;
    padding: 15px 0 25px;
  }

  .hiring-logo-track {
    display: flex;
    width: max-content;
    animation: hiringLogoScroll 25s linear infinite;
    will-change: transform;
  }

  .hiring-logo-group {
    display: flex;
    align-items: center;

    /* Reduced gap */
    gap: 50px;

    flex-shrink: 0;

    /* Must match gap for continuous animation */
    padding-right: 50px;
  }

  /* Same container size for every logo */
  .hiring-logo-item {
    width: 190px;
    height: 90px;
    flex: 0 0 190px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0;

    background: transparent;
    border: none;
    box-shadow: none;
    overflow: visible;
  }

  /* Make all logos larger and use same image area */
  .hiring-logo-item img {
    display: block;

    width: 175px;
    height: 70px;

    object-fit: contain;
    object-position: center;

    max-width: none;
    max-height: none;
  }

  @keyframes hiringLogoScroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  .hiring-disclaimer {
    max-width: 1100px;

    margin: 45px auto 0;
    padding: 0 20px;

    font-size: 13px;
    line-height: 1.6;
    color: #777777;
    text-align: center;
  }

  /* ================================
     TABLET
  ================================= */

  @media (max-width: 992px) {
    .hiring-title {
      font-size: 32px;
    }

    .hiring-description {
      font-size: 15px;
      max-width: 850px;
    }

    .hiring-logo-slider {
      margin-top: 65px;
    }

    .hiring-logo-track {
      animation-duration: 23s;
    }

    .hiring-logo-group {
      gap: 40px;
      padding-right: 40px;
    }

    .hiring-logo-item {
      width: 165px;
      height: 80px;
      flex-basis: 165px;
    }

    .hiring-logo-item img {
      width: 150px;
      height: 62px;
    }
  }

  /* ================================
     MOBILE
  ================================= */

  @media (max-width: 768px) {
    .hiring-section {
      padding: 40px 0 40px;
      margin-bottom: 40px;
    }

    .hiring-content {
      padding: 0 20px;
    }

    .hiring-title {
      font-size: 27px;
    }

    .hiring-description {
      margin-top: 18px;
      font-size: 14px;
      line-height: 1.6;
    }

    .desktop-break {
      display: none;
    }

    .hiring-logo-slider {
      margin-top: 50px;
    }

    .hiring-logo-track {
      animation-duration: 18s;
    }

    .hiring-logo-group {
      gap: 30px;
      padding-right: 30px;
    }

    .hiring-logo-item {
      width: 140px;
      height: 70px;
      flex-basis: 140px;
    }

    .hiring-logo-item img {
      width: 130px;
      height: 55px;
    }

    .hiring-disclaimer {
      margin-top: 30px;
      font-size: 11px;
      padding: 0 20px;
    }
  }

  @media (max-width: 480px) {
    .hiring-title {
      font-size: 24px;
    }

    .hiring-description {
      font-size: 13px;
    }

    .hiring-logo-track {
      animation-duration: 16s;
    }

    .hiring-logo-group {
      gap: 25px;
      padding-right: 25px;
    }

    .hiring-logo-item {
      width: 125px;
      height: 65px;
      flex-basis: 125px;
    }

    .hiring-logo-item img {
      width: 115px;
      height: 50px;
    }
  }
`}</style>

      <section className="hiring-section">
        <div className="hiring-content">
          <h2 className="hiring-title">
            Where Our Students Aspire to Work
          </h2>

          <p className="hiring-description">
            Phinco Elite graduates are now working at top companies in Data
            Science, AI, Full Stack Development, and
            <br className="desktop-break" />
            Analytics. Our hands-on training, real-world projects, and placement
            support make our students job-ready
            <br className="desktop-break" />
            from day one.
          </p>
        </div>

        {/* CONTINUOUS LOGO SLIDER */}
        <div className="hiring-logo-slider">
          <div className="hiring-logo-track">

            {/* FIRST SET */}
            <div className="hiring-logo-group">
              {companies.map((company) => (
                <div
                  className="hiring-logo-item"
                  key={`first-${company.name}`}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                  />
                </div>
              ))}
            </div>

            {/* SECOND IDENTICAL SET */}
            <div
              className="hiring-logo-group"
              aria-hidden="true"
            >
              {companies.map((company) => (
                <div
                  className="hiring-logo-item"
                  key={`second-${company.name}`}
                >
                  <img
                    src={company.logo}
                    alt=""
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

        <p className="hiring-disclaimer">
          <em>Disclaimer:</em> All logos and brand names shown are for
          illustrative purposes only. They are the property of their respective
          owners, and no direct affiliation, sponsorship, or placement tie-up is
          implied.
        </p>
      </section>
    </>
  );
};

export default HiringCompaniesSection;