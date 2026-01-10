"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu, Phone } from "lucide-react";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "בית",
  },
  {
    href: "/services",
    label: "שירותים",
  },
  {
    href: "/gallery",
    label: "גלריה",
  },
  {
    href: "/about",
    label: "אודות",
  },
  {
    href: "/contact",
    label: "צור קשר",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full border-b-slate-700 bg-background">
      <div className="container h-14 px-4 flex items-center justify-between">
        {/* Logo - Right side in RTL */}
        <Link
          href="/"
          className="font-bold text-xl flex items-center group"
        >
          <LogoIcon />
          <span className="transition-colors duration-300 group-hover:text-primary">ArtVibe</span>
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center gap-1">
          {routeList.map((route: RouteProps, i) => (
            <Link
              href={route.href}
              key={i}
              className={`text-[17px] ${buttonVariants({
                variant: "ghost",
              })} ${pathname === route.href ? "text-primary font-semibold" : ""}`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button - Left side in RTL */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className={`border ${buttonVariants({ variant: "secondary" })}`}
          >
            <Phone className="ml-2 w-5 h-5" />
            צור קשר
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="px-2" aria-label="פתח תפריט">
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-lg border-r border-border/50">
              <SheetHeader className="border-b border-border/50 pb-6">
                <SheetTitle className="font-bold text-2xl flex items-center justify-center gap-2">
                  <LogoIcon />
                  <span className="bg-gradient-to-l from-primary to-orange-400 text-transparent bg-clip-text">ArtVibe</span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  תפריט ניווט ראשי
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-2 mt-8 px-2">
                {routeList.map(({ href, label }: RouteProps) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      relative py-3 px-4 rounded-xl text-lg font-medium
                      transition-all duration-300 ease-out
                      ${pathname === href
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "hover:bg-muted/50 text-foreground/80 hover:text-foreground"
                      }
                    `}
                  >
                    {pathname === href && (
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-l-full" />
                    )}
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="absolute bottom-8 left-4 right-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium text-lg transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  <Phone className="w-5 h-5" />
                  צור קשר
                </Link>

                <p className="text-center text-muted-foreground text-sm mt-4">
                  ציורי שמן ואקוורל מקוריים
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
