import React from "react";

const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: "Mission",
      icon: "bi-lightbulb-fill",
      text: "To make job-aligned, tech education accessible and practical across India.",
    },
    {
      title: "Impact",
      icon: "bi-people-fill",
      text: "Over 800+ success stories, 90% placement success, and ongoing hiring support.",
    },
    {
      title: "Certification",
      icon: "bi-award-fill",
      text: "Global-standard certifications from real-time capstone projects & expert mentors.",
    },
    {
      title: "Placement",
      icon: "bi-briefcase-fill",
      text: "1-year support with mock interviews, resume help, job referrals, and hiring drives.",
    },
  ];

  const journey = [
    {
      year: "2015",
      title: "Kelvin Educon",
      text: "Started technical training in SCADA, PLC, and design tools for engineers.",
    },
     {
      year: "2020",
      title: "PHINCO GROUP",
      text: "Expanded into engineering, education, infra, and workforce solutions.",
    },
     {
      year: "2023",
      title: "PHINCO ELITE",
      text: "Launched job-oriented courses in AI, Full Stack, Digital Marketing, and Analytics.",
    },
    {
      year: "2024",
      title: "PHINCO CONNECT",
      text: "Established 350+ hiring partnerships for student placement and IT staffing.",
    },
    {
      year: "2025",
      title: "PHINCO EDUVERSITY",
      text: "Started global MBA and study abroad services for higher education aspirants.",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .about-section {
          width: 100%;
          overflow: hidden;
          background: #f3fbff;
          padding: 50px 5%;
          font-family: inherit;
        }

        .section-title {
          margin: 0 0 45px;
          text-align: center;
          color: #08b6ef;
          font-size: 38px;
          font-weight: 700;
        }

        .about-content2 {
          width: 100%;
          margin: auto;
        }

        .about-text h2 {
          margin: 0 0 25px;
          color: #102033;
          font-size: 42px;
          line-height: 1.35;
          font-weight: 500;
        }

        .about-text h2 span {
          color: #08b6ef;
        }

        .about-text > p {
          margin: 0 0 35px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.8;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
          margin-top: 35px;
        }

        .highlight-item {
          min-height: 120px;
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 25px;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
        }

        .highlight-title {
          min-width: 140px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #102033;
          font-size: 17px;
          font-weight: 600;
        }

        .highlight-title i {
          flex: 0 0 38px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #08b6ef;
          color: #ffffff;
          border-radius: 50%;
        }

        .highlight-item p {
          margin: 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.6;
        }

        /* Journey section */

        .journey-section {
          margin-top: 75px;
        }

        .journey-title {
          margin: 0 0 60px;
          text-align: center;
          color: #08b6ef;
          font-size: 36px;
          font-weight: 700;
        }

        .journey-wrapper {
          width: 100%;
          max-width: 1250px;
          margin: auto;
          position: relative;
          padding: 20px 0;
        }

        .journey-path {
          position: absolute;
          top: 80px;
          bottom: 80px;
          left: 50%;
          width: 230px;
          height: calc(100% - 160px);
          transform: translateX(-50%);
          overflow: visible;
          pointer-events: none;
        }

        .journey-path path {
          fill: none;
          stroke: #9ca3af;
          stroke-width: 2;
          stroke-dasharray: 10 12;
          stroke-linecap: round;
        }

        .journey-row {
          --marker-position: 50%;

          min-height: 260px;
          position: relative;
          display: flex;
          align-items: center;
        }

        .journey-row.left {
          justify-content: flex-start;
          padding-right: 55%;
        }

        .journey-row.right {
          justify-content: flex-end;
          padding-left: 55%;
        }

        .journey-row:nth-child(2) {
          --marker-position: 47%;
        }

        .journey-row:nth-child(3) {
          --marker-position: 55%;
        }

        .journey-row:nth-child(4) {
          --marker-position: 45%;
        }

        .journey-row:nth-child(5) {
          --marker-position: 54%;
        }

        .journey-row:nth-child(6) {
          --marker-position: 47%;
        }

        .journey-card {
          width: 100%;
          min-height: 190px;
          position: relative;
          z-index: 2;
          padding: 30px 32px;
          background: #ffffff;
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 18px;
          box-shadow: 0 10px 0 rgba(15, 23, 42, 0.05);
        }

        .journey-card h3 {
          margin: 0 0 14px;
          color: #102033;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
        }

        .journey-card h4 {
          margin: 0 0 13px;
          color: #08b6ef;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 600;
        }

        .journey-card p {
          margin: 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }

        .journey-number {
          position: absolute;
          top: 50%;
          left: var(--marker-position);
          z-index: 3;
          width: 54px;
          height: 54px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #08b6ef;
          color: #ffffff;
          border-radius: 50%;
          font-size: 18px;
          font-weight: 700;
          box-shadow: 0 0 0 8px #f3fbff;
        }

        @media (max-width: 900px) {
          .about-section {
            padding: 35px 20px;
          }

          .section-title {
            margin-bottom: 30px;
            font-size: 30px;
          }

          .about-text h2 {
            font-size: 30px;
          }

          .highlight-grid {
            grid-template-columns: 1fr;
          }

          .highlight-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .highlight-title {
            min-width: 0;
          }

          .journey-section {
            margin-top: 55px;
          }

          .journey-title {
            margin-bottom: 40px;
            font-size: 30px;
          }

          .journey-wrapper {
            padding: 0;
          }

          .journey-path {
            display: none;
          }

          .journey-wrapper::before {
            content: "";
            position: absolute;
            top: 26px;
            bottom: 26px;
            left: 26px;
            border-left: 2px dashed #9ca3af;
          }

          .journey-row,
          .journey-row.left,
          .journey-row.right {
            min-height: auto;
            justify-content: flex-start;
            padding: 0 0 35px 70px;
          }

          .journey-row:last-child {
            padding-bottom: 0;
          }

          .journey-card {
            min-height: auto;
            padding: 24px;
          }

          .journey-number {
            top: 28px;
            left: 26px;
            width: 46px;
            height: 46px;
            transform: translate(-50%, 0);
            font-size: 16px;
            box-shadow: 0 0 0 6px #f3fbff;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 30px 15px;
          }

          .section-title {
            font-size: 26px;
          }

          .about-text h2 {
            font-size: 26px;
          }

          .about-text > p {
            font-size: 15px;
          }

          .highlight-item {
            padding: 20px;
          }

          .journey-title {
            font-size: 27px;
          }

          .journey-wrapper::before {
            left: 21px;
          }

          .journey-row,
          .journey-row.left,
          .journey-row.right {
            padding-left: 55px;
          }

          .journey-number {
            left: 21px;
            width: 42px;
            height: 42px;
          }

          .journey-card {
            padding: 22px 20px;
          }

          .journey-card h3 {
            font-size: 27px;
          }

          .journey-card h4 {
            font-size: 15px;
          }

          .journey-card p {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="about-section">
        <h2 className="section-title">About PHINCO ELITE</h2>

        <div className="about-content2">
          <div className="about-text">
            <h2>
              We are <span>Phinco Elite</span>, where your skills launch real
              careers
            </h2>

            <p>
              Phinco Elite offers <b>career-ready IT programs</b> in Data
              Science, Analytics, Full Stack Development, and AI. Get trained
              with real projects, 1-on-1 mentorship, and industry
              certifications.
            </p>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <div className="highlight-item" key={item.title}>
                  <div className="highlight-title">
                    <i className={`bi ${item.icon}`}></i>
                    {item.title}
                  </div>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="journey-section">
          <h2 className="journey-title">Our Journey</h2>

          <div className="journey-wrapper">
            <svg
              className="journey-path"
              viewBox="0 0 230 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="
                  M115 0
                  C20 80, 25 170, 145 250
                  C215 310, 205 390, 85 460
                  C15 520, 30 620, 155 690
                  C215 750, 200 850, 90 920
                  C50 950, 55 980, 115 1000
                "
              />
            </svg>

            {journey.map((item, index) => (
              <div
                className={`journey-row ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={item.year}
              >
                <div className="journey-card">
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>

                <div className="journey-number">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;