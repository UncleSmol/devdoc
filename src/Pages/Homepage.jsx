import "../Styles/Homepage.css";
import FeaturedProjects from "../Components/common/FeaturedProjects";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  Code2,
  Cpu,
  Database,
  Server,
  Sparkles,
} from "lucide-react";
import { usePersonalInfo } from "../hooks/usePersonalInfo";

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

const visualContainer3DVariants = {
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

const floatingIconVariants = {
  float: {
    y: [-10, 10, -10],
    rotateZ: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Homepage = () => {
  const { personalInfo, loading, error, socialLinks } = usePersonalInfo();

  if (loading) {
    return (
      <div className="Homepage Loading">
        <div className="LoadingSpinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Homepage Error">
        <div className="ErrorMessage">Error loading profile: {error}</div>
      </div>
    );
  }

  return (
    <motion.div
      className="Homepage"
      variants={container3DVariants}
      initial="hidden"
      animate="visible"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      {/* Hero Section with Visual Elements */}
      <section className="HeroSection">
        {/* Animated Background Elements */}
        <div className="HeroBackground">
          <motion.div
            className="bg-element"
            style={{ top: "20%", left: "10%" }}
            variants={floatingIconVariants}
            animate="float"
          >
            <Code2 size={32} />
          </motion.div>
          <motion.div
            className="bg-element"
            style={{ top: "30%", right: "15%" }}
            variants={floatingIconVariants}
            animate="float"
            transition={{ delay: 0.5 }}
          >
            <Cpu size={32} />
          </motion.div>
          <motion.div
            className="bg-element"
            style={{ bottom: "25%", left: "15%" }}
            variants={floatingIconVariants}
            animate="float"
            transition={{ delay: 1 }}
          >
            <Database size={32} />
          </motion.div>
          <motion.div
            className="bg-element"
            style={{ bottom: "35%", right: "10%" }}
            variants={floatingIconVariants}
            animate="float"
            transition={{ delay: 1.5 }}
          >
            <Server size={32} />
          </motion.div>
        </div>

        <div className="HeroContent">
          {/* Text Content */}
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
              className="HeroBadge"
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
                <Sparkles size={16} />
              </motion.div>
              <motion.span
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Frontend Developer & Digital Craftsman
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
              <span className="GradientText">
                {personalInfo?.name || "Ntsako Khoza"}
              </span>
              <br />
              Crafting Digital Experiences
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
                "I transform ideas into engaging digital experiences using modern frontend technologies. Specializing in React, animations, and pixel-perfect interfaces."}
            </motion.p>

            <motion.div
              className="HeroActions"
              variants={container3DVariants}
              initial="hidden"
              animate="visible"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.button
                className="Button PrimaryButton"
                variants={button3DVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={() =>
                  (window.location.href = `mailto:${
                    personalInfo?.email || "ntsako.khoza@yahoo.com"
                  }`)
                }
              >
                <motion.div
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Mail size={18} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Get In Touch
                </motion.span>
              </motion.button>

              <motion.button
                className="Button SecondaryButton"
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
                  <Download size={18} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Download Resume
                </motion.span>
              </motion.button>
            </motion.div>

            <motion.div
              className="SocialProof"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="SocialLinks"
                variants={container3DVariants}
                initial="hidden"
                animate="visible"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {socialLinks?.github && (
                  <motion.a
                    href={socialLinks.github}
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
                      <Github size={20} />
                    </motion.div>
                  </motion.a>
                )}
                {socialLinks?.linkedin && (
                  <motion.a
                    href={socialLinks.linkedin}
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
                      <Linkedin size={20} />
                    </motion.div>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="HeroVisual"
            variants={visualContainer3DVariants}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="VisualContainer"
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.img
                src="https://cdn.pixabay.com/photo/2025/09/16/10/33/web-development-9837671_960_720.png"
                alt="Web Development"
                className="HeroImage"
                variants={item3DVariants}
                whileHover="hover"
              />
              <div className="FloatingTechIcons">
                <motion.div
                  className="tech-icon"
                  variants={floatingIconVariants}
                  animate="float"
                >
                  <Cpu size={24} />
                </motion.div>
                <motion.div
                  className="tech-icon"
                  variants={floatingIconVariants}
                  animate="float"
                  transition={{ delay: 0.3 }}
                >
                  <Database size={24} />
                </motion.div>
                <motion.div
                  className="tech-icon"
                  variants={floatingIconVariants}
                  animate="float"
                  transition={{ delay: 0.6 }}
                >
                  <Server size={24} />
                </motion.div>
                <motion.div
                  className="tech-icon"
                  variants={floatingIconVariants}
                  animate="float"
                  transition={{ delay: 0.9 }}
                >
                  <Code2 size={24} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="ProjectsSection">
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
              Featured Projects
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              A selection of my best work, showcasing modern frontend
              development with React, animations, and responsive design.
            </motion.p>
          </motion.div>

          <FeaturedProjects />

          <motion.div
            className="SectionFooter"
            variants={item3DVariants}
            whileHover="hover"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.a
              href="/my-work"
              className="ViewAllButton"
              variants={button3DVariants}
              initial="normal"
              whileHover="hover"
              whileTap="tap"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.span
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                View All Projects
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;
