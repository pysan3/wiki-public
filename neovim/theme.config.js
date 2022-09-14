import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import pkg from './package.json';

if (process.env.NODE_ENV !== 'production') pkg.author.url = 'localhost:3000';

const UNAME = pkg.author.username;
const NAME = UNAME;
// const NAME = pkg.author.name;
const EMAIL = pkg.author.email;
const SITE = `${pkg.author.url.replace('www', 'wiki')}${process.env.NEXT_PUBLIC_API_URL || '/neovim'}`;
const TWITTER = `@${UNAME}`;
const LOGO = `${SITE}/public/favicon.ico`;

function Seo({ title, meta }) {
  const pageTitle = `${title} - ${NAME}`;
  const type = 'date' in meta ? 'article' : 'website';
  const paths = meta.description.match(/\[[^[\]*]\]/g) || []; // get path inside the last [] in description
  const pathname = paths.reduce((_, c) => c.replace(/\/../g, ''), '');
  return ( // eslint-disable-next-line
    <>
      {/* <!-- Search Engine --> */}
      <link rel="icon" type="image/svg+xml" href={LOGO} />
      <link
        rel="canonical"
        href={`${SITE}/${pathname}`}
        key="canonical_url"
      />
      <meta name="author" content={NAME} key="author" />
      <meta name="title" content={pageTitle} key="title" />
      <meta
        name="description"
        content={meta.description}
        key="description"
      />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content={pageTitle} key="schema_title" />
      <meta
        itemProp="description"
        content={meta.description}
        key="schema_description"
      />
      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta property="og:type" content={type} key="og_type" />
      <meta property="og:title" content={pageTitle} key="og_title" />
      <meta
        property="og:description"
        content={meta.description}
        key="og_description"
      />
      <meta property="og:url" content={SITE} key="og_url" />
      <meta property="og:logo" content={LOGO} key="og_logo" />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter_card"
      />
      {/* <!-- Twitter --> */}
      <meta
        name="twitter:creator"
        content={TWITTER}
        key="twitter_creator"
      />
      <meta
        property="twitter:site"
        content={TWITTER}
        key="twitter_site"
      />
      <meta
        property="twitter:title"
        content={pageTitle}
        key="twitter_title"
      />
      <meta
        property="twitter:description"
        content={meta.description}
        key="twitter_description"
      />
      <meta property="twitter:url" content={SITE} key="twitter_url" />
      <meta property="twitter:image" content={LOGO} key="twitter_image" />
    </>
  );
}

Seo.defaultProps = {
  title: UNAME,
  meta: {
    description: NAME,
    tag: NAME,
  },
};
Seo.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
  }),
};

function Footer() {
  const { pathname } = useRouter();
  return ( // eslint-disable-next-line
    <footer>
      <div className="legends" style={{ textAlign: 'right' }}>
        <div>
          <a
            href={`https://twitter.com/${UNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <span> · </span>
          <a
            href={`https://github.com/${UNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span> · </span>
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            {EMAIL}
          </a>
        </div>
        <br />
        <div>
          <a
            title="Found a Typo? Have any suggestions? Feel free to submit a PR :)"
            href={`https://github.com/${UNAME}/site/edit/main/pages${pathname}.mdx`}
            target="_blank"
            rel="noreferrer"
          >
            Edit on Github
          </a>
        </div>
      </div>
      <div style={{ marginTop: '2rem !important', textAlign: 'right' }}>
        <abbr
          title="This site and all its content are licensed under the MIT License."
          style={{ cursor: 'help' }}
        >
          MIT
        </abbr>
        <time>
          {' '}
          {new Date().getFullYear()}
        </time>
        {' '}
        &copy;
        {NAME}
        .
      </div>
    </footer>
  );
}

export default {
  project: {
    link: 'https://github.com/pysan3/wiki-public',
  },
  docsRepositoryBase: 'https://github.com/pysan3/wiki-public',
  titleSuffix: ` - wiki.${NAME}`,
  navigation: true,
  darkMode: true,
  footer: {
    component: <Footer />,
  },
  editLink: {
    text: false,
  },
  head: <Seo />,
  readMore: 'Read More →',
  logo: (
    <span style={{ display: 'inline-block' }}>
      <img
        src="/neovim/favicon.ico"
        alt=" "
        style={{
          display: 'inline-block', width: '30px', height: '30px', objectFit: 'cover',
        }}
      />
      {' '}
      nvim-setup.wiki.pysan3
    </span>
  ),
  navs: [
    {
      url: `${SITE.replace('www', 'wiki')}/neovim`,
      name: 'Back',
    },
  ],
};

// export default {};
