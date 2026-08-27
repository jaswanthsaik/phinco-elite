import React from "react";

const AboutWho: React.FC = () => {
  return (
    <section className="about-who">
      <div className="about-who-container">
        <h2 className="about-title">Who We Are</h2>

        <div className="about-content">
          <div className="about-description">
            <div className="accent-line" />
            <p>
              Founded with a vision to empower individuals through industry-relevant skills, Phinco Elite has grown into a platform focused on transforming careers through practical, job-oriented digital education.

Our programs are designed to bridge the gap between learning and industry requirements, offering expert-led training, hands-on projects, real-world tools, and career-focused guidance.
            </p>
          </div>

          <div className="highlight-wrapper">
            <div className="bg-shape" />

            <div className="highlight-card">
              <span>
                At Phinco Elite, we empower learners with in-demand digital skills and help them confidently build successful careers in Data Analytics, Business Analytics, Data Science, AI, and other emerging technologies.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-who {
          width:100%;
          background:linear-gradient(135deg,#ffffff,#f4fbff);
          padding:55px 0;
          font-family:"Satoshi",sans-serif;
          overflow:hidden;
        }

        .about-who-container {
          max-width:1800px;
          margin:auto;
          padding:0 5%;
        }

        .about-title {
          margin:0 0 25px;
          font-size:52px;
          font-weight:800;
          line-height:1.15;
          color:#101828;
          letter-spacing:-1px;
        }

        .about-content {
          display:grid;
          grid-template-columns:45% 55%;
          align-items:center;
          gap:25px;
        }

        .about-description {
          display:flex;
          align-items:flex-start;
          gap:18px;
        }

        .accent-line {
          width:6px;
          min-height:120px;
          border-radius:10px;
          background:linear-gradient(
            180deg,
            #08b6ef,
            #7c3aed
          );
        }

        .about-description p {
          margin:0;
          max-width:680px;
          font-size:22px;
          line-height:1.55;
          font-weight:500;
          color:#344054;
          background:linear-gradient(
            90deg,
            #344054,
            #475467
          );
          -webkit-background-clip:text;
          color:transparent;
        }

        .highlight-wrapper {
          position:relative;
          display:flex;
          align-items:center;
          padding:15px 0 15px 30px;
        }

        .bg-shape {
          position:absolute;
          right:-50px;
          width:320px;
          height:220px;
          background:linear-gradient(
            135deg,
            #dff8ff,
            #eee7ff
          );
          border-radius:30px;
        }

        .highlight-card {
          position:relative;
          z-index:1;
          max-width:850px;
          padding:30px 38px;
          background:#ffffff;
          border-radius:20px;
          border-left:6px solid #08b6ef;
          box-shadow:
            0 15px 40px rgba(16,24,40,.08);
          font-size:26px;
          font-weight:700;
          line-height:1.35;
          color:#344054;
        }

        .highlight-card span {
          background:linear-gradient(
            90deg,
            #344054,
            #007ea7
          );
          -webkit-background-clip:text;
          color:transparent;
        }

        @media(max-width:1200px){
          .about-content {
            grid-template-columns:1fr;
            gap:35px;
          }

          .highlight-wrapper {
            padding-left:0;
          }
        }

        @media(max-width:768px){
          .about-who {
            padding:40px 0;
          }

          .about-title {
            font-size:36px;
            margin-bottom:20px;
          }

          .about-description p {
            font-size:17px;
          }

          .accent-line {
            min-height:90px;
          }

          .highlight-card {
            padding:25px;
            font-size:20px;
          }

          .bg-shape {
            width:220px;
            height:160px;
          }
        }

        @media(max-width:480px){
          .about-who-container {
            padding:0 20px;
          }

          .about-title {
            font-size:30px;
          }

          .about-description {
            gap:12px;
          }

          .highlight-card {
            font-size:18px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutWho;