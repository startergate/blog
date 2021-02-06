import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Language from '../components/profiles/language';
import * as External from '../components/profiles/external';
import Project from '../components/projects/simple';
import Overlay from '../components/projects/overlay';
import OriginalImage from '../components/images/originalImg';

import './index.css';

const IndexPage = () => {
  /*const data = useStaticQuery(graphql`
    query getIndexData {

    }
  `);*/

  return (
    <Layout>
      <SEO title={'Blog'} />
      <section
        className={'subpage'}
      >
        <div className={'page-title'}>
          <h1>
            <span>Blog</span>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
