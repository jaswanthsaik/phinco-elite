import { useEffect, useState } from "react";
import facebook from "@/assets/facebook.webp";
import google from "@/assets/google-business.webp";
import meta from "@/assets/meta-business.webp";
import nascommRed from "@/assets/Nasscom-red.webp";
import nascomm from "@/assets/Nasscom.webp";

const partners = [
  {
    src: nascommRed,
    alt: "NSDC",
  },
  {
    src: google,
    alt: "Google for Education",
  },
  {
    src: meta,
    alt: "Meta Partner",
  },
  {
    src: facebook,
    alt: "Facebook Blueprint",
  },
  {
    src: nascomm,
    alt: "Nasscom",
  },
];

const Aspire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 5;


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= partners.length ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  const displayedPartners = Array.from(
    { length: visibleCount },
    (_, index) =>
      partners[(currentIndex + index) % partners.length]
  );


  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-6xl px-4">

        <h2
          className="
            mb-4
            text-center
            text-3xl
            font-bold
            text-[#00bfff]
            md:text-4xl
          "
        >
          We are Accredited & Collaborated with
        </h2>


        <p
          className="
            mx-auto
            mb-10
            max-w-4xl
            text-center
            text-base
            leading-7
            text-black
          "
        >
          At Phinco Elite, we believe in building trusted learning ecosystems.
          We’ve partnered with globally recognized institutions, government
          bodies, and tech giants to bring the most relevant, industry-aligned
          training to our learners.
        </p>


        {/* Logo Carousel */}
        <div
          className="
            overflow-hidden
          "
        >

          <div
            className="
              flex
              items-center
              justify-center
              gap-8
              transition-all
              duration-500
            "
          >

            {displayedPartners.map((partner, index) => (

              <div
                key={`${partner.alt}-${index}`}
                className="
                  flex
                  h-32
                  w-48
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  p-6
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              >

                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="
                    max-h-20
                    max-w-[140px]
                    object-contain
                  "
                />

              </div>

            ))}

          </div>

        </div>


        {/* Indicators */}
        <div
          className="
            mt-8
            flex
            justify-center
            gap-2
          "
        >

          {partners.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300

                ${
                  currentIndex === index
                    ? "w-8 bg-[#00bfff]"
                    : "w-2.5 bg-gray-300"
                }
              `}
            />

          ))}

        </div>


        <p
          className="
            mx-auto
            mt-10
            max-w-4xl
            text-center
            text-base
            leading-7
            text-black
          "
        >
          Whether it’s through NSDC’s framework or NASSCOM’s standards, our
          students gain industry credibility and job-readiness via global
          certifications.
        </p>

      </div>

    </section>
  );
};


export default Aspire;