import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='intro'>Hello, I'm Juni Brosas!</div>
      <div className='tagline'>
        Software Developer | Frontend Specialist & Enthusiast
      </div>
      <div className='icons-social'>
        <a target='_blank' href='https://github.com/junibrosas'>
          <i className='fab fa-github' />
        </a>
        <a
          target='_blank'
          href='https://stackoverflow.com/users/1396189/juni-brosas'
        >
          <i className='fab fa-stack-overflow' />
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/juni-brosas-549b28a0'
        >
          <i className='fab fa-linkedin' />
        </a>
        <a target='_blank' href='https://medium.com/@junibrosas'>
          <i className='fab fa-medium' />
        </a>
        <a target='_blank' href='https://junibrosas.hashnode.dev'>
          <i className='fas fa-address-card' />
        </a>
      </div>
    </Layout>
  );
}
