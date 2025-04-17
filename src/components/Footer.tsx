"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

import { routes } from "./Header";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 1 && pathName.includes(route.href)
    ) || routes[0];

  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center bg-[#333A44] px-6 py-16 sm:h-24 sm:flex-row sm:justify-between sm:py-0 lg:px-16">
      <div className="flex flex-col items-center justify-center gap-y-12 sm:flex-row sm:justify-between sm:gap-x-16">
        <Link href="/">
          <Image
            src="/assets/logo-white.svg"
            alt="logo"
            width={100}
            height={29}
          />
        </Link>
        <nav className="flex flex-col items-center justify-center sm:flex-row">
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
      <div className="mt-20 flex items-center gap-x-4 sm:mt-0">
        <Link href="/">
          <ImFacebook2 className="size-5 fill-[#FCB72B] hover:fill-white" />
        </Link>
        <Link href="/">
          <FaXTwitter className="size-5 fill-[#FCB72B] hover:fill-white" />
        </Link>
        <Link href="/">
          <FaInstagram className="size-5 fill-[#FCB72B] hover:fill-white" />
        </Link>
      </div>
    </footer>
  );
}
