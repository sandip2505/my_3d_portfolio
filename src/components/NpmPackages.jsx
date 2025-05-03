import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BsArrowRight } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { RiNpmjsFill } from "react-icons/ri";

const PackageCard = ({ index, title, description, version, publishedDate, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className="w-full sm:w-[48%] p-1"
  >
    <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-[1px] rounded-2xl shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
      <div className="bg-tertiary rounded-2xl p-6 relative overflow-hidden h-full">
        {/* Background Elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-800/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
        
        {/* NPM Icon */}
        <div className="absolute top-4 right-4 text-purple-500 opacity-20">
          <RiNpmjsFill size={32} />
        </div>
        
        {/* Content */}
        <div className="flex items-start mb-4">
          <div className="mr-4 p-2 bg-white/5 rounded-lg">
            <FiPackage className="text-purple-400" size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold text-[22px]">{title}</h3>
            <div className="flex items-center mt-1">
              <span className="text-[12px] py-1 px-3 bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/20">
                v{version}
              </span>
              <span className="ml-3 text-[12px] text-secondary">
                {publishedDate}
              </span>
            </div>
          </div>
        </div>
        
        <p className="mt-3 text-secondary text-[14px] min-h-[60px]">{description}</p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-purple-300 hover:text-white text-[14px] font-medium group transition-colors duration-300"
        >
          View on NPM
          <BsArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </motion.div>
);

const NpmPackages = () => {
    const packages = [
        {
          title: "trustcheckjs",
          description: "A lightweight and flexible validation library for JavaScript applications. Offers built-in support for common data types, customizable validation rules, and seamless integration with popular frameworks like React and Express. Perfect for simplifying both client-side and server-side input validation.",
          version: "1.0.11",
          publishedDate: "a year ago",
          link: "https://www.npmjs.com/package/trustcheckjs"
        },
        {
          title: "node-crudify",
          description: "Quickly scaffold a fully functional Node.js project with built-in CRUD APIs. Ideal for prototyping RESTful backend services with minimal setup. Supports MongoDB out-of-the-box and follows best practices for maintainable and scalable backend architecture.",
          version: "1.0",
          publishedDate: "5 months ago",
          link: "https://www.npmjs.com/package/node-crudify"
        },
        {
          title: "dummy-data-factory",
          description: "A powerful and customizable library for generating realistic fake data for testing, seeding databases, or demos. Includes support for user profiles, products, addresses, and more, with easy configuration and randomization options.",
          version: "1.0.2",
          publishedDate: "2 months ago",
          link: "https://www.npmjs.com/package/dummy-data-factory"
        },
        {
          title: "console-genius",
          description: "An elegant and developer-friendly logging utility for Node.js. Enhance console output with color-coded logs, timestamps, log levels, and custom formatting to improve debugging and maintain cleaner development environments.",
          version: "0.6.0",
          publishedDate: "11 days ago",
          link: "https://www.npmjs.com/package/console-genius"
        },
      ];
      

  const totalDownloads = "4,200+";
  const totalStars = "280+";

  return (
    <>
      <motion.div variants={textVariant()} className="relative">
        <p className={styles.sectionSubText}>MY CONTRIBUTIONS</p>
        <h2 className={styles.sectionHeadText}>NPM Packages.</h2>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-20 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I've developed several NPM packages used by developers worldwide to solve
          common challenges and improve development workflows.
        </motion.p>
        
        <motion.div 
          variants={fadeIn("left", "", 0.2, 1)}
          className="flex mt-4 sm:mt-0 space-x-4"
        >
          <div className="flex flex-col items-center px-4 py-2 bg-tertiary rounded-lg border border-white/5">
            <span className="text-white font-bold text-2xl">{totalDownloads}</span>
            <span className="text-secondary text-sm">Downloads</span>
          </div>
          <div className="flex flex-col items-center px-4 py-2 bg-tertiary rounded-lg border border-white/5">
            <span className="text-white font-bold text-2xl">{totalStars}</span>
            <span className="text-secondary text-sm">GitHub Stars</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-wrap justify-between gap-y-10">
        {packages.map((pkg, index) => (
          <PackageCard key={`package-${index}`} index={index} {...pkg} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(NpmPackages, "npm");