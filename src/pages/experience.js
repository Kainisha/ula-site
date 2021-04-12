import React from 'react';

import ExperienceBlock from '@organisms/ExperienceBlock';
import data from '@data/content.json';
import Layout from '../components/layout';

const Experience = () => (
  <Layout title="Doświadczenie">
    <ExperienceBlock title="Projekty" items={data.projects} hasBackground={false} />
    <ExperienceBlock title="Projekty" items={data.projects} />
  </Layout>
);

export default Experience;
