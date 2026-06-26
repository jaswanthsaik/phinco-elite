import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

// Pulled from the header OJT Programs mega menu
const COURSES: FooterLink[] = [
  { label: "GenAI & Agentic AI Developer", href: "/agenticDevelopers" },
  { label: "GenAI & Agentic AI Generalist", href: "/agenticGeneralist" },
  { label: "Data Science & GenAI Developer", href: "/dataScienceDevelopers" },
  { label: "Data Science & GenAI Generalist", href: "/dataScienceGeneralist" },
  { label: "Services Now for Developer", href: "/servicesNowDevelopers" },
  { label: "Services Now for Generalist", href: "/servicesNowGeneralist" },
  { label: "Masters for Data Scientists", href: "/mastersDevelopers" },
  { label: "Masters for Full Stack Developers", href: "/mastersGeneralist" },
];

// Pulled from the header PHINCO Eduversity mega menu
const EDUVERSITY: FooterLink[] = [
  { label: "USA", href: "/" },
  { label: "Ireland", href: "/" },
  { label: "Europe", href: "/" },
  { label: "Canada", href: "/" },
  { label: "Australia", href: "/" },
  { label: "Asia", href: "/" },
  { label: "United Kingdom", href: "/" },
  { label: "New Zealand", href: "/" },
];

// Pulled from the header More dropdown + pages
const COMPANY: FooterLink[] = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
  { label: "Placement Stories", href: "/placement-stories" },
  { label: "Refer and Earn", href: "/" },
  { label: "News from us", href: "/" },
];

const POLICIES: FooterLink[] = [
  {
    label: "Terms and Conditions",
    href: "https://phincoelite.com/Terms%20&%20Conditions",
    external: true,
  },
  {
    label: "Privacy Policy",
    href: "https://phincoelite.com/Privacy-Policy",
    external: true,
  },
  {
    label: "Refund Policy",
    href: "https://phincoelite.com/Return%20and%20Refund%20Policy",
    external: true,
  },
  { label: "Help", href: "https://phincoelite.com/Help", external: true },
];

const SOCIAL = [
  { label: "Twitter", href: "https://twitter.com", Icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  return (
    <a
      href={link.href}
      {...(link.external
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
      className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-brand"
    >
      {link.label}
    </a>
  );
}

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-foreground">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterAnchor link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-brand text-sm font-bold text-primary-foreground">
                P
              </span>
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                PHINCO <span className="text-brand">ELITE</span>
              </span>
            </div>

            <p className="mt-4 text-sm font-semibold text-foreground">
              Your Career, Our Commitment
            </p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building phenomenal outcomes with industry-oriented tech education
              and dedicated placement support.
            </p>

            <p className="mt-8 text-sm font-bold text-foreground">Follow us</p>
            <div className="mt-3 flex items-center gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-brand"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Courses" links={COURSES} />
          <LinkColumn title="Eduversity" links={EDUVERSITY} />
          <LinkColumn title="Company" links={COMPANY} />
        </div>

        {/* Policy + office content (styled like the brand footer) */}
        <div className="mt-12 border-t border-border pt-10 text-center">
          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
            {POLICIES.map((link, idx) => (
              <span key={link.label} className="flex items-center gap-3">
                <FooterAnchor link={link} />
                {idx < POLICIES.length - 1 && (
                  <span className="text-muted-foreground">•</span>
                )}
              </span>
            ))}
          </nav>

          <div className="mt-8">
            <p className="text-sm font-bold text-brand">India Office</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Address: T-Hub, Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha,
              Hyderabad Knowledge City, Serilingampally, Hyderabad, Telangana
              500081
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Phone: +91-9912104888
            </p>
          </div>

          <div className="mt-6">
            <p className="text-sm font-bold text-brand">UK Office</p>
            <p className="mt-2 text-sm text-muted-foreground">
              241E, High Street North, London - E12 6SJ, United Kingdom
            </p>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Phinco Elite. All rights reserved.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-xs italic leading-relaxed text-muted-foreground">
            Disclaimer: Phinco Elite provides training and career support
            including resume building, mock interviews, and referrals. Placement
            depends on candidate performance and market demand. No job or salary
            is guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
