import React from "react";

const AboutWho: React.FC = () => {
  return (
    <section className="about-who">
      <div className="about-who-container">
        <h2 className="about-who-title">Who We Are</h2>

        <div className="about-who-content">
          <div className="about-who-description">
            Founded in 2010, Phinco Elite is a global leader in digital skills
            training. Our programs are designed with leading universities,
            corporations, and industry bodies, featuring expert-led live online
            classes.
          </div>

          <div className="about-who-highlight-wrapper">
            <div className="about-who-bg-box" />

            <div className="about-who-highlight">
              A Blackstone company, Phinco Elite is the world’s leading digital
              skills training provider, enabling learners across the globe with
              new-age digital skills.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-who {
          width: 100%;
          background: #ffffff;

          font-family: "Satoshi", Sans-serif;

          padding: 72px 0 52px;
          overflow: hidden;
        }

        .about-who-container {
          width: 100%;
          max-width: 1890px;
          margin: 0 auto;

          padding-left: 4.6%;
          padding-right: 4.8%;
        }

        /* =========================
           TITLE
        ========================== */

        .about-who-title {
          margin: 0;

          font-family: "Satoshi", Sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;

          color: #10182c;
        }

        /* =========================
           CONTENT
        ========================== */

        .about-who-content {
          // margin-top: 65px;

          display: grid;
          grid-template-columns: 46% 54%;
          align-items: center;

          min-height: 220px;
        }

        /* =========================
           LEFT TEXT
        ========================== */

        .about-who-description {
          max-width: 780px;

          font-family: "Satoshi", Sans-serif;
          font-size: 23px;
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -0.01em;

          color: #051027;
        }

        /* =========================
           RIGHT CARD
        ========================== */

        .about-who-highlight-wrapper {
          position: relative;

          width: 100%;
          min-height: 225px;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          padding-left: 40px;
        }

        .about-who-bg-box {
          position: absolute;

          width: 320px;
          height: 225px;

          right: -5%;
          top: 50%;
          transform: translateY(-50%);

          background: #edf6ff;
          border-radius: 14px;

          z-index: 0;
        }

        .about-who-highlight {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 890px;

          padding: 20px 32px 19px;

          background: #ffffff;

          border-radius: 12px;

          box-shadow:
            0 6px 30px rgba(24, 39, 75, 0.06),
            0 2px 10px rgba(24, 39, 75, 0.04);

          font-family: "Satoshi", Sans-serif;

          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.01em;

          color: #374057;
        }

        /* =========================
           1600px
        ========================== */

        @media (max-width: 1600px) {
          .about-who {
            padding-top: 64px;
          }

          .about-who-title {
            font-size: 48px;
          }

          .about-who-content {
            // margin-top: 58px;
          }

          .about-who-description {
            max-width: 700px;

            font-size: 20px;
            line-height: 1.55;
          }

          .about-who-highlight {
            max-width: 760px;

            font-size: 24px;
            line-height: 1.32;
          }

          .about-who-bg-box {
            width: 280px;
            height: 210px;
          }
        }

        /* =========================
           LAPTOP
        ========================== */

        @media (max-width: 1366px) {
          .about-who {
            padding:
              55px
              0
              45px;
          }

          .about-who-container {
            padding-left: 5%;
            padding-right: 5%;
          }

          .about-who-title {
            font-size: 43px;
          }

          .about-who-content {
            // margin-top: 50px;

            grid-template-columns: 44% 56%;
          }

          .about-who-description {
            max-width: 570px;

            font-size: 18px;
            line-height: 1.55;
          }

          .about-who-highlight-wrapper {
            padding-left: 30px;
          }

          .about-who-highlight {
            max-width: 650px;

            padding:
              20px
              28px;

            font-size: 21px;
          }

          .about-who-bg-box {
            width: 240px;
            height: 190px;

            right: -5%;
          }
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 1024px) {
          .about-who {
            padding:
              50px
              0;
          }

          .about-who-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .about-who-title {
            font-size: 38px;
          }

          .about-who-content {
            // margin-top: 40px;

            grid-template-columns: 1fr;
            gap: 42px;
          }

          .about-who-description {
            max-width: 750px;

            font-size: 18px;
            line-height: 1.55;
          }

          .about-who-highlight-wrapper {
            min-height: 190px;

            padding-left: 20px;
            padding-right: 20px;
          }

          .about-who-highlight {
            max-width: 780px;

            padding:
              24px
              28px;

            font-size: 21px;
            line-height: 1.35;
          }

          .about-who-bg-box {
            width: 42%;
            height: 190px;

            right: 0;
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 768px) {
          .about-who {
            padding:
              40px
              0;
          }

          .about-who-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .about-who-title {
            font-size: 32px;
            line-height: 1.2;
          }

          .about-who-content {
            // margin-top: 28px;
            gap: 34px;
          }

          .about-who-description {
            font-size: 16px;
            line-height: 1.6;
          }

          .about-who-highlight-wrapper {
            min-height: 185px;

            padding:
              20px
              12px;
          }

          .about-who-bg-box {
            width: 55%;
            height: 165px;

            right: -24px;

            border-radius: 12px;
          }

          .about-who-highlight {
            width: 100%;

            padding:
              22px
              22px;

            font-size: 18px;
            line-height: 1.4;

            border-radius: 10px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================== */

        @media (max-width: 480px) {
          .about-who {
            padding:
              32px
              0;
          }

          .about-who-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .about-who-title {
            font-size: 28px;
          }

          .about-who-content {
            // margin-top: 24px;
            gap: 28px;
          }

          .about-who-description {
            font-size: 15px;
            line-height: 1.55;
          }

          .about-who-highlight-wrapper {
            min-height: 180px;

            padding:
              18px
              8px;
          }

          .about-who-bg-box {
            width: 58%;
            height: 155px;

            right: -20px;
          }

          .about-who-highlight {
            padding:
              20px
              18px;

            font-size: 17px;
            line-height: 1.42;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================== */

        @media (max-width: 360px) {
          .about-who-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .about-who-title {
            font-size: 26px;
          }

          .about-who-description {
            font-size: 14px;
          }

          .about-who-highlight {
            padding:
              18px
              16px;

            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutWho;