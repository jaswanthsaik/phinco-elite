import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Gift,
  Info,
  Layers,
  Megaphone,
  Menu,
  Newspaper,
  Phone,
  Trophy,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface CountryItem {
  label: string;
  flagUrl: string;
  href?: string;
}

const eduversityCountries: CountryItem[] = [
  {
    label: "USA",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg",
  },
  {
    label: "Ireland",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ee-1f1ea.svg",
  },
  {
    label: "Europe",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ea-1f1fa.svg",
  },
  {
    label: "Canada",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e8-1f1e6.svg",
  },
  {
    label: "Australia",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e6-1f1fa.svg",
  },
  {
    label: "Asia",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f30f.svg",
  },
  {
    label: "United Kingdom",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ec-1f1e7.svg",
  },
  {
    label: "New Zealand",
    flagUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f3-1f1ff.svg",
  },
];

interface DropdownItem {
  label: string;
  subtitle?: string;
  icon?: ReactNode;
  href?: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

interface OjtSubItem {
  label: string;
  href?: string;
}

interface OjtProgram {
  label: string;
  children: OjtSubItem[];
}

const ojtPrograms: OjtProgram[] = [
 
  {
    label: "Data Science & GenAI",
    children: [
      {
        label: "Data Science & GenAI Developer",
        href: "/dataScienceDevelopers",
      },
      {
        label: "Data Science & GenAI Generalist",
        href: "/dataScienceGeneralist",
      },
    ],
  },
  {
    label: "Services Now",
    children: [
      { label: "Services Now for Generalist", href: "/servicesNowGeneralist" },
    ],
  },
   {
    label: "GenAI & Agentic AI",
    children: [
      { label: "GenAI & Agentic AI Developer", href: "/agenticDevelopers" },
      { label: "GenAI & Agentic AI Generalist", href: "/agenticGeneralist" },
    ],
  },
  {
    label: "Masters",
    children: [
      { label: "Masters for Data Scientists", href: "/mastersDevelopers" },
      { label: "Masters for Full Stack Developers", href: "/mastersGeneralist" },
    ],
  },
];

const navDropdowns: NavDropdown[] = [
  {
    label: "More",
    items: [
      { label: "Refer and Earn", icon: <Gift className="h-5 w-5" /> },
      {
        label: "Placement Stories",
        icon: <Trophy className="h-5 w-5" />,
        href: "/placement-stories",
      },
      {
        label: "Blogs",
        icon: <Newspaper className="h-5 w-5" />,
        href: "/blogs",
      },
      {
        label: "News from us",
        icon: <Megaphone className="h-5 w-5" />,
      },
      {
        label: "About us",
        icon: <Info className="h-5 w-5" />,
        href: "/about",
      },
      {
        label: "Contact us",
        icon: <Phone className="h-5 w-5" />,
        href: "/contact",
      },
    ],
  },
];

const desktopDropdownClass =
  "fixed left-1/2 top-[76px] z-50 w-[720px] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-xl border border-border bg-background shadow-xl";

function OjtMegaMenu({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setActiveIdx(null);
    }
  }, [isOpen]);

  const activeProgram = activeIdx !== null ? ojtPrograms[activeIdx] : null;
  const isExpanded = Boolean(activeProgram);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-brand"
      >
        OJT Programs
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-brand" />
        ) : (
          <ChevronDown className="h-4 w-4 text-brand" />
        )}
      </button>

{isOpen && (
  <div
    className={`fixed left-1/2 top-[76px] z-50 max-w-[calc(100vw-2rem)] translate-x-[-180px] overflow-hidden rounded-xl border border-border bg-background shadow-xl transition-all duration-200 ${
      isExpanded ? "w-[740px]" : "w-[360px]"
    }`}
  >
    <div className="flex px-5 py-6">
      <div
        className={`w-80 shrink-0 space-y-2 ${
          isExpanded ? "border-r border-border pr-4" : ""
        }`}
      >
        {ojtPrograms.map((program, idx) => (
          <button
            key={program.label}
            onMouseEnter={() => setActiveIdx(idx)}
            onFocus={() => setActiveIdx(idx)}
            className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-5 py-4 text-left text-base font-semibold transition-colors ${
              activeIdx === idx
                ? "bg-brand text-primary-foreground"
                : "text-foreground hover:bg-muted/50"
            }`}
          >
            <span className="flex items-center gap-3">
              <Layers className="h-5 w-5 shrink-0" />
              {program.label}
            </span>
            <ChevronRight className="h-5 w-5 shrink-0" />
          </button>
        ))}
      </div>

      {activeProgram && (
        <div className="w-96 shrink-0 pl-4">
          <div className="grid grid-cols-1 gap-3">
            {activeProgram.children.map((child) => (
              <a
                key={child.label}
                href={child.href || "/"}
                onClick={onClose}
                className="rounded-lg border border-border px-5 py-4 transition-colors hover:border-brand hover:bg-muted/40"
              >
                <p className="text-base font-semibold text-foreground">
                  {child.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
}

function EduversityMegaMenu({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-brand"
      >
        PHINCO Eduversity
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-brand" />
        ) : (
          <ChevronDown className="h-4 w-4 text-brand" />
        )}
      </button>

      {isOpen && (
        <div className={`${desktopDropdownClass} p-5`}>
          <div className="grid grid-cols-3 gap-4">
            {eduversityCountries.map((country) => (
              <a
                key={country.label}
                href={country.href || "/"}
                onClick={onClose}
                className="flex min-h-[64px] items-center gap-4 rounded-xl px-5 py-4 transition-colors hover:bg-muted/50"
              >
                <img
                  src={country.flagUrl}
                  alt={country.label}
                  className="h-8 w-8 object-contain"
                />

                <span className="text-sm font-semibold text-foreground">
                  {country.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownMenu({
  dropdown,
  isOpen,
  onToggle,
  onClose,
}: {
  dropdown: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-brand"
      >
        {dropdown.label}
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-brand" />
        ) : (
          <ChevronDown className="h-4 w-4 text-brand" />
        )}
      </button>

      {isOpen && (
        <div className={`${desktopDropdownClass} p-5`}>
          <div className="grid grid-cols-3 gap-4">
            {dropdown.items.map((item, idx) => (
              <a
                key={idx}
                href={item.href || "/"}
                className="flex min-h-[64px] items-center gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-muted/50"
                onClick={onClose}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  {item.icon}
                </span>

                <span className="text-sm font-semibold text-foreground">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(
    null,
  );
  const [mobileActiveProgram, setMobileActiveProgram] = useState<string | null>(
    null,
  );

  const handleToggle = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleClose = () => setActiveDropdown(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-brand font-bold text-primary-foreground">
            <BookOpen className="h-5 w-5" />
          </span>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight">
              PHINCO <span className="text-brand">ELITE</span>
            </span>
            <span className="text-[10px] tracking-wide text-muted-foreground">
              Your Career, Our Commitment
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          <OjtMegaMenu
            isOpen={activeDropdown === "OJT Programs"}
            onToggle={() => handleToggle("OJT Programs")}
            onClose={handleClose}
          />

          <EduversityMegaMenu
            isOpen={activeDropdown === "PHINCO Eduversity"}
            onToggle={() => handleToggle("PHINCO Eduversity")}
            onClose={handleClose}
          />

          {navDropdowns.map((dropdown) => (
            <DropdownMenu
              key={dropdown.label}
              dropdown={dropdown}
              isOpen={activeDropdown === dropdown.label}
              onToggle={() => handleToggle(dropdown.label)}
              onClose={handleClose}
            />
          ))}
        </nav>

        <Link
          to="/"
          hash="programs"
          className="hidden items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-brand-dark md:inline-flex"
        >
          View Programs
        </Link>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="space-y-1 border-t border-border bg-background px-4 py-4 lg:hidden">
          <div>
            <button
              onClick={() =>
                setMobileActiveDropdown((prev) =>
                  prev === "OJT Programs" ? null : "OJT Programs",
                )
              }
              className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-foreground"
            >
              OJT Programs
              {mobileActiveDropdown === "OJT Programs" ? (
                <ChevronUp className="h-4 w-4 text-brand" />
              ) : (
                <ChevronDown className="h-4 w-4 text-brand" />
              )}
            </button>

            {mobileActiveDropdown === "OJT Programs" && (
              <div className="space-y-1 pb-2 pl-4">
                {ojtPrograms.map((program) => (
                  <div key={program.label}>
                    <button
                      onClick={() =>
                        setMobileActiveProgram((prev) =>
                          prev === program.label ? null : program.label,
                        )
                      }
                      className="flex w-full items-center justify-between py-2 text-sm font-semibold text-foreground"
                    >
                      {program.label}
                      {mobileActiveProgram === program.label ? (
                        <ChevronUp className="h-4 w-4 text-brand" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-brand" />
                      )}
                    </button>

                    {mobileActiveProgram === program.label && (
                      <div className="space-y-1 pb-1 pl-4">
                        {program.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href || "/"}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileActiveDropdown(null);
                              setMobileActiveProgram(null);
                            }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() =>
                setMobileActiveDropdown((prev) =>
                  prev === "PHINCO Eduversity" ? null : "PHINCO Eduversity",
                )
              }
              className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-foreground"
            >
              PHINCO Eduversity
              {mobileActiveDropdown === "PHINCO Eduversity" ? (
                <ChevronUp className="h-4 w-4 text-brand" />
              ) : (
                <ChevronDown className="h-4 w-4 text-brand" />
              )}
            </button>

            {mobileActiveDropdown === "PHINCO Eduversity" && (
              <div className="grid grid-cols-2 gap-2 pb-2 sm:grid-cols-3">
                {eduversityCountries.map((country) => (
                  <a
                    key={country.label}
                    href={country.href || "/"}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileActiveDropdown(null);
                    }}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/40"
                  >
                    <img
                      src={country.flagUrl}
                      alt={country.label}
                      className="h-7 w-7 object-contain"
                    />

                    <span className="text-xs font-semibold text-foreground">
                      {country.label}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {navDropdowns.map((dropdown) => (
            <div key={dropdown.label}>
              <button
                onClick={() =>
                  setMobileActiveDropdown((prev) =>
                    prev === dropdown.label ? null : dropdown.label,
                  )
                }
                className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-foreground"
              >
                {dropdown.label}
                {mobileActiveDropdown === dropdown.label ? (
                  <ChevronUp className="h-4 w-4 text-brand" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-brand" />
                )}
              </button>

              {mobileActiveDropdown === dropdown.label && (
                <div className="grid grid-cols-2 gap-2 pb-2 sm:grid-cols-3">
                  {dropdown.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href || "/"}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileActiveDropdown(null);
                      }}
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                        {item.icon}
                      </span>

                      <span className="text-xs font-semibold">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#programs"
            className="mt-2 inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground"
            onClick={() => setMobileOpen(false)}
          >
            View Programs
          </a>
        </div>
      )}
    </header>
  );
}