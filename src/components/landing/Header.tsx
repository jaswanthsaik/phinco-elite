import { BookOpen, ChevronDown, ChevronUp, Globe, Layers, Menu, MoreHorizontal, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  subtitle?: string;
  icon?: React.ReactNode;
  href?: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

const navDropdowns: NavDropdown[] = [
  {
    label: "OJT Programs",
    items: [
      { label: "Data Science and AI", subtitle: "Built for AI Professionals", icon: <Layers className="h-4 w-4" />, href: "/programs/data-science-ai" },
      { label: "Service now", subtitle: "Built for IT Professionals", icon: <Layers className="h-4 w-4" /> },
      { label: "Agentic for Developers", subtitle: "Built for Tech Professionals", icon: <Layers className="h-4 w-4" /> },
      { label: "Agentic for Generalist", subtitle: "Built for Non-Tech Professionals", icon: <Layers className="h-4 w-4" /> },
    ],
  },
  {
    label: "PHINCO Eduversity",
    items: [
      { label: "USA", icon: <Globe className="h-4 w-4" /> },
      { label: "Canada", icon: <Globe className="h-4 w-4" /> },
      { label: "UK", icon: <Globe className="h-4 w-4" /> },
      { label: "Ireland", icon: <Globe className="h-4 w-4" /> },
      { label: "Newzealand", icon: <Globe className="h-4 w-4" /> },
      { label: "Australia", icon: <Globe className="h-4 w-4" /> },
      { label: "Europe", icon: <Globe className="h-4 w-4" /> },
      { label: "Asia", icon: <Globe className="h-4 w-4" /> },
    ],
  },
  {
    label: "More",
    items: [
      { label: "Refer and Earn", icon: <MoreHorizontal className="h-4 w-4" /> },
      { label: "Placement Stories", icon: <MoreHorizontal className="h-4 w-4" /> },
      { label: "Blogs", icon: <MoreHorizontal className="h-4 w-4" /> },
      { label: "Hire from us", icon: <MoreHorizontal className="h-4 w-4" /> },
      { label: "About us", icon: <MoreHorizontal className="h-4 w-4" /> },
      { label: "Contact us", icon: <MoreHorizontal className="h-4 w-4" /> },
    ],
  },
];

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
        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-foreground hover:text-brand transition-colors"
      >
        {dropdown.label}
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-brand" />
        ) : (
          <ChevronDown className="h-4 w-4 text-brand" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 rounded-lg border border-border bg-background shadow-lg z-50 py-2">
          {dropdown.items.map((item, idx) => (
            <a
              key={idx}
              href={item.href || "#"}
              className="flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
              onClick={onClose}
            >
              <span className="mt-0.5 text-brand">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleClose = () => setActiveDropdown(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-brand text-primary-foreground font-bold">
            <BookOpen className="h-5 w-5" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight">
              PHINCO <span className="text-brand">ELITE</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wide">Your Career, Our Commitment</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
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

        {/* CTA Button */}
        <a
          href=""
          className="hidden md:inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-brand-dark transition-colors"
        >
          View Programs
        </a>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {navDropdowns.map((dropdown) => (
            <div key={dropdown.label}>
              <button
                onClick={() =>
                  setMobileActiveDropdown((prev) => (prev === dropdown.label ? null : dropdown.label))
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
                <div className="pl-4 pb-2 space-y-1">
                  {dropdown.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href || "#"}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileActiveDropdown(null);
                      }}
                    >
                      {item.label}
                      {item.subtitle && (
                        <span className="block text-xs text-muted-foreground/70">{item.subtitle}</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href=""
            className="inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground mt-2"
            onClick={() => setMobileOpen(false)}
          >
            View Programs
          </a>
        </div>
      )}
    </header>
  );
}
