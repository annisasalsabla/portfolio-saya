import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaLaravel, FaPhp, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiJavascript, SiDart, SiMysql, SiPostgresql, SiXcode } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    }
  };

  const skillCategories = [
    {
      title: "Bahasa & Teknologi",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="icon laravel" /> },
        { name: "React", icon: <FaReact className="icon react" /> },
        { name: "Flutter", icon: <SiFlutter className="icon flutter" /> },
        { name: "Kotlin", icon: <SiKotlin className="icon kotlin" /> },
        { name: "PHP", icon: <FaPhp className="icon php" /> },
        { name: "JavaScript", icon: <SiJavascript className="icon js" /> },
        { name: "Dart", icon: <SiDart className="icon dart" /> },
        { name: "HTML5", icon: <FaHtml5 className="icon html" /> },
        { name: "CSS3", icon: <FaCss3Alt className="icon css" /> },
        { name: "MySQL", icon: <SiMysql className="icon mysql" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="icon pg" /> },
      ]
    },
    {
      title: "Perangkat Pengembangan",
      skills: [
        { name: "VS Code", icon: <VscVscode className="icon vscode" /> },
        { name: "Git", icon: <FaGitAlt className="icon git" /> },
        { name: "GitHub", icon: <FaGithub className="icon github" /> },
        { name: "Figma", icon: <FaFigma className="icon figma" /> },
        { name: "Android Studio", image: "/images/androidstudio.png" },
        { name: "Docker", icon: <FaDocker className="icon docker" /> },
        { name: "Xcode", icon: <SiXcode className="icon xcode" /> },
      ]
    },
    {
      title: "Perkantoran & Desain",
      skills: [
        { name: "Canva", image: "/images/canva.png" },
        { name: "Microsoft Word", image: "/images/msword.png" },
        { name: "Microsoft PowerPoint", image: "/images/msppt.png" },
        { name: "Microsoft Excel", image: "/images/msexcel.png" },
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Keahlian &amp; Tools</h2>
          <p className="section-subtitle">Teknologi dan perangkat yang saya gunakan untuk mewujudkan ide menjadi produk nyata.</p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category-block"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-badges">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="skill-badge"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {skill.icon ? (
                      <span className="skill-icon-wrapper">{skill.icon}</span>
                    ) : (
                      <img src={skill.image} alt={skill.name} className="skill-image-icon" loading="lazy" />
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
