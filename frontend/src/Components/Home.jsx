import React from 'react';
import './estilo.css';
import { lazy, Suspense } from 'react';
import Spinner from './Spinner';
const SplitHome = lazy(() => import('./SplitHome'));

const Home = () => {
  return (
    <main className="mb-5">
      <Suspense fallback={<Spinner />}>
        <SplitHome />
      </Suspense>

      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Home;
