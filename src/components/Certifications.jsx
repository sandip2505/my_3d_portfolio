import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

// Certification data with expanded details
const certifications = [
  {
    title: "Advanced React Development",
    organization: "Coursera",
    date: "August 2023",
    credentialURL: "https://www.coursera.org/account/accomplishments/example-react",
    skills: ["React", "Redux", "Context API"],
    color: "#61DAFB" // React color
  },
  {
    title: "Node.js Backend Development",
    organization: "Udemy",
    date: "May 2023",
    credentialURL: "https://www.udemy.com/certificate/example-nodejs",
    skills: ["Express.js", "REST APIs", "JWT"],
    color: "#68A063" // Node.js color
  },
  {
    title: "MongoDB Database Developer",
    organization: "MongoDB University",
    date: "January 2023",
    credentialURL: "https://university.mongodb.com/certification/example",
    skills: ["NoSQL", "Aggregation", "Indexing"],
    color: "#13AA52" // MongoDB color
  },
  {
    title: "CI/CD Pipeline Implementation",
    organization: "Coursera",
    date: "January 2023",
    credentialURL: "https://www.coursera.org/account/accomplishments/example-cicd",
    skills: ["Jenkins", "GitHub Actions", "Docker"],
    color: "#2088FF" // Approx CI/CD blue
  },
  {
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    date: "November 2022",
    credentialURL: "https://aws.amazon.com/certification/example",
    skills: ["EC2", "S3", "Lambda"],
    color: "#FF9900" // AWS color
  },
  {
    title: "Full Stack Web Development",
    organization: "freeCodeCamp",
    date: "September 2022",
    credentialURL: "https://www.freecodecamp.org/certification/example",
    skills: ["JavaScript", "HTML/CSS", "Responsive"],
    color: "#0A0A23" // freeCodeCamp color
  },
  {
    title: "TypeScript Fundamentals",
    organization: "Microsoft",
    date: "July 2022",
    credentialURL: "https://learn.microsoft.com/certifications/example",
    skills: ["Static Typing", "Interfaces", "Generics"],
    color: "#3178C6" // TypeScript color
  },
  {
    title: "Python for Data Science",
    organization: "DataCamp",
    date: "May 2022",
    credentialURL: "https://www.datacamp.com/certificate/example",
    skills: ["NumPy", "Pandas", "Matplotlib"],
    color: "#4584B6" // Python color
  },
  {
    title: "UI/UX Design Essentials",
    organization: "Dribbble",
    date: "March 2022",
    credentialURL: "https://dribbble.com/learn/certificates/example",
    skills: ["Figma", "Wireframing", "Prototyping"],
    color: "#EA4C89" // Dribbble color
  }
];

const CertificationCard = ({ certification }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, organization, date, credentialURL, skills, color } = certification;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300"
      style={{ borderTop: `4px solid ${color}` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-auto">
          <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">
            {organization} • {date}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {credentialURL && (
          <a 
            href={credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 mt-4 py-2 px-4 rounded-md transition-all duration-300 ${
              isHovered 
                ? "bg-blue-600 text-white" 
                : "bg-gray-800 text-gray-300"
            }`}
          >
            <span className="text-sm font-medium">View Credential</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="flex items-center gap-3 mb-4">
          <Award size={28} className="text-blue-500" />
          <p className="text-blue-500 uppercase tracking-wider font-medium text-sm">Professional Growth</p>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">Certifications & Achievements</h2>
        
        <div className="mb-12">
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            These certifications represent my commitment to continuous learning and professional development.
            Each credential reflects skills I've applied in real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={index}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;