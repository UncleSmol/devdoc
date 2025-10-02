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
} from "lucide-react";
import { usePersonalInfo } from "../hooks/usePersonalInfo";

// Import actual tech icons
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiFramer,
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
} from "react-icons/si";

const Infopage = () => {
  const {
    personalInfo,
    loading,
    error,
    education,
    experience,
    skills,
    learningPhilosophy,
    currentFocus,
    futureGoals,
    socialLinks,
  } = usePersonalInfo();

  // 3D Animation variants - Inspired by Navigation
  const container3DVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item3DVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      rotateY: 20,
      rotateX: -10,
      y: -12,
      scale: 1.08,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12,
      },
    },
    tap: {
      rotateY: 0,
      rotateX: 5,
      scale: 0.92,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const icon3DVariants = {
    normal: {
      rotateZ: 0,
      scale: 1,
      y: 0,
    },
    hover: {
      rotateZ: 15,
      scale: 1.3,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 8,
      },
    },
  };

  const text3DVariants = {
    normal: {
      y: 0,
      opacity: 0.8,
      rotateX: 0,
    },
    hover: {
      y: 4,
      opacity: 1,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const button3DVariants = {
    normal: {
      scale: 1,
      rotateX: 0,
    },
    hover: {
      scale: 1.05,
      rotateX: -5,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

  const heroContainer3DVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  const techContainer3DVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotateY: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  const sectionContainer3DVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
        duration: 0.8,
      },
    },
  };

  // Tech stack data with actual icons
  const techStack = [
    { name: "React", icon: <SiReact size={24} />, color: "#61DAFB" },
    { name: "JavaScript", icon: <SiJavascript size={24} />, color: "#F7DF1E" },
    { name: "HTML5", icon: <SiHtml5 size={24} />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 size={24} />, color: "#1572B6" },
    { name: "Node.js", icon: <SiNodedotjs size={24} />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb size={24} />, color: "#47A248" },
    { name: "Express", icon: <SiExpress size={24} />, color: "#CCCCCC" },
    { name: "Git", icon: <SiGit size={24} />, color: "#F05032" },
    { name: "Framer Motion", icon: <SiFramer size={24} />, color: "#0055FF" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={24} />,
      color: "#38BDF8",
    },
    { name: "Bootstrap", icon: <SiBootstrap size={24} />, color: "#7952B3" },
    { name: "GSAP", icon: <SiGreensock size={24} />, color: "#88CE02" },
  ];

  // Dynamic journey timeline from personal info
  const journey = experience || [
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
      icon: <Briefcase size={16} />,
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

  if (loading) {
    return (
      <div className="Infopage Loading">
        <div className="LoadingSpinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Infopage Error">
        <div className="ErrorMessage">Error loading profile: {error}</div>
      </div>
    );
  }

  return (
    <motion.div
      className="Infopage"
      variants={container3DVariants}
      initial="hidden"
      animate="visible"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      {/* Hero Section with Tech Stack Side by Side */}
      <section className="HeroSection">
        <div className="Container">
          <div className="HeroContent">
            {/* Left Side - Hero Text */}
            <motion.div
              className="HeroText"
              variants={heroContainer3DVariants}
              initial="hidden"
              animate="visible"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="Badge"
                variants={item3DVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <MapPin size={16} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  From Corporate HR to Code Craftsman
                </motion.span>
              </motion.div>

              <motion.h1
                className="HeroTitle"
                variants={item3DVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                The Story Behind <span className="GradientText">"Dev Doc"</span>
              </motion.h1>

              <motion.p
                className="HeroDescription"
                variants={item3DVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {personalInfo?.bio ||
                  "From managing human resources in corporate South Africa to crafting digital experiences through code. My journey is a testament to the power of self-directed learning and the courage to pivot careers in pursuit of passion."}
              </motion.p>
            </motion.div>

            {/* Right Side - Tech Stack */}
            <motion.div
              className="TechStackSidebar"
              variants={techContainer3DVariants}
              initial="hidden"
              animate="visible"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="TechStackHeader"
                variants={item3DVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <h3>Tech Stack</h3>
                <p>Technologies I work with</p>
              </motion.div>

              <motion.div
                className="TechGrid"
                variants={container3DVariants}
                initial="hidden"
                animate="visible"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "800px",
                }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="TechCard"
                    variants={item3DVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      "--tech-color": tech.color,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      className="TechIcon"
                      style={{ color: tech.color }}
                      variants={icon3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    <motion.span
                      className="TechName"
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {tech.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <motion.section
        className="OriginSection"
        variants={sectionContainer3DVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="Container">
          <motion.div
            className="SectionHeader"
            variants={item3DVariants}
            whileHover="hover"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h2
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              From Waterval Boven to Web Development
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              My path from small-town beginnings to digital creator
            </motion.p>
          </motion.div>

          <div className="OriginContent">
            <motion.div
              className="OriginText"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.p
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Born in Waterval Boven in 1995, I spent most of my life in
                Middelburg before returning to my roots to pursue my HR diploma.
                Little did I know that my corporate journey would eventually
                lead me to discover my true passion: creating digital solutions
                that make a difference.
              </motion.p>

              <motion.p
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                The turning point came in 2023 when I built my first website for
                MyQps. That moment of creating something from code that people
                could actually use sparked something in me. I realized that
                while I enjoyed helping people through HR, I could help even
                more people by building tools and platforms that solve real
                problems.
              </motion.p>

              <div className="KeyPoints">
                <motion.div
                  className="KeyPoint"
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    variants={icon3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Heart size={20} />
                  </motion.div>
                  <div>
                    <motion.h4
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Purpose Driven
                    </motion.h4>
                    <motion.p
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Building solutions that fight unemployment and empower
                      small businesses
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div
                  className="KeyPoint"
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    variants={icon3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Lightbulb size={20} />
                  </motion.div>
                  <div>
                    <motion.h4
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Self-Taught Mindset
                    </motion.h4>
                    <motion.p
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Leveraging free resources and AI to master modern web
                      development
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="JourneyTimeline"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.h3
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                My Journey Timeline
              </motion.h3>
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className="TimelineItem"
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="TimelineMarker">
                    <motion.div
                      variants={icon3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {item.icon || <Briefcase size={16} />}
                    </motion.div>
                  </div>
                  <div className="TimelineContent">
                    <motion.span
                      className="TimelineYear"
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {item.year}
                    </motion.span>
                    <motion.p
                      className="TimelineEvent"
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {typeof item === "string"
                        ? item
                        : item.event || item.position || item.qualification}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Learning Philosophy */}
      <motion.section
        className="LearningSection"
        variants={sectionContainer3DVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="Container">
          <motion.div
            className="SectionHeader"
            variants={item3DVariants}
            whileHover="hover"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h2
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              My Learning Philosophy
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              How a self-taught developer masters modern web technologies
            </motion.p>
          </motion.div>

          <div className="LearningContent">
            <motion.div
              className="LearningApproach"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.h3
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Smart Work Over Hard Work
              </motion.h3>
              <motion.p
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {learningPhilosophy ||
                  "I believe in working efficiently rather than just working hard. My approach combines:"}
              </motion.p>

              {!learningPhilosophy && (
                <ul className="ApproachList">
                  {[
                    "Practical Application: Learning by building real projects for real clients",
                    "Resource Optimization: Leveraging free platforms and AI to accelerate learning",
                    "Progressive Mastery: Starting with frontend excellence before expanding to fullstack",
                    "Business Mindset: Building with SEO, conversion, and user experience in mind",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={item3DVariants}
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <strong>{item.split(":")[0]}:</strong>
                      {item.split(":")[1]}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>

            <motion.div
              className="ResourcesList"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.h3
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                My Learning Toolkit
              </motion.h3>
              <div className="ResourcesGrid">
                {learningResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    className="ResourceItem"
                    variants={item3DVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      variants={icon3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <BookOpen size={16} />
                    </motion.div>
                    <motion.span
                      variants={text3DVariants}
                      initial="normal"
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {resource}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Current Focus */}
      <motion.section
        className="FocusSection"
        variants={sectionContainer3DVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="Container">
          <motion.div
            className="SectionHeader"
            variants={item3DVariants}
            whileHover="hover"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h2
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Current Focus & Future Vision
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Where I am now and where I'm heading
            </motion.p>
          </motion.div>

          <div className="FocusContent">
            <motion.div
              className="CurrentStack"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.h3
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                🛠 Current Focus
              </motion.h3>
              <div className="StackList">
                {currentFocus ? (
                  <motion.p
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {currentFocus}
                  </motion.p>
                ) : (
                  <>
                    {[
                      {
                        title: "Core Technologies",
                        content: "React, JavaScript, HTML5, CSS3",
                      },
                      {
                        title: "Libraries & Tools",
                        content: "Framer Motion, GSAP, Tailwind CSS, Bootstrap",
                      },
                      {
                        title: "Backend Fundamentals",
                        content: "Node.js, Express, MongoDB, REST APIs",
                      },
                    ].map((category, index) => (
                      <motion.div
                        key={index}
                        className="StackCategory"
                        variants={item3DVariants}
                        whileHover="hover"
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <motion.h4
                          variants={text3DVariants}
                          initial="normal"
                          whileHover="hover"
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                        >
                          {category.title}
                        </motion.h4>
                        <motion.p
                          variants={text3DVariants}
                          initial="normal"
                          whileHover="hover"
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                        >
                          {category.content}
                        </motion.p>
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            </motion.div>

            <motion.div
              className="FutureGoals"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.h3
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                🎯 Future Goals
              </motion.h3>
              {futureGoals ? (
                <motion.p
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {futureGoals}
                </motion.p>
              ) : (
                <ul>
                  {[
                    "Master advanced frontend animations and micro-interactions",
                    "Build complex fullstack applications",
                    "Contribute to open-source projects",
                    "Mentor other self-taught developers from similar backgrounds",
                    "Create digital solutions that address local South African challenges",
                  ].map((goal, index) => (
                    <motion.li
                      key={index}
                      variants={item3DVariants}
                      whileHover="hover"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {goal}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="ContactSection"
        variants={sectionContainer3DVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="Container">
          <motion.div
            className="SectionHeader"
            variants={item3DVariants}
            whileHover="hover"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h2
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              I'm always open to discussing opportunities, collaborations, or
              just chatting about code
            </motion.p>
          </motion.div>

          <motion.div
            className="ContactMethods"
            variants={container3DVariants}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {socialLinks?.whatsapp && (
              <motion.a
                href={`https://wa.me/${socialLinks.whatsapp.replace(
                  /\D/g,
                  ""
                )}`}
                className="ContactMethod"
                variants={button3DVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Smartphone size={20} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  WhatsApp: {socialLinks.whatsapp}
                </motion.span>
              </motion.a>
            )}

            <motion.a
              href={`mailto:${personalInfo?.email || "ntsako.khoza@yahoo.com"}`}
              className="ContactMethod"
              variants={button3DVariants}
              initial="normal"
              whileHover="hover"
              whileTap="tap"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                variants={icon3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Mail size={20} />
              </motion.div>
              <motion.span
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {personalInfo?.email || "ntsako.khoza@yahoo.com"}
              </motion.span>
            </motion.a>

            {socialLinks?.linkedin && (
              <motion.a
                href={socialLinks.linkedin}
                className="ContactMethod"
                variants={button3DVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <ExternalLink size={20} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  LinkedIn Profile
                </motion.span>
              </motion.a>
            )}

            {socialLinks?.tiktok && (
              <motion.a
                href={socialLinks.tiktok}
                className="ContactMethod"
                variants={button3DVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <ExternalLink size={20} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  TikTok:{" "}
                  {socialLinks.tiktok.includes("@")
                    ? socialLinks.tiktok
                    : "@uncle.smol"}
                </motion.span>
              </motion.a>
            )}
          </motion.div>

          <motion.div
            className="FinalNote"
            variants={item3DVariants}
            whileHover="hover"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <strong>My promise:</strong> I'm not just looking for a job - I'm
              looking to create value. If you give me an opportunity, I'll pour
              my unique perspective as a career-transitioner and my hunger for
              seeing real-world impact into everything I build.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Infopage;
