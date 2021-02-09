import React from 'react';
import './estilo.css';
import { lazy, Suspense } from 'react';
import Spinner from './Spinner';
const SplitStore1 = lazy(() => import('./SplitStore1'));
const SplitStore2 = lazy(() => import('./SplitStore2'));
const SplitStore3 = lazy(() => import('./SplitStore3'));

const NossasLojas = () => {
  return (
    <main className="container">
      <div className="d-flex align-items-end flex-column">
        <div className="container p-2 ">
          <div className="row d-flex flex-wrap justify-content-around">
            <Suspense fallback={<Spinner />}>
              <SplitStore1 />
            </Suspense>

            <Suspense fallback={<Spinner />}>
              <SplitStore2 />
            </Suspense>

            <Suspense fallback={<Spinner />}>
              <SplitStore3 />
            </Suspense>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default NossasLojas;
