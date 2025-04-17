"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MenuIcon } from "lucide-react";

import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const routes = [
  { label: "Home", href: "/" },
  { label: "About", href: "about" },
  { label: "Careers", href: "careers" },
  { label: "Locations", href: "locations" },
];

export default function Header() {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 1 && pathName.includes(route.href)
    ) || routes[0];

  return (
    <header className="container flex h-16 items-center justify-between px-6 py-4 sm:h-24">
      <div className="flex items-center gap-x-16">
        {/* Mobile Navbar */}
        <MobileSidebar />
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={100} height={29} />
        </Link>
        {/* Desktop Navbar */}
        <nav className="hidden sm:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={buttonVariants({
                variant:
                  activeRoute.href === route.href
                    ? "navbarItemActive"
                    : "navbarItem",
              })}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <Button variant={"navbarButton"} className="hidden sm:flex" size={"lg"}>
        Get Scootin
      </Button>
    </header>
  );
}

export function MobileSidebar() {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href)
    ) || routes[0];
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="flex flex-col justify-between bg-[#333A44] px-6 pt-16 pb-8"
          side="left"
        >
          <nav className="flex flex-col items-start">
            {routes.map((route) => {
              return (
                <Link
                  href={route.href}
                  key={route.label}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? "navbarItemActive"
                        : "navbarItemMobile",
                  })}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>
          <Button variant={"navbarButton"} size={"lg"} asChild>
            <Link href="/locations">Get Scootin</Link>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
