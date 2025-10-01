import "../Styles/Infopage.css";
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  BookOpen,
  Lightbulb,
  Target,
  Heart,
  Smartphone,
  Mail,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Code2,
} from "lucide-react";

const Infopage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const journey = [
    {
      year: "2013",
      event: "Matriculated from Allendale Secondary School",
      icon: <GraduationCap size={16} />,
    },
    {
      year: "2014-2015",
      event: "National Certificate in HR Management at Nkangala TVET College",
      icon: <BookOpen size={16} />,
    },
    {
      year: "2016-2018",
      event: "HR Intern at Exxaro Resources - Started corporate career",
      icon: <Briefcase size={16} />,
    },
    {
      year: "2019-2020",
      event: "HR Officer → Senior HR Officer at GP Consult & Zest Weg",
      icon: <Target size={16} />,
    },
    {
      year: "2022-2023",
      event: "HR & Safety Coordinator at Prudent Construction",
      icon: <Briefcase size={16} />,
    },
    {
      year: "2023",
      event: "Built first website for MyQps - Programming spark ignited",
      icon: <Code2 size={16} />,
    },
    {
      year: "2023-Present",
      event: "Self-taught developer journey begins",
      icon: <Lightbulb size={16} />,
    },
  ];

  const learningResources = [
    "FreeCodeCamp - Primary learning platform",
    "W3Schools - Reference & tutorials",
    "YouTube tutorials - Practical demonstrations",
    "Documentation - Official resources",
    "AI Assistance - Personalized learning support",
    "Coding games - Making learning fun",
  ];

  return (
    <motion.div
      className="Infopage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="HeroSection">
        <div className="Container">
          <motion.div className="HeroContent" variants={itemVariants}>
            <div className="HeroText">
              <motion.div className="Badge" whileHover={{ scale: 1.05 }}>
                <MapPin size={16} />
                <span>From Corporate HR to Code Craftsman</span>
              </motion.div>

              <h1 className="HeroTitle">
                The Story Behind <span className="GradientText">"Dev Doc"</span>
              </h1>

              <p className="HeroDescription">
                From managing human resources in corporate South Africa to
                crafting digital experiences through code. My journey is a
                testament to the power of self-directed learning and the courage
                to pivot careers in pursuit of passion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="OriginSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>From Waterval Boven to Web Development</h2>
            <p>My path from small-town beginnings to digital creator</p>
          </motion.div>

          <div className="OriginContent">
            <motion.div className="OriginText" variants={itemVariants}>
              <p>
                Born in Waterval Boven in 1995, I spent most of my life in
                Middelburg before returning to my roots to pursue my HR diploma.
                Little did I know that my corporate journey would eventually
                lead me to discover my true passion: creating digital solutions
                that make a difference.
              </p>

              <p>
                The turning point came in 2023 when I built my first website for
                MyQps. That moment of creating something from code that people
                could actually use sparked something in me. I realized that
                while I enjoyed helping people through HR, I could help even
                more people by building tools and platforms that solve real
                problems.
              </p>

              <div className="KeyPoints">
                <motion.div
                  className="KeyPoint"
                  whileHover={{ scale: 1.02 }}
                  variants={itemVariants}
                >
                  <Heart size={20} />
                  <div>
                    <h4>Purpose Driven</h4>
                    <p>
                      Building solutions that fight unemployment and empower
                      small businesses
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="KeyPoint"
                  whileHover={{ scale: 1.02 }}
                  variants={itemVariants}
                >
                  <Lightbulb size={20} />
                  <div>
                    <h4>Self-Taught Mindset</h4>
                    <p>
                      Leveraging free resources and AI to master modern web
                      development
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="JourneyTimeline" variants={itemVariants}>
              <h3>My Journey Timeline</h3>
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className="TimelineItem"
                  whileHover={{ x: 5 }}
                  variants={itemVariants}
                >
                  <div className="TimelineMarker">{item.icon}</div>
                  <div className="TimelineContent">
                    <span className="TimelineYear">{item.year}</span>
                    <p className="TimelineEvent">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="LearningSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>My Learning Philosophy</h2>
            <p>How a self-taught developer masters modern web technologies</p>
          </motion.div>

          <div className="LearningContent">
            <motion.div className="LearningApproach" variants={itemVariants}>
              <h3>Smart Work Over Hard Work</h3>
              <p>
                I believe in working efficiently rather than just working hard.
                My approach combines:
              </p>

              <ul className="ApproachList">
                <li>
                  <strong>Practical Application:</strong> Learning by building
                  real projects for real clients
                </li>
                <li>
                  <strong>Resource Optimization:</strong> Leveraging free
                  platforms and AI to accelerate learning
                </li>
                <li>
                  <strong>Progressive Mastery:</strong> Starting with frontend
                  excellence before expanding to fullstack
                </li>
                <li>
                  <strong>Business Mindset:</strong> Building with SEO,
                  conversion, and user experience in mind
                </li>
              </ul>
            </motion.div>

            <motion.div className="ResourcesList" variants={itemVariants}>
              <h3>My Learning Toolkit</h3>
              <div className="ResourcesGrid">
                {learningResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    className="ResourceItem"
                    whileHover={{ scale: 1.05 }}
                    variants={itemVariants}
                  >
                    <BookOpen size={16} />
                    <span>{resource}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="FocusSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Current Focus & Future Vision</h2>
            <p>Where I am now and where I'm heading</p>
          </motion.div>

          <div className="FocusContent">
            <motion.div className="CurrentStack" variants={itemVariants}>
              <h3>🛠 Current Tech Stack</h3>
              <div className="StackList">
                <div className="StackCategory">
                  <h4>Core Technologies</h4>
                  <p>React, JavaScript, HTML5, CSS3</p>
                </div>
                <div className="StackCategory">
                  <h4>Libraries & Tools</h4>
                  <p>Framer Motion, GSAP, Tailwind CSS, Bootstrap</p>
                </div>
                <div className="StackCategory">
                  <h4>Backend Fundamentals</h4>
                  <p>Node.js, Express, MongoDB, REST APIs</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="FutureGoals" variants={itemVariants}>
              <h3>🎯 Future Goals</h3>
              <ul>
                <li>
                  Master advanced frontend animations and micro-interactions
                </li>
                <li>Build complex fullstack applications</li>
                <li>Contribute to open-source projects</li>
                <li>
                  Mentor other self-taught developers from similar backgrounds
                </li>
                <li>
                  Create digital solutions that address local South African
                  challenges
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="ContactSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing opportunities, collaborations, or
              just chatting about code
            </p>
          </motion.div>

          <motion.div className="ContactMethods" variants={itemVariants}>
            <motion.a
              href="https://wa.me/27687180502"
              className="ContactMethod"
              whileHover={{ scale: 1.05 }}
            >
              <Smartphone size={20} />
              <span>WhatsApp: 068 718 0502</span>
            </motion.a>

            <motion.a
              href="mailto:ntsako.khoza@yahoo.com"
              className="ContactMethod"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={20} />
              <span>ntsako.khoza@yahoo.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/doctor-khoza-b00746145/"
              className="ContactMethod"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink size={20} />
              <span>LinkedIn Profile</span>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@uncle.smol/"
              className="ContactMethod"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink size={20} />
              <span>TikTok: @uncle.smol</span>
            </motion.a>
          </motion.div>

          <motion.div className="FinalNote" variants={itemVariants}>
            <p>
              <strong>My promise:</strong> I'm not just looking for a job - I'm
              looking to create value. If you give me an opportunity, I'll pour
              my unique perspective as a career-transitioner and my hunger for
              seeing real-world impact into everything I build.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Infopage;
