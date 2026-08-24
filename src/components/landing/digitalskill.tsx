import React from "react";
import bannerImage from "@/assets/about-us-banner-destop_v1.png";

const DigitalSkill: React.FC = () => {
  return (
    <section className="digital-skill">
      <div className="digital-skill-background" />

      <div className="digital-skill-content">
        <h1 className="digital-skill-title">
          We Transform Lives
          <br />
          by Empowering
          <br />
          People Via <span>Digital</span>
          <br />
          <span>Skills.</span>
        </h1>

        <div className="digital-skill-stats">
          <div className="stat-item">
            <h3>8M+</h3>
            <div className="stat-line" />
            <p>Careers Advanced</p>
          </div>

          <div className="stat-divider" />

          <div className="stat-item stat-middle">
            <h3>1,500+</h3>
            <div className="stat-line" />
            <p>Live classes per month</p>
          </div>

          <div className="stat-divider" />

          <div className="stat-item stat-last">
            <h3>400+</h3>
            <div className="stat-line" />
            <p>Courses</p>
          </div>
        </div>
      </div>

      <style>{`
        .digital-skill {
          position: relative;
          width: 100%;

          /*
           * Original banner ratio: 1892 x 833
           * This is important.
           * It prevents the image from zooming/cropping.
           */
          aspect-ratio: 1892 / 833;

          overflow: hidden;
          background: #ffffff;

          font-family: "Satoshi", Sans-serif;
        }

        .digital-skill-background {
          position: absolute;
          inset: 0;

          background-image: url(${bannerImage});
          background-repeat: no-repeat;

          /*
           * IMPORTANT:
           * Don't use cover here.
           *
           * The supplied banner was already designed
           * with the correct fade/people positioning.
           */
          background-size: 100% 100%;
          background-position: center;

          z-index: 0;
        }

        .digital-skill-content {
          position: absolute;
          inset: 0;

          z-index: 2;
        }

        /* =========================
           HEADING
        ========================= */

        .digital-skill-title {
          position: absolute;

          top: 19.5%;
          left: 4.7%;

          margin: 0;

          font-family: "Satoshi", Sans-serif;
          font-size: 56px;
          font-weight: 700;
          line-height: 64px;
          letter-spacing: -0.02em;

          color: #051027;

          max-width: 760px;
        }

        .digital-skill-title span {
          color: #0878f5;
        }

        /* =========================
           STATISTICS
        ========================= */

        .digital-skill-stats {
          position: absolute;

          left: 5.4%;
          bottom: 11.5%;

          display: flex;
          align-items: stretch;
        }

        .stat-item {
          width: 205px;
        }

        .stat-middle {
          width: 280px;
        }

        .stat-last {
          width: 105px;
        }

        .stat-item h3 {
          margin: 0;

          font-family: "Satoshi", Sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 44px;
          letter-spacing: -0.02em;

          color: #051027;
        }

        .stat-line {
          width: 100%;
          height: 2px;

          margin-top: 10px;
          margin-bottom: 10px;

          background: #f49a00;
        }

        .stat-item p {
          margin: 0;

          font-family: "Satoshi", Sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;

          color: #111111;

          white-space: nowrap;
        }

        .stat-divider {
          width: 1px;

          margin:
            5px
            36px;

          background: #dfe6ee;
        }

        /* =========================
           LAPTOP
        ========================= */

        @media (max-width: 1500px) {
          .digital-skill-title {
            font-size: 46px;
            line-height: 54px;

            top: 17%;
          }

          .stat-item h3 {
            font-size: 30px;
            line-height: 38px;
          }

          .stat-item p {
            font-size: 16px;
            line-height: 23px;
          }

          .stat-item {
            width: 170px;
          }

          .stat-middle {
            width: 230px;
          }

          .stat-last {
            width: 90px;
          }

          .stat-divider {
            margin-left: 28px;
            margin-right: 28px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1100px) {
          .digital-skill-title {
            top: 15%;
            left: 4%;

            font-size: 38px;
            line-height: 45px;

            max-width: 500px;
          }

          .digital-skill-stats {
            left: 4.5%;
            bottom: 9%;
          }

          .stat-item {
            width: 135px;
          }

          .stat-middle {
            width: 180px;
          }

          .stat-last {
            width: 75px;
          }

          .stat-item h3 {
            font-size: 25px;
            line-height: 31px;
          }

          .stat-item p {
            font-size: 13px;
            line-height: 18px;
          }

          .stat-divider {
            margin-left: 20px;
            margin-right: 20px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 768px) {
          .digital-skill {
            aspect-ratio: auto;

            // min-height: 650px;

            background: #ffffff;
          }

          /*
           * On mobile we handle the wide banner
           * separately so it doesn't become zoomed.
           */
          .digital-skill-background {
            // height: 230px;

            background-size: auto 230px;

            /*
             * Increase percentage to move people left.
             */
            background-position: 62% top;
          }

          /*
           * Fade image into the white content.
           */
          .digital-skill::after {
            content: "";

            position: absolute;

            top: 110px;
            left: 0;
            right: 0;

            height: 190px;

            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.45) 25%,
              rgba(255, 255, 255, 0.92) 65%,
              #ffffff 100%
            );

            z-index: 1;
            pointer-events: none;
          }

          .digital-skill-content {
            position: relative;

            // min-height: 650px;

            // padding:
            //   185px
            //   28px
            //   30px;
          }

          .digital-skill-title {
            position: relative;

            top: auto;
            left: auto;

            font-size: 32px;
            line-height: 39px;
            letter-spacing: -0.02em;

            max-width: 350px;
          }

          .digital-skill-stats {
            position: relative;

            left: auto;
            bottom: auto;

            margin-top: 45px;

            width: 100%;

            display: flex;
            flex-direction: column;

            gap: 18px;
          }

          .stat-divider {
            display: none;
          }

          .stat-item,
          .stat-middle,
          .stat-last {
            width: 100%;

            display: flex;
            align-items: center;
          }

          .stat-item h3 {
            font-size: 22px;
            line-height: 28px;

            white-space: nowrap;
          }

          .stat-line {
            width: 2px;
            height: 35px;

            flex-shrink: 0;

            margin:
              0
              12px;
          }

          .stat-item p {
            font-size: 16px;
            line-height: 22px;

            white-space: normal;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {
          .digital-skill {
            // min-height: 620px;
          }

          .digital-skill-background {
            // height: 220px;

            background-size: auto 220px;

            /*
             * People slightly toward left.
             */
            background-position: 64% top;
          }

          .digital-skill-content {
            // min-height: 620px;

            padding:
              25px;
          }

          .digital-skill-title {
            font-size: 28px;
            line-height: 35px;

            max-width: 310px;
          }

          .digital-skill-stats {
            margin-top: 38px;
            gap: 16px;
          }

          .stat-item h3 {
            font-size: 20px;
          }

          .stat-item p {
            font-size: 14px;
          }
        }

        @media (max-width: 360px) {
          .digital-skill-title {
            font-size: 26px;
            line-height: 33px;
          }

          .digital-skill-content {
            padding-left: 18px;
            padding-right: 18px;
          }

          .stat-item h3 {
            font-size: 18px;
          }

          .stat-item p {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default DigitalSkill;