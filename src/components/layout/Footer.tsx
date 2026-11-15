import Link from "next/link";
import { NAV } from "@/site";

export function Footer() {
  return (
    <footer className="bg-surface-soft text-sm text-body">
      <div className="container-page flex flex-col gap-10 py-16 md:flex-row md:justify-between md:py-20">
        <div className="max-w-sm">
          <p className="font-display text-xl text-ink">Hearthlore 하스로어</p>
          <p className="mt-3">
            가족이 둘러앉는 따뜻한 벽난로(Hearth), 세대를 이어 전해지는
            이야기(Lore).
          </p>
        </div>
        <nav aria-label="바닥글 메뉴" className="flex flex-col">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex min-h-11 items-center text-ink underline-offset-4 hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="container-page pb-8 text-muted">
        © 2026 Hearthlore. 아이의 행복이 우선, 보호자의 행복은 최우선.
      </p>
    </footer>
  );
}
