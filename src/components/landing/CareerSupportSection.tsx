import React from "react";

const CareerSupportSection: React.FC = () => {
  const careerSteps = [
    {
      number: "01",
      title: "1-on-1 Career Counseling",
      desktopText:
        "Personalized guidance to align your career path with industry goals.",
      mobileText:
        "Personalized guidance to align your career path with goals.",
      background: "#d1fae5",
      badgeColor: "#10b981",
      position: "left",
    },
    {
      number: "02",
      title: "Resume & LinkedIn Optimization",
      desktopText:
        "Craft impactful profiles that grab attention from recruiters and ATS.",
      mobileText:
        "Craft impactful profiles that grab recruiter attention.",
      background: "#e0f2fe",
      badgeColor: "#3b82f6",
      position: "right",
    },
    {
      number: "03",
      title: "Unlimited Job Referrals",
      desktopText:
        "Access exclusive job roles via our partner referral channels.",
      mobileText:
        "Get exclusive job roles via partner referrals.",
      background: "#fef3c7",
      badgeColor: "#f59e0b",
      position: "left",
    },
    {
      number: "04",
      title: "Mock Interviews by Experts",
      desktopText:
        "Practice interviews with industry pros and receive real-time feedback.",
      mobileText:
        "Practice interviews and get expert feedback.",
      background: "#fce7f3",
      badgeColor: "#ec4899",
      position: "right",
    },
  ];

  return (
    <>
      <style>{`
        /* ========================================
           DESKTOP CAREER SECTION
        ======================================== */

        #career {
          background: #ffffff;
          padding: 80px 20px;
        }

        #career .career-section-title {
          text-align: center;
          font-size: 2.2rem;
          color: #08b6ef;
          font-weight: 700;
          margin: 0 0 1rem;
        }

        #career .ph-career-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Center timeline line */
        #career .ph-career-timeline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: #cbd5e1;
          transform: translateX(-50%);
          z-index: 0;
        }

        #career .ph-career-step {
          position: relative;
          width: 50%;
          padding: 30px 40px;
          box-sizing: border-box;
          z-index: 1;
        }

        #career .ph-career-step.left {
          left: 0;
        }

        #career .ph-career-step.right {
          left: 50%;
        }

        #career .ph-career-card {
          position: relative;
          padding: 20px 24px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        #career .ph-career-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
        }

        #career .ph-career-card h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: #0f172a;
        }

        #career .ph-career-card p {
          margin: 0.5rem 0 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #334155;
        }

        #career .ph-career-badge {
          position: absolute;
          top: -18px;
          left: -18px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        }

        #career .ph-career-step.right .ph-career-card {
          margin-left: 30px;
        }

        #career .ph-career-step.left .ph-career-card {
          margin-right: 30px;
        }

        /* ========================================
           MOBILE SECTION
        ======================================== */

        #career-mobile {
          display: none;
          background: #ffffff;
          padding: 50px 20px;
        }

        #career-mobile .career-mobile-title {
          text-align: center;
          font-size: 1.6rem;
          color: var(--cyan, #0891b2);
          font-weight: 700;
          margin: 0 0 2rem;
        }

        .career-grid-mobile {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        .career-box {
          position: relative;
          min-height: 180px;
          padding: 20px 16px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

          display: flex;
          flex-direction: column;
          justify-content: center;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .career-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
        }

        .career-box h3 {
          margin: 10px 0 0;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.4;
          color: #0f172a;
        }

        .career-box p {
          margin: 6px 0 0;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #334155;
        }

        .career-mobile-badge {
          position: absolute;
          top: -12px;
          left: -12px;
          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 0.75rem;
          color: #ffffff;
          font-weight: 700;
          border-radius: 50%;

          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        /* ========================================
           RESPONSIVE
        ======================================== */

        @media (max-width: 768px) {
          #career {
            display: none;
          }

          #career-mobile {
            display: block;
          }
        }

        @media (max-width: 480px) {
          #career-mobile {
            padding: 45px 15px;
          }

          #career-mobile .career-mobile-title {
            font-size: 1.45rem;
            margin-bottom: 1.8rem;
          }

          .career-grid-mobile {
            gap: 14px;
          }

          .career-box {
            min-height: 170px;
            padding: 18px 14px;
          }

          .career-box h3 {
            font-size: 0.95rem;
          }

          .career-box p {
            font-size: 0.8rem;
          }

          .career-mobile-badge {
            width: 30px;
            height: 30px;
            font-size: 0.7rem;
          }
        }

        @media (max-width: 360px) {
          .career-grid-mobile {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .career-box {
            min-height: 140px;
          }
        }
      `}</style>

      {/* DESKTOP VERSION */}
      <section
        id="career"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta
          itemProp="name"
          content="Career Support Journey at Phinco Elite"
        />

        <h2 className="career-section-title" itemProp="headline">
          Career Support Journey
        </h2>

        <div className="ph-career-timeline">
          {careerSteps.map((step) => (
            <div
              key={step.number}
              className={`ph-career-step ${step.position}`}
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/HowToStep"
            >
              <div
                className="ph-career-card"
                style={{ background: step.background }}
              >
                <div
                  className="ph-career-badge"
                  style={{ background: step.badgeColor }}
                >
                  {step.number}
                </div>

                <h3 itemProp="name">{step.title}</h3>

                <p itemProp="text">{step.desktopText}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE VERSION */}
      <section id="career-mobile">
        <h2 className="career-mobile-title">
          Career Support Journey
        </h2>

        <div className="career-grid-mobile">
          {careerSteps.map((step) => (
            <div
              key={`mobile-${step.number}`}
              className="career-box"
              style={{ background: step.background }}
            >
              <div
                className="career-mobile-badge"
                style={{ background: step.badgeColor }}
              >
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.mobileText}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerSupportSection;