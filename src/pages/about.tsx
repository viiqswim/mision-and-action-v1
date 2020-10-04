import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  Mision
                </h5>
                <p>
                  Nuestra mision es ayudar a dejarle un mejor planeta a futuras generaciones por medio de accion frecuente y constante.
                </p>

                <h5>Vision</h5>
                <p>
                  Creemos que depositando un granito de arena cada semana, en algunos años podremos ver una gran montaña de generosidad y mejoras hacia el planeta creada por nuestro gran labor.
                </p>
                <h5>Objetivos</h5>
                <ul>
                  <li>Para finales de el 2021 nos gustaria haber apoyado a 25 mascotas a conseguir un nuevo hogar.</li>
                  <li>Para finales de el 2021 nos gustaria haber apoyado a 1 albergue a incrementar su numero de likes por 2,000 personas.</li>
                </ul>
                <h5>Nuestros valores</h5>
                <ul>
                  <li>Amor por el planeta</li>
                  <li>Respeto</li>
                  <li>Accion</li>
                  <li>Trabajo en equipo</li>
                  <li>Honestidad</li>
                  <li>Mejora constante</li>
                </ul>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
