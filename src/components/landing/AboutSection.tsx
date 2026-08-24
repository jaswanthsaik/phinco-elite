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
      year: "2025",
      title: "PHINCO EDUVERSITY",
      icon: "bi-mortarboard-fill",
      text: "Started global MBA and study abroad services for higher education aspirants.",
    },
    {
      year: "2024",
      title: "PHINCO CONNECT",
      icon: "bi-people-fill",
      text: "Established 350+ hiring partnerships for student placement and IT staffing.",
    },
    {
      year: "2023",
      title: "PHINCO ELITE",
      icon: "bi-person-badge-fill",
      text: "Launched job-oriented courses in AI, Full Stack, Digital Marketing, and Analytics.",
    },
    {
      year: "2020",
      title: "PHINCO GROUP",
      icon: "bi-diagram-3-fill",
      text: "Expanded into engineering, education, infra, and workforce solutions.",
    },
    {
      year: "2015",
      title: "Kelvin Educon",
      icon: "bi-gear-fill",
      text: "Started technical training in SCADA, PLC, and design tools for engineers.",
    },
  ];

  return (
    <>
      <style>{`
        .about-section {
          width: 100%;
          box-sizing: border-box;
          background: #f3fbff;
          padding: 36px 7.5% 20px;
          font-family: inherit;
        }

        /* ==============================
           MAIN TITLE
        ============================== */

        .about-section .section-title {
          margin: 0 0 18px;
          padding: 0;
          text-align: center;
          color: #08b6ef;
          font-size: 34px;
          line-height: 1.2;
          font-weight: 700;
          text-transform: none;
          letter-spacing: 0;
        }

        .about-section .section-title::after {
          display: none;
        }

        /* ==============================
           TWO COLUMN LAYOUT
        ============================== */

        .about-section .about-grid {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.18fr) minmax(520px, 1fr);
          gap: 55px;
          align-items: start;
        }

        /* ==============================
           LEFT CONTENT
        ============================== */

        .about-section .about-text {
          padding-top: 12px;
        }

        .about-section .about-text > h2 {
          max-width: 760px;
          margin: 0 0 25px;
          color: #0b1f38;
          font-size: 35px;
          line-height: 1.42;
          font-weight: 400;
          letter-spacing: 0;
        }

        .about-section .about-text > h2 span {
          color: #08b6ef;
          font-weight: 400;
        }

        .about-section .about-text > p {
          max-width: 820px;
          margin: 0 0 28px;
          color: #617080;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 400;
        }

        .about-section .about-text > p strong {
          color: #586474;
          font-weight: 700;
        }

        /* ==============================
           LEFT FEATURE ROWS
        ============================== */

        .about-section .highlight-item {
          min-height: 65px;
          margin: 0 0 20px;
          padding: 12px 18px;
          box-sizing: border-box;

          display: grid;
          grid-template-columns: 130px 1fr;
          align-items: center;

          background: #e7f8ff;
          border: none;
          border-radius: 14px;
          box-shadow: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .about-section .highlight-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(25, 181, 232, 0.08);
        }

        .about-section .highlight-title {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 11px;

          color: #07192f;
          font-size: 15px;
          font-weight: 600;
          white-space: nowrap;
        }

        .about-section .highlight-title i {
          width: 32px;
          height: 32px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff;
          background: #08baf3;
          border-radius: 50%;
          font-size: 15px;
        }

        .about-section .highlight-item p {
          margin: 0;
          padding-left: 15px;

          color: #354353;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
        }

        /* ==============================
           RIGHT JOURNEY CONTAINER
        ============================== */

        .about-section .timeline-container {
          position: relative;
          margin: 0;
          padding: 42px 28px 42px;
          box-sizing: border-box;

          background: #ffffff;
          border-radius: 20px;
          min-height: 690px;
        }

        .about-section .timeline-container::before {
          display: none;
        }

        .about-section .timeline-container > h2 {
          margin: 0 0 38px;
          text-align: center;

          color: #07192f;
          font-size: 25px;
          line-height: 1.3;
          font-weight: 400;
        }

        /* ==============================
           JOURNEY ROWS
        ============================== */

        .about-section .timeline-step {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;

          min-height: 86px;
          margin: 0 0 23px;
          padding: 13px 20px;
          box-sizing: border-box;

          background: #e6f8ff;
          border-radius: 14px;
        }

        .about-section .timeline-step:last-child {
          margin-bottom: 0;
        }

        .about-section .timeline-icon {
          position: relative;
          z-index: 2;

          width: 49px;
          height: 49px;
          flex: 0 0 49px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #08baf3;
          color: #ffffff;
          border-radius: 50%;
          font-size: 17px;

          box-shadow: 0 6px 14px rgba(8, 186, 243, 0.16);
        }

        .about-section .timeline-content {
          width: auto;
          flex: 1;

          margin: 0;
          padding: 0;

          background: transparent;
          border-radius: 0;
          box-shadow: none;

          transition: none;
        }

        .about-section .timeline-content:hover {
          transform: none;
          box-shadow: none;
        }

        .about-section .timeline-content h5 {
          margin: 0 0 7px;

          color: #13243a;
          font-size: 14px;
          line-height: 1.3;
          font-weight: 500;
        }

        .about-section .timeline-content p {
          margin: 0;

          color: #5d6b79;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 400;
        }

        /* ==============================
           LARGE SCREENS
        ============================== */

        @media (min-width: 1600px) {
          .about-section {
            padding-left: 7.5%;
            padding-right: 7.5%;
          }

          .about-section .about-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }

        /* ==============================
           TABLET
        ============================== */

        @media (max-width: 1100px) {
          .about-section {
            padding: 50px 5%;
          }

          .about-section .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            max-width: 850px;
          }

          .about-section .about-text > h2 {
            max-width: 100%;
          }

          .about-section .timeline-container {
            min-height: auto;
          }
        }

        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 768px) {
          .about-section {
            padding: 45px 20px;
          }

          .about-section .section-title {
            font-size: 28px;
            margin-bottom: 25px;
          }

          .about-section .about-text {
            padding-top: 0;
          }

          .about-section .about-text > h2 {
            font-size: 27px;
            line-height: 1.4;
            margin-bottom: 18px;
          }

          .about-section .about-text > p {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 25px;
          }

          .about-section .highlight-item {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 15px;
            margin-bottom: 15px;
          }

          .about-section .highlight-item p {
            padding-left: 43px;
            font-size: 13px;
          }

          .about-section .timeline-container {
            padding: 30px 18px;
            border-radius: 16px;
          }

          .about-section .timeline-container > h2 {
            font-size: 23px;
            margin-bottom: 28px;
          }

          .about-section .timeline-step {
            padding: 13px 15px;
            gap: 13px;
            margin-bottom: 16px;
          }

          .about-section .timeline-icon {
            width: 44px;
            height: 44px;
            flex-basis: 44px;
            font-size: 15px;
          }

          .about-section .timeline-content h5 {
            font-size: 13px;
          }

          .about-section .timeline-content p {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 40px 15px;
          }

          .about-section .section-title {
            font-size: 25px;
          }

          .about-section .about-text > h2 {
            font-size: 24px;
          }

          .about-section .highlight-item p {
            padding-left: 0;
          }

          .about-section .timeline-step {
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <h2 className="section-title">About PHINCO ELITE</h2>

        <div className="about-grid">
          {/* LEFT SIDE */}
          <div className="about-text">
            <h2>
              We are <span>Phinco Elite</span>, where your skills launch
              <br />
              real careers
            </h2>

            <p>
              Phinco Elite offers{" "}
              <strong>career-ready IT programs</strong> in Data Science,
              Analytics, Full Stack Development, and AI.
              <br />
              Get trained with real projects, 1-on-1 mentorship, and industry
              certifications.
            </p>

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

          {/* RIGHT SIDE */}
          <div className="timeline-container">
            <h2>Our Journey</h2>

            {journey.map((item) => (
              <div className="timeline-step" key={item.year}>
                <div className="timeline-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <div className="timeline-content">
                  <h5>
                    {item.year} – {item.title}
                  </h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;