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
          className="font-bold text-xl flex items-center"
        >
          <LogoIcon />
         ArtVibe
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center gap-1">
          {routeList.map((route: RouteProps, i) => (
            <Link
              href={route.href}
              key={i}
              className={`text-[17px] ${buttonVariants({
                variant: "ghost",
              })} ${pathname === route.href ? "bg-accent" : ""}`}
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
            <SheetTrigger className="px-2">
              <Menu className="h-5 w-5" onClick={() => setIsOpen(true)}>
                <span className="sr-only">Menu Icon</span>
              </Menu>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="font-bold text-xl">
                  דוד כהן - אמן
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                {routeList.map(({ href, label }: RouteProps) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`w-[140px] border ${buttonVariants({
                    variant: "secondary",
                  })}`}
                >
                  <Phone className="ml-2 w-5 h-5" />
                  צור קשר
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
