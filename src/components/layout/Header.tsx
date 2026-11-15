"use client";

import { Flame, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/site";

export function Header() {
  const pathname = usePathname();
  const links = NAV.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname.startsWith(href) ? "page" : undefined}
      className="flex min-h-11 items-center px-3 text-sm font-medium text-ink aria-[current]:underline aria-[current]:underline-offset-8"
    >
      {label}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-10 bg-canvas">
      <div className="container-page relative flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2 font-display text-xl text-ink"
        >
          <Flame aria-hidden className="size-5 text-brand-peach" />
          Hearthlore
        </Link>

        <nav aria-label="주 메뉴" className="hidden md:flex">
          {links}
        </nav>

        {/* key={pathname}: 이동하면 details가 새로 그려지며 닫힌다 — 상태 관리 없이 */}
        <details key={pathname} className="md:hidden">
          <summary
            aria-label="메뉴 열기"
            className="flex size-11 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden className="size-6 text-ink" />
          </summary>
          <nav
            aria-label="주 메뉴"
            className="absolute inset-x-0 top-16 flex flex-col border-b border-hairline bg-canvas px-2 pb-3"
          >
            {links}
          </nav>
        </details>
      </div>
    </header>
  );
}
