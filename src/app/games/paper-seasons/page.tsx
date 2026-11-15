import {
  BookHeart,
  Bookmark,
  Camera,
  Hand,
  Mic,
  Moon,
  Sprout,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureCard, type Tone } from "@/components/ui/FeatureCard";

export const metadata: Metadata = {
  title: "치치의 사계절 그림책",
  description:
    "아기 고슴도치 치치와 함께 사계절을 걷는, 만 3~5세를 위한 한지 팝업 인터랙티브 그림책.",
};

const DRAMA: [Tone, string, string, string, string][] = [
  ["lavender", "시즌 1 · 만 3세", "아기 고슴도치 치치의 첫 사계절: 두근두근 첫걸음", "치치의 단짝", "낯선 세상이 두렵고 서툰 치치 곁에서, 아이는 자기 이름 그대로 치치의 단짝이 됩니다. 손 씻기와 식사 인사, 자연을 아끼는 마음, 친구와의 약속을 함께 배워요."],
  ["peach", "시즌 2 · 만 4세", "언니·오빠가 된 치치와 동생 토리: 우리 함께 자라요", "든든한 마음 길잡이", "동생 토리가 태어났어요. 문득 찾아오는 서운함과 질투, 그리고 싹트는 돌봄의 마음. 아이는 치치와 함께 양보와 배려, 차례 지키기를 배웁니다."],
  ["ochre", "시즌 3 · 만 5세", "생각이 자라는 꼬마 선생님 치치: 내일이 기대돼요", "꼬마 선생님", "더 넓은 세상으로 나갈 준비를 하는 치치에게, 아이가 글자의 첫소리와 수 가르기, 시계 보기를 가르쳐 줍니다. 마지막엔 자기 목소리로 그림책을 들려줘요."],
];

const SEASONS: [Tone, string, string, string][] = [
  ["pink", "봄 · 우리 집", "치치야, 보글보글 씻고 냠냠 먹자!", "이불 속에서 머뭇거리는 치치의 손을 씻겨 주고, 식탁에 수저를 놓고, 함께 \"잘 먹겠습니다!\""],
  ["ochre", "여름 · 할머니 댁 마당", "향기로운 여름 텃밭과 툇마루 소반 나눔", "호박잎을 들춰 열매를 찾고, 고추잠자리를 하늘로 보내 주고, 툇마루에서 수박을 나눠요."],
  ["peach", "가을 · 동네와 마트", "배려와 약속의 가을", "수줍은 친구 달이와 코코를 만나고, 마트의 유혹 앞에서 '후~ 단풍잎 숨쉬기'로 마음을 가라앉혀요."],
  ["teal", "겨울 · 숲속 캠핑", "감사와 따뜻한 포옹", "보호자와 손을 맞대고 큰 눈사람을 굴리고, 별자리 이불을 덮어 주고, 한 해의 고마움을 나눠요."],
];

const ACTS = [
  ["기", "방과 마당의 소품을 톡톡 만지며 치치와 인사해요."],
  ["승", "작은 사건이 벌어지고, 오늘의 낱말을 함께 찾아요."],
  ["전", "속상한 순간엔 '후~ 나비 숨쉬기'로 마음을 가라앉히고, 힘을 모아 해결해요."],
  ["결", "소반 위에서 오늘 찾은 것들을 돌아보고, 진짜 엄마·아빠와 꼭 안아요."],
] as const;

const PLAY = [
  [Hand, "둘이서 함께 누르기", "보호자가 호박잎을 들어 올리고 있어야 아이가 열매를 딸 수 있어요. 큰 눈덩이는 양쪽에서 같이 밀어야 굴러갑니다."],
  [Mic, "내 목소리로 읽어 주기", "내레이션을 끄고 보호자가 직접 읽어 줄 수 있도록 연기 지문을 띄워 드려요. 아빠·엄마·할머니·할아버지 목소리도 준비합니다."],
  [Sprout, "틀려도 괜찮아요", "오답 소리도 점수도 없어요. 잘못 눌러도 그 사물의 이름을 다정하게 불러 주고, 기다렸다가 살짝 힌트를 줍니다."],
  [Bookmark, "종이 책갈피", "밥 먹을 시간이면 책갈피를 꽂고 덮어요. 다시 펼치면 그 자리에서 이어집니다."],
  [Moon, "찾아올 때마다 다른 이야기", "같은 이야기도 낮, 노을, 밤으로 달라지고, 치치가 지난번에 함께 찾은 것을 기억해요."],
  [Camera, "기기 안에서만 보는 카메라 놀이", "볼을 맞대고 웃거나 진짜 숟가락을 찾아 보여 주는 놀이를 준비하고 있어요. 사진과 영상은 기기 밖으로 나가지 않습니다."],
  [Users, "형제자매 이어 놀기", "동생이 비를 내려 심은 씨앗을, 나중에 첫째가 열매로 거둬요. 각자 눈높이로, 하나의 텃밭을 함께 가꿉니다."],
  [BookHeart, "보호자 컴패니언", "잠자리에서 읽어 주는 구연 화면, 오늘 저녁 나눌 1분 대화 팁, 기기에만 보관되는 가족 사진첩을 보호자 폰에 담을 예정이에요."],
] as const;

const FRIENDS = [
  ["치치", "아기 고슴도치", "이마 위 돌돌 말린 하늘색 컬 가시"],
  ["토리", "치치의 동생", "아직 말리지 않고 삐죽 솟은 하늘색 가시"],
  ["할머니", "시골 외할머니", "포근한 은백색 가시와 반달 눈웃음"],
  ["모모", "사막여우", "큰 귀 안쪽의 노란 초승달 무늬"],
  ["코코", "알파카", "정수리에 얹힌 뭉게구름 머리"],
  ["달이", "레서판다", "꼬리 끝에서 두 번째 고리만 크림색"],
  ["차차", "웜뱃", "코 바로 위 하트 모양 반점"],
  ["포포", "펭귄", "하얀 배 한가운데 마름모 무늬"],
  ["마루", "수달", "붓끝처럼 하얀 꼬리 끝"],
] as const;

export default function PaperSeasons() {
  return (
    <>
      <section className="section container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="flex flex-wrap gap-2">
            <span className="badge">만 3~5세</span>
            <span className="badge">태블릿 그림책</span>
            <span className="badge">개발 중</span>
          </div>
          <h1 className="display-xl mt-5">치치의 사계절 그림책</h1>
          <p className="mt-2 text-muted">Paper Seasons</p>
          <p className="lead mt-6 max-w-xl">
            책을 펼치면 한지로 만든 집과 마당이 솟아오릅니다. 아이를 무릎에
            앉히고 그림책 한 권을 읽어 주듯, 보호자와 아이가 함께 만지고
            이야기하며 사계절을 걷는 팝업 그림책입니다.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl bg-surface-soft lg:col-span-6">
          <Image
            src="/images/living-room.png"
            alt="벽난로 앞 탁자에 다과를 차린 치치와 엄마"
            width={1440}
            height={1080}
            preload
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="container-page">
        <p className="eyebrow">이야기</p>
        <h2 className="display-lg mt-3 max-w-3xl">
          아이와 함께 한 살씩 자라는 세 개의 시즌
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DRAMA.map(([tone, eyebrow, title, role, body]) => (
            <FeatureCard key={title} tone={tone} eyebrow={eyebrow} title={title}>
              <p>{body}</p>
              <p className="mt-4 font-semibold">아이의 역할 · {role}</p>
            </FeatureCard>
          ))}
        </div>
      </section>

      <section className="section container-page">
        <p className="eyebrow">시즌 1의 사계절</p>
        <h2 className="display-lg mt-3 max-w-3xl">네 권의 책, 네 번의 계절</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SEASONS.map(([tone, eyebrow, title, body]) => (
            <FeatureCard key={title} tone={tone} eyebrow={eyebrow} title={title}>
              {body}
            </FeatureCard>
          ))}
        </div>
      </section>

      <section className="container-page">
        <div className="rounded-xl bg-surface-card p-8 md:p-12">
          <p className="eyebrow">한 편의 호흡</p>
          <h2 className="display-md mt-3 max-w-2xl">
            15~20분, 그림책 한 권을 읽어 주는 만큼
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {ACTS.map(([act, body]) => (
              <li key={act}>
                <span className="font-display text-4xl text-ink">{act}</span>
                <p className="mt-2 text-[15px]">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container-page">
        <p className="eyebrow">놀이 방식</p>
        <h2 className="display-lg mt-3 max-w-3xl">곁에 있을 때 더 재밌도록</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLAY.map(([Icon, title, body]) => (
            <article key={title} className="card-line">
              <Icon aria-hidden className="size-6 text-ink" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-[15px]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="rounded-xl bg-surface-soft p-8 lg:col-span-4">
          <Image
            src="/images/chichi.png"
            alt="노란 티셔츠를 입은 아기 고슴도치 치치"
            width={1024}
            height={1024}
            sizes="(min-width: 1024px) 30vw, 80vw"
            className="breathe mx-auto w-full max-w-xs mix-blend-multiply"
          />
        </div>
        <div className="lg:col-span-8">
          <p className="eyebrow">친구들</p>
          <h2 className="display-lg mt-3">그림자만 봐도 알 수 있는 친구들</h2>
          <p className="mt-4 max-w-2xl">
            모든 친구는 옷이나 장식이 아닌 몸에 자기만의 표시를 하나씩 갖고
            있어요. 세계 곳곳에서 온 친구들은 겉모습이 아니라 성격과 잘하는
            것으로 서로를 알아봅니다.
          </p>
          <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {FRIENDS.map(([name, kind, mark]) => (
              <div key={name} className="border-t border-hairline pt-3">
                <dt className="font-semibold text-ink">
                  {name} <span className="font-normal text-muted">· {kind}</span>
                </dt>
                <dd className="text-[15px]">{mark}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section container-page">
        <p className="eyebrow">미리 보기</p>
        <h2 className="display-lg mt-3">한지 팝업 무대</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["/images/spring-house.png", "3층 단면으로 펼쳐진 치치네 집"],
            ["/images/living-room.png", "벽난로가 있는 1층 거실"],
          ].map(([src, alt]) => (
            <figure key={src}>
              <Image
                src={src}
                alt={alt}
                width={1440}
                height={1080}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-lg"
              />
              <figcaption className="mt-3 text-sm text-muted">{alt}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          개발 중인 화면으로, 소개된 내용은 출시 때 달라질 수 있습니다.
        </p>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-xl bg-surface-soft p-8 text-center md:p-20">
          <h2 className="display-md">어디까지 만들었는지 궁금하다면</h2>
          <p className="mt-4">이야기와 무대가 자라는 과정을 기록하고 있어요.</p>
          <Link href="/devlog" className="btn btn-primary mt-8">
            개발 일지 보기
          </Link>
        </div>
      </section>
    </>
  );
}
