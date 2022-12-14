import React from "react";
import ImageCarouselWithArrows from "../../components/ImageCarouselWithArrows";

function Overview() {
  const imagesNewGalateia = Object.keys(
    import.meta.glob("./New_Galateia/*", { as: "raw" })
  );

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
        <ImageCarouselWithArrows images={imagesNewGalateia} />
        <section>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </section>
        <section>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </section>
      </article>
      <hr />
    </>
  );
}

export default Overview;
