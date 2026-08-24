import { Phone } from "lucide-react";
import React from "react";
import { Link } from "@tanstack/react-router";

const companies = [
  { name: "Google", domain: "google.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Genpact", domain: "genpact.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "TCS", domain: "https://www.tcs.com/" },

  { name: "Ericsson", domain: "ericsson.com" },
  { name: "Saint-Gobain", domain: "saint-gobain.com" },
  { name: "Sony", domain: "sony.com" },
  { name: "Intuit", domain: "intuit.com" },
  { name: "Gartner", domain: "gartner.com" },
  { name: "Artificial", domain: "https://www.snagged.com/" },

  { name: "Adobe", domain: "adobe.com" },
  { name: "Cisco", domain: "cisco.com" },
  { name: "ZS", domain: "zs.com" },
  { name: "EY", domain: "ey.com" },
  { name: "Amdocs", domain: "amdocs.com" },
  { name: "Mu Sigma", domain: "mu-sigma.com" },

  { name: "HCL", domain: "https://www.hcltech.com/" },
  { name: "FAI", domain: "https://www.ltm.com/" },
  { name: "Yokogawa", domain: "yokogawa.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Societe Generale", domain: "societegenerale.com" },
  { name: "Samsung", domain: "samsung.com" },

  { name: "DHL", domain: "dhl.com" },
  { name: "FedEx", domain: "fedex.com" },
  { name: "PayPal", domain: "paypal.com" },
  { name: "Bosch", domain: "bosch.com" },
  { name: "Asian Paints", domain: "asianpaints.com" },
  { name: "EMIDS", domain: "emids.com" },

  { name: "eClerx", domain: "eclerx.com" },
  { name: "Nasdaq", domain: "nasdaq.com" },
  { name: "Persistent", domain: "persistent.com" },
  { name: "CSS Corp", domain: "csscorp.com" },
  { name: "Micro Focus", domain: "microfocus.com" },
  { name: "HGS", domain: "teamhgs.com" },
];

const PartnerLogosGrid: React.FC = () => {
  return (
    <section className="logo-section">
      <div className="logo-container">

        <div className="logo-grid">
          {companies.map((company) => (
            <div className="logo-box" key={company.name}>

              <img
                src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`}
                alt={company.name}
              />

              <span>{company.name}</span>

            </div>
          ))}
        </div>

      </div>
       <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-center">
      <Link
                      to="/contact"
                      hash="contactus"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto sm:text-base"
                    >
                       <Phone className="h-4 w-4" />
                      Get Expert Call
            </Link>
        </div>

      <style>{`
        .logo-section {
          width:100%;
          padding:40px 20px 70px;
          background:#fff;
        }

        .logo-container {
          max-width:1200px;
          margin:auto;
        //   border-top:2px solid #333;
          padding-top:20px;
        }

        .logo-grid {
          display:grid;
          grid-template-columns:repeat(6,1fr);
          gap:14px;
        }

        .logo-box {
          height:72px;
          border:1px solid #eeeeee;
          background:#fff;

          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;

          padding:10px;

          transition:.2s ease;
        }

        .logo-box:hover {
          transform:translateY(-3px);
          box-shadow:0 5px 15px rgba(0,0,0,.08);
        }


        .logo-box img {
          width:42px;
          height:42px;
          object-fit:contain;
        }


        .logo-box span {
          font-size:12px;
          color:#555;
          font-weight:600;
          display:none;
        }


        @media(max-width:1000px){
          .logo-grid {
            grid-template-columns:repeat(4,1fr);
          }
        }


        @media(max-width:600px){
          .logo-grid {
            grid-template-columns:repeat(2,1fr);
          }
        }

      `}</style>

    </section>
  );
};

export default PartnerLogosGrid;