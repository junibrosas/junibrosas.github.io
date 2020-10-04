import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const name = '[Your Name]';
export const siteTitle = 'Juni Brosas';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' type='image/png' />
        <meta name='description' content='My personal website' />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          href='https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300'
          rel='stylesheet'
        />
        <link
          href='https://use.fontawesome.com/releases/v5.0.8/css/all.css'
          rel='stylesheet'
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
