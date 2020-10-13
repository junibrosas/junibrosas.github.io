import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <Layout>
      <div className='container p-0 text-center'>
        <section className='resume-section' id='about'>
          <div className='resume-section-content'>
            <div className='d-none d-lg-block'>
              <img
                className='img-fluid img-profile rounded-circle mx-auto mb-2'
                src='/images/profile.jpg'
                alt='Juni Brosas'
              />
            </div>
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
        <hr class='m-0' />
        <section class='resume-section' id='skills'>
          <div class='resume-section-content'>
            <h2 className='mb-5'>Skills</h2>
            <div className='subheading mb-3'>Programming Languages & Tools</div>
            <ul className='list-inline dev-icons'>
              <li className='list-inline-item'>
                <img
                  src='/images/skills/logo-reactjs.png'
                  alt='ReactJS'
                  title='ReactJS'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='/images/skills/logo-nextjs.png'
                  alt='NextJS'
                  title='NextJS'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='/images/skills/logo-nodejs.png'
                  alt='NodeJS'
                  title='NodeJS'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='/images/skills/logo-mongodb.png'
                  alt='MongoDB'
                  title='MongoDB'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='/images/skills/logo-graphql.png'
                  alt='GraphQL'
                  title='GraphQL'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='/images/skills/logo-docker.png'
                  alt='Docker'
                  title='Docker'
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
