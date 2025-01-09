import { useState, useEffect, Suspense } from 'react'
import './App.css'
import React from 'react';

const Topics = React.lazy(() => import('./Detail/Topics'));
const About = React.lazy(() => import('./About/About'));
const Footer = React.lazy(() => import('./Footer/Footer'));

function App() {
  return (
    <>
    <Suspense fallback={<div className='spinner-container'><div className='spinner'></div></div>}>
      <About />
      <div style={{float: 'right', width: '65.3%', display: 'inline-block'}}>
        <Topics />
        <Footer />
      </div>
      
    </Suspense>
    </>
  )
}

export default App
