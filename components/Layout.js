import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const name = '[Your Name]';
export const siteTitle = 'Juni Brosas';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content='' />
        <meta name='author' content='' />
        <title>Juni Brosas | Software Developer</title>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <script
          src='https://use.fontawesome.com/releases/v5.13.0/js/all.js'
          crossOrigin='anonymous'
        ></script>
        <link
          href='https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <header class='masthead pt-5 pb-2 fixed-top'>
        <div class='inner'>
          <nav class='nav nav-masthead justify-content-center'>
            <a class='nav-link active' href='#about'>
              About
            </a>
            <a class='nav-link' href='#skills'>
              Skills
            </a>
            <a class='nav-link' href='mailto:powerlogic1992@gmail.com'>
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className='footer'>
        <div className='container'>
          <div className='text-right'>
            This site is powered by NextJS and deployed on Vercel.
          </div>
        </div>
      </footer>

      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
      <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'></script>
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
