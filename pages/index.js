import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Navigation */}
      <nav
        className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
        id='sideNav'
      >
        <a className='navbar-brand js-scroll-trigger' href='#page-top'>
          <span className='d-block d-lg-none'>Juni Brosas</span>
          <span className='d-none d-lg-block'>
            <img
              className='img-fluid img-profile rounded-circle mx-auto mb-2'
              src='/images/profile.jpg'
              alt=''
            />
          </span>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#about'>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content */}
      <div className='container-fluid p-0'>
        {/* About */}
        <section className='resume-section' id='about'>
          <div className='resume-section-content'>
            <h1 className='mb-0'>
              Juni {` `}
              <span className='text-primary'>Brosas</span>
            </h1>
            <div className='subheading mb-5'>
              Software Developer · Frontend Specialist · Technology Enthusiast ·{' '}
              {` `}
              <a href='mailto:powerlogic1992@gmail.com'>
                powerlogic1992@gmail.com
              </a>
            </div>
            <p className='lead mb-5'>
              I am a passionate software developer specializing in front-end web
              development for enterprise-level and large scale applications with
              over 6 years of experience in software development. Highly
              motivated in keeping up with the latest technologies and
              development principles.
            </p>
            <div className='social-icons'>
              <a
                target='_blank'
                className='social-icon'
                href='https://www.linkedin.com/in/juni-brosas-549b28a0'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a
                target='_blank'
                className='social-icon'
                href='https://github.com/junibrosas'
              >
                <i className='fab fa-github'></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
