// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Test from './components/Test'

import {BrowserRouter as Router } from "react-router-dom"
import { Suspense } from "react";
import { AppRouter } from "./Router";
import Spinner from "./components/statics/Spinner";

function App() {

  return (
    <Router>
      <Suspense fallback={<Spinner/>}>
        <AppRouter/>
      </Suspense>
    </Router>
  )
}



export default App
