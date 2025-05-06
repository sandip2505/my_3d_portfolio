import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      {/* SEO-specific meta tags for the Hero section */}
      <Helmet>
        <title>Sandip Ganava | Full-Stack MERN Developer</title>
        <meta
          name="description"
          content="Sandip Ganava is a skilled full-stack developer specializing in MERN stack applications with expertise in building modern, responsive web solutions."
        />
        {/* Structured data for personal profile */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sandip Ganava",
              "url": "https://yourwebsite.com",
              "jobTitle": "Full-Stack MERN Developer",
              "knowsAbout": ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Web Development"]
            }
          `}
        </script>
      </Helmet>

      {/* Using semantic HTML5 elements for better SEO */}
      <header
        className={`relative w-full h-screen mx-auto`}
        id="home"
        aria-label="Introduction section"
      >
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div
              className="w-5 h-5 rounded-full bg-[#915EFF]"
              aria-hidden="true"
            />
            <div
              className="w-1 sm:h-80 h-40 violet-gradient"
              aria-hidden="true"
            />
          </div>

          <div>
            {/* Using proper heading hierarchy */}
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Sandip</span>
            </h1>
            {/* Converting p to h2 for better heading structure while maintaining styles */}
            <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>
              I build full-stack web apps <br className="sm:block hidden" />
              using the MERN stack
            </h2>
          </div>
        </div>

        {/* Adding proper aria labels for accessibility */}

        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a
            href="#about"
            aria-label="Scroll down to about section"
            className="focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
          >
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
                aria-hidden="true"
              />
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Hero;
