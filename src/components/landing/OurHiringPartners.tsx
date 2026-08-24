import React from "react";

type Company = {
  name: string;
  domain: string;
};

type PartnerCategory = {
  title: string;
  companies: Company[];
};

const partnerCategories: PartnerCategory[] = [
  {
    title: "Global IT / Tech",
    companies: [
      { name: "Amazon", domain: "amazon.com" },
      { name: "Google", domain: "google.com" },
      { name: "Microsoft", domain: "microsoft.com" },
      { name: "TCS", domain: "https://www.tcs.com/" },
      { name: "Infosys", domain: "infosys.com" },
      { name: "Wipro", domain: "wipro.com" },
      { name: "HCL", domain: "https://hcl.com/" },
      { name: "Cognizant", domain: "cognizant.com" },
      { name: "Cisco", domain: "cisco.com" },
      { name: "IBM", domain: "ibm.com" },
    ],
  },
  {
    title: "Core Analytics",
    companies: [
      { name: "ZS Associates", domain: "zs.com" },
      { name: "Mu Sigma", domain: "mu-sigma.com" },
      { name: "Fractal", domain: "fractal.ai" },
      { name: "LatentView", domain: "latentview.com" },
      { name: "Novartis", domain: "novartis.com" },
      { name: "LTIMindtree", domain: "https://www.ltm.com/" },
      { name: "Genpact", domain: "genpact.com" },
      { name: "Absolutdata", domain: "https://www.insightplatforms.com/" },
      { name: "NTT DATA", domain: "https://www.nttdata.com/global/en/" },
      { name: "EXL", domain: "exlservice.com" },
    ],
  },
  {
    title: "Business Consulting",
    companies: [
      { name: "BCG", domain: "bcg.com" },
      { name: "Deloitte", domain: "deloitte.com" },
      { name: "McKinsey", domain: "https://www.mckinsey.com/" },
      { name: "Accenture", domain: "accenture.com" },
      { name: "Bain & Company", domain: "bain.com" },
      { name: "EY", domain: "ey.com" },
      { name: "PwC", domain: "pwc.com" },
      { name: "Kearney", domain: "kearney.com" },
    { name: "Oliver Wyman", domain: "oliverwyman.com" },
    { name: "Roland Berger", domain: "rolandberger.com" },
    ],
  },
  {
    title: "Finance / Product",
    companies: [
      { name: "Kotak Mahindra", domain: "kotak.com" },
      { name: "HSBC", domain: "hsbc.com" },
      { name: "ICICI Bank", domain: "icicibank.com" },
      { name: "Citi", domain: "citi.com" },
      { name: "Walmart", domain: "walmart.com" },
      { name: "Razorpay", domain: "razorpay.com" },
      { name: "American Express", domain: "americanexpress.com" },
      { name: "Standard Chartered", domain: "sc.com" },
      { name: "Uber", domain: "uber.com" },
      { name: "Apple", domain: "apple.com" },
    ],
  },
];

const getLogoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const OurHiringPartners: React.FC = () => {
  return (
    <section className="hiring-partners-section">
      <div className="hiring-container">
        <div className="hiring-heading">
          <h2>Our Hiring Partners</h2>

          <p>
            Our graduates are hired by leading industry giants, top MNCs, and
            high-growth startups across the nation.
          </p>
        </div>

        <div className="partner-wrapper">
          {partnerCategories.map((category) => (
            <div className="partner-category" key={category.title}>
              <h3>{category.title}</h3>

              <div className="company-grid">
                {category.companies.map((company) => (
                  <div
                    className="company-card"
                    key={company.name}
                    title={company.name}
                  >
                    <img
                      src={getLogoUrl(company.domain)}
                      alt={`${company.name} logo`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";

                        const sibling =
                          event.currentTarget
                            .nextElementSibling as HTMLElement | null;

                        if (sibling) {
                          sibling.style.display = "flex";
                        }
                      }}
                    />

                    <div className="logo-fallback">
                      {company.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .substring(0, 3)
                        .toUpperCase()}
                    </div>

                    <span>{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hiring-partners-section {
          width: 100%;
          background: #f4fafb;
          padding: 55px 20px 70px;
          font-family: Inter, Arial, sans-serif;
        }

        .hiring-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .hiring-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .hiring-heading h2 {
          margin: 0 0 30px;
          font-size: 32px;
          font-weight: 700;
          color: #17202a;
        }

        .hiring-heading p {
          margin: 0;
          color: #53616f;
          font-size: 17px;
          line-height: 1.6;
        }

        .partner-wrapper {
          background: #ffffff;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #eaedef;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .partner-category {
          padding: 20px 16px 24px;
          border-right: 1px solid #eceff1;
        }

        .partner-category:last-child {
          border-right: none;
        }

        .partner-category h3 {
          text-align: center;
          font-size: 17px;
          font-weight: 700;
          color: #222;
          margin: 0 0 20px;
          min-height: 24px;
        }

        .company-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .company-card {
          height: 105px;
          padding: 12px 8px;
          border: 1px solid #edf0f2;
          border-radius: 8px;
          background: #ffffff;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .company-card:hover {
          transform: translateY(-3px);
          border-color: #dce3e7;
          box-shadow: 0 7px 18px rgba(0, 0, 0, 0.08);
        }

        .company-card img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          margin-bottom: 8px;
        }

        .company-card span {
          width: 100%;
          text-align: center;
          color: #454c53;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .logo-fallback {
          width: 50px;
          height: 50px;
          display: none;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #f0f3f5;
          color: #263238;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        @media (max-width: 1100px) {
          .partner-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }

          .partner-category:nth-child(2) {
            border-right: none;
          }

          .partner-category:nth-child(-n + 2) {
            border-bottom: 1px solid #eceff1;
          }
        }

        @media (max-width: 650px) {
          .hiring-partners-section {
            padding: 35px 12px 45px;
          }

          .hiring-heading h2 {
            font-size: 27px;
            margin-bottom: 18px;
          }

          .hiring-heading p {
            font-size: 14px;
          }

          .partner-wrapper {
            grid-template-columns: 1fr;
          }

          .partner-category {
            border-right: none;
            border-bottom: 1px solid #eceff1;
          }

          .partner-category:last-child {
            border-bottom: none;
          }

          .company-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default OurHiringPartners;