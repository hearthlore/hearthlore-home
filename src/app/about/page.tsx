import {
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Smile,
  Sprout,
  TreePine,
} from "lucide-react";
import type { Metadata } from "next";
import { FeatureCard } from "@/components/ui/FeatureCard";

export const metadata: Metadata = {
  title: "스튜디오",
  description: "하스로어가 게임을 만드는 이유와 지키는 약속.",
};

// vault/제작자의말.md 원문 그대로 (수정 금지)
const LETTER = `안녕하세요. 치치의 사계절 그림책 제작자이자 두 남매의 아빠입니다.

저희 아이는 어린이집에 가는 걸 무척이나 싫어했습니다. 적응하는 데 세 달은 걸린 것 같네요.
아침마다 어린이집 문 앞에서 아빠~ 를 하염없이 외치며 우는 아이를 뒤로한 채 출근하는 길에는
이상하게 겨울도 아닌데 눈이 매웠습니다.
아이는 하루가 다르게 성장해 날마다 새로운 모습을 보여줍니다.
그래서 마음이 벅차면서도 해준 게 없어서 아이를 향한 부채감만 쌓여갑니다.

전문 걱정인으로서 팝콘 브레인, 비디오 증후군, 디지털 치매 같은 이야기들을 접하게 될 때마다,
디지털 매체보다는 책과 자연을 더 많이 접하면 좋겠다는 바람을 저만 갖고 있는 건 아니더라구요.
아이가 이유식을 하기 시작할 때만 하더라도 미디어에 절여지지 않게 노출을 최소화해야겠다 생각했습니다.
말을 하기 시작하니 얼마나 귀여운지요. 낱말 하나 뱉을 때마다 박수와 웃음소리가 끊이질 않았습니다.
그러더니 어느새 저와 말을 주고받는데, 너무 자연스러워서 또 바람이 눈을 건드렸습니다.
물론, 대한민국 부모 아니랄까, 발달 시기가 늦는 건 아닌지 걱정하던 나날이 있던 건 안비밀입니다.

아이가 자라고 사고가 깊어지는 건 고마운 일이지만 그와 동시에 꾀가 느는 건 더더욱 사랑스럽지요.
그런 아이는 제 바람과 다르게 강렬한 매체의 이끌림에서 자유로울 수 없었습니다.
짜임새 있고 자극적이면서 교육적인 내용도 담고 있는 영상물이 참 많았습니다.
형형색색의 화려한 그림체에 매력적인 캐릭터들이 어른인 제가 봐도 넋을 잃어버릴 것 같은 것들이 정말x3 많았습니다.

그런데, 결국 아이와 함께하는 시간을 늘려줄 만한 요소는… 글쎄요.
이 앱은 아이를 매체와 함께 방치하고 보호자의 업무 혹은 개인적인 시간을 벌기 위한 목적으로 만들지 않았습니다.
물론 아이 혼자서도 할 수 있습니다. 하지만 양육자와 함께할 때 더 재밌고 유익한 시간이 된다는 걸 알게 해주세요.
제가 가장 우선으로 생각한 건 아이의 인성·오감 발달과 부모님과의 추억이었습니다.
어느 순간이 되면 아이는 우리 품을 떠나게 됩니다. 저는 한 순간이라도 더 아이와 추억을 쌓고 싶었습니다.

또한 모든 아이의 성향이 같을 수는 없습니다. 무료로 이용할 수 있는 콘텐츠로 아이의 의중을 먼저 살펴보세요.
당연히 바깥에서 뛰어놀고 자연을 체험하는 것이 백 번 좋습니다.

아이의 행복이 우선입니다.
그리고
보호자의 행복은 최우선입니다.
행복한 보호자의 아이는 행복합니다.

우리, 함께
행복한 세상 만들어가요.`;

const TEAM = [
  ["최조엘", "CEO · CTO", "이야기의 뼈대와 커리큘럼을 짜고, 팝업북 무대를 만듭니다."],
  ["이승원", "COO", "아이의 개인정보와 안전 기준을 지키며 스튜디오 살림을 꾸립니다."],
  ["김예림", "Design & PR Lead", "치치와 친구들, 한지 팝업의 모습을 그리고 다듬습니다."],
  ["이성원", "PT & Dev Ops Lead", "이야기 한 줄 한 줄을 다시 읽고, 바깥에 우리를 소개합니다."],
] as const;

export default function About() {
  return (
    <>
      <section className="section container-page">
        <p className="eyebrow">스튜디오</p>
        <h1 className="display-xl mt-4 max-w-4xl">
          따뜻한 벽난로, 이어지는 이야기
        </h1>
        <p className="lead mt-6 max-w-2xl">
          Hearthlore(하스로어)는 가족이 둘러앉는 벽난로 <strong>Hearth</strong>와
          세대를 이어 전해지는 이야기 <strong>Lore</strong>를 합친 이름입니다.
          우리는 기술을 뽐내는 게임이 아니라, 아이가 자라 품을 떠나기 전에 한
          순간이라도 더 다정한 추억을 쌓게 돕는 놀이를 만듭니다.
        </p>
      </section>

      <section id="letter" className="container-page scroll-mt-20">
        <div className="rounded-xl bg-surface-card p-8 md:p-16">
          <p className="eyebrow">제작자의 말</p>
          <p className="mt-6 max-w-3xl text-[17px] leading-loose whitespace-pre-line text-body-strong">
            {LETTER}
          </p>
          <p className="mt-8 text-sm text-muted">— Hearthlore</p>
        </div>
      </section>

      <section className="section container-page">
        <p className="eyebrow">우리가 지키는 약속</p>
        <h2 className="display-lg mt-3 max-w-3xl">
          무엇을 만들든, 이 약속이 먼저입니다
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard tone="pink" icon={HeartHandshake} title="방치 도구가 아닌, 함께 놀이">
            자동 다음 화, 끝없는 반복, 중독성 보상을 만들지 않습니다. 엄마·아빠·
            할머니와 눈을 맞추고 이야기할 때 완성되는 경험을 설계합니다.
          </FeatureCard>
          <FeatureCard tone="teal" icon={Leaf} title="저자극, 따뜻한 한지 미학">
            형광색과 요란한 효과 대신 닥나무 한지의 결, 누름꽃, 차분한 악기
            소리로 정서적 안정감을 줍니다.
          </FeatureCard>
          <FeatureCard tone="lavender" icon={TreePine} title="화면 밖으로 이어지는 마무리">
            이야기가 끝나면 기기를 덮고 집 안의 진짜 사물을 찾거나, 주말에
            공원과 숲으로 나가고 싶어지게 합니다.
          </FeatureCard>
          <FeatureCard tone="peach" icon={Smile} title="보호자의 행복이 최우선">
            &ldquo;지금 안 하면 뒤처집니다&rdquo; 같은 불안과 죄책감을 건드리는
            말을 쓰지 않습니다. 다른 아이와 비교하지 않고, 따뜻하게 격려합니다.
          </FeatureCard>
          <FeatureCard tone="ochre" icon={Sprout} title="틀려도 괜찮은 놀이">
            &lsquo;땡!&rsquo; 소리도, 빨간 X도, 점수 깎기도 없습니다. 서툰 손길은
            부드럽게 제자리로 돌아가고, 치치가 다정하게 다시 안내합니다.
          </FeatureCard>
          <FeatureCard tone="cream" icon={ShieldCheck} title="아이 화면엔 광고도 결제도 없이">
            아이가 만지는 화면에는 광고와 구매 버튼을 두지 않습니다. 결제와
            설정은 보호자만 들어갈 수 있는 공간에 있습니다.
          </FeatureCard>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <p className="eyebrow">만드는 사람들</p>
        <h2 className="display-lg mt-3 max-w-3xl">
          네 사람이 한 벽난로 앞에서 만듭니다
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(([name, role, body]) => (
            <article key={name} className="card-line">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-[13px] font-medium text-muted">{role}</p>
              <p className="mt-2 text-[15px]">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
