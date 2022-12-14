import React from "react";
import ImageCarouselWithArrows from "../../components/ImageCarouselWithArrows";

function Overview() {
  const imagesNewGalateia = Object.keys(
    import.meta.glob("./New_Galateia/*", { as: "raw" })
  );

  const imagesKolorowa = Object.keys(
    import.meta.glob("./Kolorowa/*", { as: "raw" })
  );

  const imagesMinus = Object.keys(import.meta.glob("./Minus/*", { as: "raw" }));

  const imagesConcrete = Object.keys(
    import.meta.glob("./Concrete/*", { as: "raw" })
  );

  const imagesErr0r = Object.keys(import.meta.glob("./Err0r/*", { as: "raw" }));

  return (
    <>
      <h2 className="page-title">Project Overview</h2>
      <hr />

      <article className="project">
        <ImageCarouselWithArrows images={imagesNewGalateia} />

        <section className="overview-project-text">
          <section className="overview-text-eng">
            <h3>NEW GALATEIA (2019)</h3>
            <p>
              A new Galateia, a photographic collage on sex robots in the coming
              posthumans era. It is HA YOUJUN's photography project, which is
              part of the technical determinism theme.
            </p>
            <p>
              How will sex robots change the way humans love? Pygmalion, king of
              Cyprus, made his ideal sculpture, named 'Galateia' and prayed to
              God to make him human. Aphrodite was moved by his devotion and
              made Galateia human. Wouldn't we naturally fall in love with sex
              robots if we create sex robots that fit our ideal type and if they
              provided physical pleasure and emotional stability that humans
              couldn't afford?
            </p>
            <p>
              Shouldn't we be able to marry sex robots? There is nothing to
              fight for because It is completely reflected own desires. There is
              no hurts because they will never die before human die. Sex robots
              give more pleasure, less pain. Love is no longer a human's thing.
              Now it is not enough to replace a human partner, but there are
              lots of trying to make the new Galateia.
            </p>
            <p>
              I would like to show the situation new technologies get into human
              love and change they will make. First, I am going to introduce a
              photographic collage that combines sex robots and galateia which
              shows man's desire.
            </p>
          </section>
          <section className="overview-text-kr">
            <h3>뉴 갈라테이아 (2019)</h3>
            <p>
              도래하는 포스트휴먼 시대에 새로운 갈라테이아, 섹스로봇에 관한
              사진콜라주. 기술결정론 테마에 속하는 하유준의 사진 프로젝트이다.
            </p>
            <p>
              섹스로봇은 인간이 사랑하는 방식을 어떻게 변화시킬 것인가?
              키프로스의 왕 피그말리온은 자신의 이상형을 조각상으로 만들어
              ‘갈라테이아’라는 이름을 붙여주고 인간이 되게 해달라고 신에게
              빌었다. 아프로디테는 그의 정성에 감동하여 갈라테이아를 인간으로
              만들어주었다.
            </p>
            <p>
              피그말리온이 자신의 욕망에 온전히 부합하는 배우자를 만든 것처럼
              만약 우리도 이상형에 맞는 섹스로봇을 만들게 된다면, 그리고 그들이
              인간이 줄 수 없는 쾌락과 정서적 안정을 제공한다면 우리는
              자연스럽게 섹스로봇과 사랑에 빠지지 않을까?
            </p>
            <p>
              우리는 섹스로봇과 결혼을 할 수 있지 않을까? 자신의 욕망을 완벽하게
              반영하기 때문에 싸울일도 없을 것이다. 질병으로 인간보다 세상을
              떠나는 일도 없을 것이다. 섹스로봇은 인간보다 많은 즐거움, 적은
              고통을 준다. 사랑은 더 이상 인간과 인간의 영역이 아니다. 지금은
              인간 배우자를 대체할 정도로 완벽하진 않지만 새로운 갈라테이아가
              만들고자 하는 노력은 계속 되고 있다.
            </p>
            <p>
              새로운 기술이 인간의 사랑에 침투하고 변화를 가져오는 모습을 본
              프로젝트로 담고자 한다. 그 시작으로 인간의 욕망을 투영하는
              섹스로봇과 갈라테이아를 동일선에 놓고 섞는 사진콜라주를 선보이고자
              한다.
            </p>
          </section>
        </section>
      </article>

      <hr />

      <article className="project">
        <ImageCarouselWithArrows images={imagesKolorowa} />
        <section className="overview-project-text">
          <section className="overview-text-eng">
            <h3>KOLOROWA (2018-ONGOING)</h3>
            <p>
              Impression represented by the colors of the city. Street and
              documentary photos.
            </p>
            <p>
              We cannot remember exactly what we see in the city. We just feel
              some impressions with all of our senses and we are able to
              remember the city using these impressions. I remember Poland as
              strong and highly saturated colors, just like Hanbok, traditional
              korean clothing that has vivid colors. There is the harmony
              between the old legacy of USSR country and the millennium
              generation, the desire built high from the center of the city and
              the hope of leaving the past behind and moving forward into the
              future. This project is my impression and documentary of the city.
            </p>
          </section>
          <section className="overview-text-kr">
            <h3>컬러로바 (2018-진행중)</h3>
            <p>
              컬러 오브제로 재현해내는 도시의 인상. 스트리트, 다큐멘터리 포토
            </p>
            <p>
              우리의 기억은 도시를 정확하게 기억하지 않는다. 순간의 인상. 모든
              감각을 동원하여 만들어진 느낌으로 우리는 도시를 기억한다. 한복에서
              오는 강렬한 컬러처럼 나는 폴란드를 다양한 색으로 기억한다. 공산권
              국가의 오래된 유산과 밀레니엄 세대의 조화, 시내 중심부터 높게
              쌓아올린 욕망, 과거를 뒤로하고 미래로 나아갈 수 있다는 희망,
              컬러로바 바르샤바는 내가 컬러오브제로 재현해내는 도시의 인상이자
              기록이다.
            </p>
          </section>
        </section>
      </article>
      <hr />

      <article className="project">
        <ImageCarouselWithArrows images={imagesMinus} />
        <section className="overview-project-text">
          <section className="overview-text-eng">
            <h3>MINUS (2018)</h3>
            <p>
              What is the main role of family? What the family should be? I
              agree that the family, this group was made in nature for surviving
              and leaving their gene. It was the main role during that time and
              the role is simple. It was easy to explain why we need a form of
              the group: family with a biological reason like instinct and
              survival.
            </p>
            <p>
              How is the family these days? Regarding the number of a family
              member, it has moved from large families to 4 group families and
              then a one-person residence. Regarding member’s roles, It has been
              diversified the reason from the reproduction to spiritual love and
              economic reasons. Nowadays, marriage is not just for biological
              reasons. At this point, I want to ask again what the family should
              be. Which one should be the main role of the family in modern
              society? Why we have to be family?
            </p>
            <p>
              Philosopher Jean-Paul Sartre said that “l'existence précède
              l’essence” (existence precedes essence). Following his opinion, we
              can think that the essence of the family would have been created
              by yourself depending on the era. There is no role and ready-made
              essence of the family.
            </p>
            <p>
              Through the project of 'minus', I try to explore the reason for
              the existence of family by deleting the function of the family and
              they have the essential functions or not. I hope to see what
              family has something for being called a family in modern society.
            </p>
          </section>
          <section className="overview-text-kr">
            <h3>마이너스 (2018)</h3>
            <p>
              가족의 역할은 무엇일까? 가족은 어떠해야만 하는가? 어바웃 매거진의
              두번째 주제가 선택되었을 때, 크루들은 많은 고민을 했다. 대부분
              가족이 자연발생적으로 만들어졌다는데 동의했다. 인간의 짝짓기
              본능에 따라 짝을 짓고 아기를 낳아 자신의 유전자를 후대에 남긴다.
              인류 초기의 가족이라는 집단은 그러했다. 그 당시의 가족의 역할은
              뚜렷했다. 본능과 생존 같이 생물학적인 이유로 가족의 본질을
              설명하기 쉬웠다.
            </p>
            <p>
              지금의 가족은 어떠한가? 구성적인 측면에서, 대가족에서 핵가족
              그리고 1인 주거, 동거 등 다양한 삶의 형태로 이동했다. 역할적인
              측면에서는, 생식을 통한 자손번식의 기능에서 정신적 사랑, 경제적
              이유 등 기능이 다양화 되었다. 요즘시대에는 생물학적 이유만으로
              결혼하지는 않는다. 이쯤에서 가족의 기능은 무엇이었을까 다시금
              질문해본다. 현대 사회에서 가족은 어떤 기능을 수행해야할까?
            </p>
            <p>
              사르트르는 실존이 본질에 앞선다고 했다. 이러한 그의 관점에
              기반하여 생각해본다면, 가족이라는 본질도 시대에 따라 우리가
              주체적으로 만들어나갔을 것이다. ‘마이너스’라는 프로젝트를 통해
              가족이라는 집단의 존재 이유를 탐구해보고자 한다. 가족의 본질을
              구성과 역할적 측면으로 나누고 가족이 수행했던 기능을
              제거해봄으로써 현대 사회에서 가족이 가족으로써 불리기 위해
              남겨야하는 본질적 기능에 대해서 탐구해보고자 한다.
            </p>
          </section>
        </section>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/mgSAtf-HhrU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="video-description">
          ART MAGAZINE ‘ABOUT FAMILY’ PHOTOWORKS BY HA YOUJUN ‘MINUS’
        </p>
      </article>
      <hr />

      <article className="project">
        <ImageCarouselWithArrows images={imagesConcrete} />
        <section className="overview-project-text">
          <section className="overview-text-eng">
            <h3>CONCRETE (2017) </h3>
            <p>
              “The Cracked surface of Concrete shows how the space was made like
              as the wrinkles of the old man describe his whole life.”
            </p>
            <p>
              The Space is not only physical but also psychological. Concrete is
              the most common physical building block in modern society and it
              affects a person's behavior patterns depending on the location and
              scale at which concrete is constructed. The birth and death of
              concrete is important when we interpret our social space.
            </p>
          </section>
          <section className="overview-text-kr">
            <h3>콘크리트 (2017) </h3>
            <p>
              “노인의 주름이 그의 삶을 이야기 하듯, 콘크리트의 갈라진 표면을
              공간을 이야기한다.”
            </p>
            <p>
              공간은 물리적인 것 뿐만 아니라 심리적인 것 또한 포함한다.
              콘크리트는 현대사회에서 가장 흔하게 접할 수 있는 물리적 구성체이며
              이것들은 어떤 위치, 어떤 규모로 세워지느냐에 따라 사람의
              행동양식에 영향을 미친다. 콘크리트의 탄생과 소멸은 우리 사회공간을
              해석하는데 중요한 요소이다.
            </p>
          </section>
        </section>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/hhfpQiNE6n0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="video-description">
          ART MAGAZINE ‘ABOUT PLACE’, PHOTOWORKS BY HA YOUJUN ‘CONCRETE’
        </p>
      </article>
      <hr />

      <article className="project">
        <ImageCarouselWithArrows images={imagesErr0r} />
        <section className="overview-text-kr">
          <h3>ERR0R (2015)</h3>
          <p>
            인간은 실수를 한다. '인간미'있다는 말은 가끔 완벽하지 않고
            순박하다라는 의미로 쓰일 때가 있다. 하지만 기계는 실수를 하지
            않는다. 0과 1로 이루어진 알고리즘에서 기계는 인간보다 정확한 계산을
            해낸다. 인간이 만들어낸 기계는 다방면에서 인간이 할 수 있는 영역을
            넘어서고 있다.
          </p>
          <p>
            그렇다면 인간만이 할 수 있는 영역은 무엇인가? 인간은 실수를 한다.
            본인의 의사에 상관없이 우연한 과정을 거치게 되고 의도와는 다른
            결과를 얻게 된다. 그것이 실수다. 인간은 실수할 수 있지만 기계는 할
            수 없다. Err0r 프로젝트는 영화를 보는 과정에서 조작 실수로 발생한
            디지털 에러에서 시작하게 되었다. 영화를 서버에 올리고 여러번
            다운로드 하여 무작위로 영화의 이미지를 캡쳐했다. 모든 실수들은
            기존의 완벽하게 영상을 재현해내고자 하는 목적과 다른 '우연'에
            근거하여 만들어진 실수들이다.
          </p>
        </section>
      </article>
      <hr />
    </>
  );
}

export default Overview;
