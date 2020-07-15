import React from 'react';
import { Layout } from '../components/Layout';
import { Head } from '../components/Head';

const PageComponent: React.FC = () => (
  <Layout>
    <Head title="ページが見つかりません" description="ページが見つかりません" />
    <p>ページが見つかりません</p>
  </Layout>
);

export default PageComponent;
