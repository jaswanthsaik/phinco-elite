import contactHero from "@/assets/contact-hero.jpg";
import { CounsellingForm } from "@/components/landing/CounsellingForm";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { createFileRoute } from "@tanstack/react-router";
// import { Mail, MapPin, Phone } from "lucide-react"; // used by commented HereToHelp section

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact us — Phinco Elite" },
      { name: "description", content: "Got a course in mind? Reach Phinco Elite by phone, email, WhatsApp or visit our office." },
      { property: "og:title", content: "Contact us — Phinco Elite" },
      { property: "og:description", content: "Reach Phinco Elite by phone, email, WhatsApp or visit our office." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHero />
        {/* "We`re Here To Help You" section commented out per request */}
        {/* <HereToHelp /> */}
        <CounsellingForm />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

/* 1. Contact Us hero banner */
function ContactHero() {
  return (
    <section className="bg-[oklch(0.97_0.02_240)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl text-center lg:text-center">
          Contact Us
        </h1>
        <div className="flex justify-center lg:justify-center">
          <img
            src={contactHero}
            alt="Contact us"
            width={1024}
            height={576}
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/* 2. We're Here To Help You — commented out per request
const helpCards = [
  {
    icon: <MapPin className="h-7 w-7" />,
    title: "HSR Layout",
    body: (
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        #1090, 1st floor, 18th cross road HSR layout sector 3, Bangalore - 560102 (Above Sangam Sweets)
      </p>
    ),
  },
  {
    icon: <Mail className="h-7 w-7" />,
    title: "Contact Us",
    body: (
      <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-1">
        <p>Email :- <a href="mailto:contacts@phincoelite.co" className="hover:text-brand">contacts@phincoelite.co</a></p>
        <p>Phone :- <a href="tel:+917795687988" className="hover:text-brand">(+91) 77956 87988</a></p>
      </div>
    ),
  },
  {
    icon: <Phone className="h-7 w-7" />,
    title: "Whatsapp",
    body: (
      <a
        href="https://wa.me/917349222263"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2 text-sm sm:text-base font-semibold text-primary-foreground hover:opacity-90"
      >
        (+91) 7349222263
      </a>
    ),
  },
];

function HereToHelp() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl text-center lg:text-left">
          We`re Here To Help You
        </h2>
        <p className="mt-3 text-center text-sm sm:text-base text-muted-foreground">
          Got A Course In Mind? We'd Love To Hear And Help You Decide On A Course.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpCards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background px-6 py-8 text-center shadow-sm"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-brand text-brand">
                {c.icon}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">{c.title}</h3>
              <div>{c.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
*/
