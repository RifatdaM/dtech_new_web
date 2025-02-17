import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home.page";
import Loading from "./pages/Loading.page";
import './globals.scss';
import { HelmetProvider } from 'react-helmet-async';
import Home2 from "./pages/Home2.page";

function App() {


  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <HelmetProvider>

          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/home2" element={<Home />} />
            {/* <Route path="/" element={<Loading />} /> */}
          </Routes>
        </HelmetProvider>
      </Suspense>
    </Router>
  );
}

export default App
