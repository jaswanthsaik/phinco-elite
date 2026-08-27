import React from "react";

import telescope from "@/assets/telescope.png";
import mission from "@/assets/mission.png";
import coreValues from "@/assets/coreValues.png";

interface DriveCard {
    title: string;
    description: string;
    image: string;
    imageClass: string;
}

const driveCards: DriveCard[] = [
    {
        title: "Our Vision",
        description:
            "Empowering individuals to achieve lasting career success by becoming their trusted partner in lifelong learning and professional growth.",
        image: telescope,
        imageClass: "telescope",
    },
    {
        title: "Our Mission",
        description:
            "Empowering our learners with the right skills, knowledge, and support to achieve their desired career outcomes.",
        image: mission,
        imageClass: "mission",
    },
    {
        title: "Our Core Values",
        description:
            "To empower career success for every learner by being their trusted partner in lifelong learning and professional growth.",
        image: coreValues,
        imageClass: "core-values",
    },
];

const DriveVision: React.FC = () => {
    return (
        <>
            <style>
                {`
        .drive-section {
          width:100%;
          background:#ffffff;
          padding:55px 20px 70px;
        }

        .drive-container {
          max-width:1600px;
          margin:auto;
        }

        .drive-heading {
          font-size:48px;
          font-weight:500;
          color:#050505;
          margin:0 0 45px;
          letter-spacing:-1px;
        }

        .drive-heading span {
          color:#08b6ef;
        }

        .drive-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:28px;
        }

        .drive-card {
          background:#fff;
          border:1px solid #e5e5e5;
          border-radius:18px;
          overflow:hidden;
          height:435px;
          display:flex;
          flex-direction:column;
        }

        .drive-image-wrapper {
          height:220px;
          background:#f7f7f7;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }

        .drive-image {
          width:100%;
          height:100%;
          object-fit:contain;
        }

        .drive-image.telescope {
          width:92%;
          height:92%;
        }

        .drive-image.mission {
          width:82%;
          height:82%;
        }

        .drive-image.core-values {
          width:85%;
          height:85%;
        }

        .drive-content {
          padding:28px;
        }

        .drive-content h3 {
          margin:0 0 14px;
          font-size:24px;
          font-weight:500;
          color:#111;
        }

        .drive-content p {
          margin:0;
          font-size:17px;
          line-height:1.6;
          color:#666;
        }


        @media(max-width:1100px){

          .drive-grid {
            grid-template-columns:repeat(2,1fr);
          }

          .drive-heading {
            font-size:42px;
          }

        }


        @media(max-width:768px){

          .drive-section {
            padding:40px 16px;
          }

          .drive-heading {
            font-size:34px;
            margin-bottom:30px;
          }

          .drive-grid {
            grid-template-columns:1fr;
          }

          .drive-card {
            height:auto;
          }

          .drive-image-wrapper {
            height:200px;
          }

          .drive-content {
            padding:22px;
          }

          .drive-content h3 {
            font-size:22px;
          }

          .drive-content p {
            font-size:16px;
          }

        }
        `}
            </style>


            <section className="drive-section">
                <div className="drive-container">

                    <h2 className="drive-heading">
                        What <span>drives</span> us?
                    </h2>

                    <div className="drive-grid">

                        {driveCards.map((card, index) => (
                            <div className="drive-card" key={index}>

                                <div className="drive-image-wrapper">

                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className={`drive-image ${card.imageClass}`}
                                    />

                                </div>


                                <div className="drive-content">

                                    <h3>
                                        {card.title}
                                    </h3>

                                    <p>
                                        {card.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
};

export default DriveVision;