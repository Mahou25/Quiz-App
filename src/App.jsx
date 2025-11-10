import './index.css';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Quiz from './assets/components/quiz';
import Results from './assets/components/results';

function App() {
  

  return (
    <div className="app-container">
      <h1 className="">
        Quiz App
      </h1>

      <Quiz/>
      <Results/>
    </div>
  )
}

export default App;
