/* eslint-disable */
import 'nextra-theme-docs/style.css';
import Prism from 'prism-react-renderer/prism';
import React from 'react';

(typeof global !== 'undefined' ? global : window).Prism = Prism;
// https://github.com/PrismJS/prism/tree/master/components
require('prismjs/components/prism-lua');
require('prismjs/components/prism-vim');
require('prismjs/components/prism-javascript');

// eslint-disable-next-line
export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />; // eslint-disable-line
}
