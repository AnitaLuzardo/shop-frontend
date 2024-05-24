import {BrowserRouter as Router } from "react-router-dom"
import { Suspense } from "react";
import { AppRouter } from "./Router";
// import Spinner from "./components/statics/Spinner";

function App() {

  return (
    <Router>
      <Suspense>
        <AppRouter/>
      </Suspense>
    </Router>
  )
}

export default App
