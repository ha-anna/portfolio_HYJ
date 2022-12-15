import React from "react";

function About() {
  return (
    <>
      <h2 className="page-title border-bottom">About</h2>
      <p className="text-eng single">
        Ha You-jun was born in 1991 in Seoul, South Korea. He majored in
        Cultural Studies and Film at Kyung Hee University. After his studies, he
        devoted several years to a self-founded art group named ABOUT KO. ABOUT
        KO is an artist collective with an aim to create artworks based on
        cultural keywords important for Korean society (zeitgeist).
      </p>
      <p className="text-eng single">
        One of the ABOUT KO achievements was publishing their own art magazines,
        titled ABOUT Place (2017) and ABOUT Family (2018). He also worked as a
        Military Correspondent in a combat media content team in The Republic of
        Korea Air Force during his two-year-long military service. He took
        photos for its ROKAF magazine and made informative films about airmen’s
        special duties and extensive military exercises like the Key Resolve,
        the UFG (Ulchi Freedom Guardian).
      </p>
      <p className="text-eng single border-bottom">
        He moves back and forth between Seoul and Warsaw, Poland, which has many
        similarities in the historical background of Korean society and gives
        inspiration to the new objects. He opened two solo shows.
        <span className="decoration-bracket">HA YOUJUN: Compliation</span>{" "}
        sponsored by Cafe Karma, the most influential place, and{" "}
        <span className="decoration-bracket">Kolorowa Warszawa</span> sponsored
        by Polish Linguistic Institute in Warsaw. Also, he filmed his short
        movie <span className="decoration-bracket">Subscribe my dream</span>{" "}
        starred two talented rookies, Ms. Iwona and Mr. Maciek. He recently
        joined the Suwon Kyo-dong artist group to create a memorable show
        commissioned by Suwon Cultural Foundation. Through the group show, he
        displayed the artworks; the photo collage artworks the symmetrical
        beauty of the modern and tradition in Suwon city.
      </p>
      <div className="about-links">
        <a
          className="standard-button text-link"
          href="./assets/PDF/HA+YOUJUN+BIO.pdf"
        >
          BIO EN (PDF)
        </a>
        <a
          className="standard-button text-link"
          href="./assets/PDF/HA+YOUJUN+CV.pdf"
        >
          CV (PDF)
        </a>
        <a
          className="standard-button text-link"
          href="./assets/PDF/HA+YOUJUN+BIO+(PL).pdf"
        >
          BIO PL (PDF)
        </a>
      </div>
    </>
  );
}

export default About;
