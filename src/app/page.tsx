import { ArrowRight, HeartHandshake, Leaf, TreePine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { DEVLOG } from "@/site";

export default function Home() {
  return (
    <>
      {/* hero-band: 7/5 분할 */}
      <section className="section container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">Hearthlore · 하스로어</p>
          <h1 className="display-xl mt-4">
            벽난로 앞에 둘러앉아, 함께 읽는 이야기
          </h1>
          <p className="lead mt-6 max-w-xl">
            하스로어는 가족이 둘러앉는 따뜻한 벽난로(Hearth)와 세대를 이어
            전해지는 이야기(Lore)를 만드는 게임 스튜디오입니다. 아이를 화면에
            붙잡아 두는 대신, 엄마·아빠 무릎 위에서 완성되는 놀이를 만듭니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/games/paper-seasons" className="btn btn-primary">
              치치의 사계절 그림책 <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link href="/about" className="btn btn-secondary">
              스튜디오 이야기
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl bg-surface-soft lg:col-span-5">
          <Image
            src="/images/spring-house.png"
            alt="치치네 가족이 사는 3층 한지 팝업 인형의 집"
            width={1440}
            height={1080}
            preload
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      {/* 대표작 */}
      <section className="container-page">
        <div className="grid items-center gap-8 rounded-xl bg-brand-teal p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs font-semibold tracking-[1.5px] uppercase opacity-70">
              지금 만들고 있는 작품
            </p>
            <h2 className="display-md mt-3 text-inherit">
              치치의 사계절 그림책
            </h2>
            <p className="mt-4 text-white/85">
              아기 고슴도치 치치와 함께 봄·여름·가을·겨울을 걷는, 만 3~5세를
              위한 한지 팝업 그림책. 책을 펼치면 종이 집과 마당이 솟아오르고,
              아이는 치치의 단짝이 되어 이야기 속으로 들어갑니다.
            </p>
            <Link
              href="/games/paper-seasons"
              className="btn mt-8 bg-canvas text-ink"
            >
              작품 소개 보기 <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <div className="rounded-lg bg-surface-soft p-6">
            <Image
              src="/images/chichi.png"
              alt="이마에 하늘색 컬 가시가 있는 아기 고슴도치 치치"
              width={1024}
              height={1024}
              sizes="(min-width: 768px) 30vw, 80vw"
              className="breathe mx-auto w-full max-w-xs mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* 하스로어의 방식 */}
      <section className="section container-page">
        <p className="eyebrow">하스로어의 방식</p>
        <h2 className="display-lg mt-3 max-w-3xl">
          함께할 때 더 재밌는 놀이를 만듭니다
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard tone="pink" icon={HeartHandshake} title="혼자보다 함께">
            아이 혼자서도 할 수 있어요. 하지만 보호자와 눈을 맞추고 이야기
            나눌 때 비로소 완성되도록 만듭니다. 자동 다음 화도, 매일 접속
            보상도 없습니다.
          </FeatureCard>
          <FeatureCard tone="lavender" icon={Leaf} title="은은하고 차분하게">
            시선을 빼앗는 원색과 빠른 화면 전환 대신 닥나무 한지의 결, 누름꽃,
            어쿠스틱 악기의 느긋한 호흡으로 마음을 편안하게 합니다.
          </FeatureCard>
          <FeatureCard tone="peach" icon={TreePine} title="화면 밖으로의 초대장">
            바깥에서 뛰어노는 것이 백 번 좋습니다. 이야기가 끝나면 책을 덮고
            진짜 공원과 숲으로 나가고 싶어지도록 마무리합니다.
          </FeatureCard>
        </div>
        <Link
          href="/about"
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4"
        >
          우리가 지키는 약속 모두 보기
        </Link>
      </section>

      {/* 제작자의 말 */}
      <section className="container-page">
        <figure className="rounded-lg bg-surface-card p-8 md:p-12">
          <blockquote className="display-sm max-w-4xl text-ink">
            아이의 행복이 우선입니다. 그리고 보호자의 행복은 최우선입니다.
            행복한 보호자의 아이는 행복합니다.
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted">
            제작자의 말 중에서 ·{" "}
            <Link href="/about#letter" className="text-ink underline">
              전문 읽기
            </Link>
          </figcaption>
        </figure>
      </section>

      {/* 최근 소식 */}
      <section className="section container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">개발 일지</p>
            <h2 className="display-lg mt-3">요즘 만들고 있는 것들</h2>
          </div>
          <Link href="/devlog" className="btn btn-secondary">
            모든 소식 보기
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DEVLOG.slice(0, 3).map(({ title, body }) => (
            <article key={title} className="card-line">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-[15px]">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
