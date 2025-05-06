import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  NpmPackages,
  Certifications,
} from "./components";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Helmet>
            <title>Sandip Ganava | Frontend Developer & Software Engineer</title>
            <meta name="description" content="Professional portfolio of Sandip Ganava, showcasing skills in frontend development, projects, and expertise in modern web technologies." />
            <meta name="keywords" content="Sandip Ganava, Frontend Developer, Software Engineer, React, JavaScript, Web Development, Portfolio" />
            {/* You can dynamically change these based on current route */}
          </Helmet>

          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <NpmPackages />
          {/* <Certifications /> */}
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;