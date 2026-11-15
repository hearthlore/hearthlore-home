import type { LucideIcon } from "lucide-react";

// DESIGN.md의 6색 피처 카드. 분홍 위 흰 글씨는 대비 3.1:1이라 본문용으로 부족해 잉크색을 쓴다.
const TONES = {
  pink: "bg-brand-pink text-ink",
  teal: "bg-brand-teal text-white",
  lavender: "bg-brand-lavender text-ink",
  peach: "bg-brand-peach text-ink",
  ochre: "bg-brand-ochre text-ink",
  cream: "bg-surface-card text-ink",
} as const;

export type Tone = keyof typeof TONES;

export function FeatureCard({
  tone,
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  tone: Tone;
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className={`rounded-xl p-8 ${TONES[tone]}`}>
      {Icon && <Icon aria-hidden className="mb-6 size-7" />}
      {eyebrow && (
        <p className="mb-2 text-[13px] font-medium opacity-80">{eyebrow}</p>
      )}
      <h3 className="text-lg font-semibold text-inherit">{title}</h3>
      <div className="mt-3 text-[15px] leading-relaxed">{children}</div>
    </article>
  );
}
