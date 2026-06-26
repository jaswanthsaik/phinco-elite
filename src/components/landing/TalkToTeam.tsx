import counsellor from "@/assets/counsellor.jpg";
import { Phone } from "lucide-react";

export function TalkToTeam() {
  return (
    <section id="counselling" className="bg-white px-4 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#0f0f0f] px-8 py-12 md:px-16 md:py-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-lg font-semibold text-[#f0a93b]">Got more questions?</p>
              <h2 className="mt-2 text-3xl font-extrabold text-white md:text-[40px]">
                Talk to our team directly
              </h2>
              <p className="mt-3 text-base text-gray-300">
                Contact us and our academic counsellor will get in touch with you shortly
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/contact#contactus"
                  className="inline-flex items-center justify-center rounded-md bg-[#22c39a] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow transition hover:bg-[#1aa884]"
                >
                  Enquire Now
                </a>
                <a
                  href="tel:+919177956 87988"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-bold text-[#1f8df0] shadow transition hover:bg-gray-100"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  9912104888
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src={counsellor}
                alt="Academic counsellor"
                loading="lazy"
                className="h-[260px] w-auto object-contain"
                style={{
                  maskImage:
                    "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
