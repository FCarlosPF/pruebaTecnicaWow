import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./Router";
import Spinner from "./components/statics/Spinner";

function App() {
 
  return (
    <Router>
      <Suspense fallback={Spinner}>
        <AppRouter/>
      </Suspense>
    </Router>
  );
}

export default App;
