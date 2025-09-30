import "../Styles/Footer.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Heart,
  Code2,
  Coffee,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ArrowUp,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer animation variants
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const logoVariants = {
    initial: {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
    },
    hover: {
      scale: 1.15,
      rotateY: [0, -15, 10, 0],
      rotateX: 5,
      transition: {
        rotateY: {
          duration: 0.8,
          ease: "easeInOut",
        },
        scale: {
          type: "spring",
          stiffness: 300,
        },
      },
    },
    tap: {
      scale: 0.9,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  // Quick links data
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Tech stack data
  const techStack = [
    "React",
    "JavaScript",
    "Node.js",
    "HTML5",
    "CSS3",
    "Framer Motion",
    "GSAP",
  ];

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/UncleSmol",
      color: "var(--color-neutral-400)",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "#0077b5",
    },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   url: "https://twitter.com",
    //   color: "#1da1f2",
    // },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dev.doc@outlook.com",
      color: "var(--color-accent-primary)",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Custom hook for mouse position tracking (same as navigation)
  const useMousePosition = (ref) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

      setMousePosition({ x, y });
    };

    return { mousePosition, handleMouseMove };
  };

  // Animated Social Link Component
  const AnimatedSocialLink = ({ social }) => {
    const itemRef = useRef(null);
    const { mousePosition, handleMouseMove } = useMousePosition(itemRef);
    const [isHovered, setIsHovered] = useState(false);

    const calculate3DTransform = () => {
      const { x, y } = mousePosition;

      const rotateY = x * 20;
      const rotateX = -y * 15;
      const translateX = x * 6;
      const translateY = y * 4;
      const translateZ = Math.abs(x * 20) + Math.abs(y * 15);

      return {
        rotateY,
        rotateX,
        x: translateX,
        y: translateY,
        z: translateZ,
        scale: 1.1,
      };
    };

    const calculateIconTransform = () => {
      const { x, y } = mousePosition;

      return {
        rotateZ: x * 15 + y * 8,
        scale: 1.2 + Math.abs(x * 0.15) + Math.abs(y * 0.1),
        y: y * -4,
        x: x * 3,
      };
    };

    const calculateGlowEffect = () => {
      const { x, y } = mousePosition;
      const intensity = Math.sqrt(x * x + y * y) * 30;

      return {
        boxShadow: `
          0 15px 30px rgba(0,0,0,0.3),
          0 0 ${intensity}px ${social.color}40,
          ${x * 15}px ${y * 15}px ${intensity}px ${social.color}20
        `,
      };
    };

    return (
      <motion.a
        ref={itemRef}
        href={social.url}
        className="SocialLink"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        animate={
          isHovered
            ? {
                ...calculate3DTransform(),
                ...calculateGlowEffect(),
              }
            : {
                rotateY: 0,
                rotateX: 0,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }
        }
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        style={{
          color: social.color,
          transformStyle: "preserve-3d",
        }}
        aria-label={`Visit our ${social.name}`}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={
            isHovered
              ? calculateIconTransform()
              : {
                  rotateZ: 0,
                  scale: 1,
                  y: 0,
                  x: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 12,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <social.icon size={20} />
        </motion.div>

        {/* Dynamic gradient overlay */}
        {isHovered && (
          <motion.div
            className="CursorGradient"
            animate={{
              x: mousePosition.x * 40,
              y: mousePosition.y * 40,
              opacity: 0.4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{
              background: `radial-gradient(circle, ${social.color}40 0%, transparent 70%)`,
            }}
          />
        )}
      </motion.a>
    );
  };

  // Animated Footer Link Component
  const AnimatedFooterLink = ({ link }) => {
    const itemRef = useRef(null);
    const { mousePosition, handleMouseMove } = useMousePosition(itemRef);
    const [isHovered, setIsHovered] = useState(false);

    const calculate3DTransform = () => {
      const { x, y } = mousePosition;

      const rotateY = x * 10;
      const rotateX = -y * 8;
      const translateX = x * 3;
      const translateY = y * 2;

      return {
        rotateY,
        rotateX,
        x: translateX,
        y: translateY,
        scale: 1.05,
      };
    };

    const calculateIconTransform = () => {
      const { x, y } = mousePosition;

      return {
        rotateZ: x * 10,
        scale: 1.1,
        x: x * 2,
      };
    };

    return (
      <motion.li
        key={link.name}
        className="LinkItem"
        ref={itemRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.a
          href={link.path}
          className="FooterLink"
          animate={
            isHovered
              ? calculate3DTransform()
              : {
                  rotateY: 0,
                  rotateX: 0,
                  x: 0,
                  y: 0,
                  scale: 1,
                }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {link.name}
          <motion.span
            animate={
              isHovered
                ? calculateIconTransform()
                : {
                    rotateZ: 0,
                    scale: 1,
                    x: 0,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 400,
            }}
          >
            <ExternalLink size={14} />
          </motion.span>
        </motion.a>
      </motion.li>
    );
  };

  // Animated Tech Pill Component
  const AnimatedTechPill = ({ tech, index }) => {
    const itemRef = useRef(null);
    const { mousePosition, handleMouseMove } = useMousePosition(itemRef);
    const [isHovered, setIsHovered] = useState(false);

    const calculate3DTransform = () => {
      const { x, y } = mousePosition;

      const rotateY = x * 8;
      const rotateX = -y * 6;
      const translateZ = Math.abs(x * 10) + Math.abs(y * 8);

      return {
        rotateY,
        rotateX,
        z: translateZ,
        scale: 1.05,
        y: -2,
      };
    };

    return (
      <motion.span
        key={tech}
        className="TechPill"
        ref={itemRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={
          isHovered
            ? calculate3DTransform()
            : {
                rotateY: 0,
                rotateX: 0,
                z: 0,
                scale: 1,
                y: 0,
              }
        }
        transition={{
          type: "spring",
          stiffness: 200,
          delay: index * 0.1,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {tech}
      </motion.span>
    );
  };

  // Animated Scroll to Top Button
  const AnimatedScrollButton = () => {
    const itemRef = useRef(null);
    const { mousePosition, handleMouseMove } = useMousePosition(itemRef);
    const [isHovered, setIsHovered] = useState(false);

    const calculate3DTransform = () => {
      const { x, y } = mousePosition;

      const rotateY = x * 15;
      const rotateX = -y * 12;
      const translateZ = Math.abs(x * 15) + Math.abs(y * 12);

      return {
        rotateY,
        rotateX,
        z: translateZ,
        scale: 1.15,
        y: -3,
      };
    };

    const calculateIconTransform = () => {
      const { x, y } = mousePosition;

      return {
        y: y * -2,
        scale: 1.1,
      };
    };

    return (
      <motion.button
        className="ScrollToTop"
        ref={itemRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={scrollToTop}
        animate={
          isHovered
            ? calculate3DTransform()
            : {
                rotateY: 0,
                rotateX: 0,
                z: 0,
                scale: 1,
                y: 0,
              }
        }
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 18,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        aria-label="Scroll to top"
      >
        <motion.div
          animate={
            isHovered
              ? calculateIconTransform()
              : {
                  y: 0,
                  scale: 1,
                }
          }
          transition={{
            type: "spring",
            stiffness: 400,
          }}
        >
          <ArrowUp size={20} />
        </motion.div>

        {isHovered && (
          <motion.div
            className="CursorGradient"
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * 30,
              opacity: 0.3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <motion.footer
      className="FooterContainer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Main Footer Content */}
      <div className="FooterContent">
        {/* Brand Section */}
        <motion.div
          className="FooterSection BrandSectionWrapper"
          variants={itemVariants}
        >
          <motion.div
            className="BrandSection"
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <Code2 className="BrandIcon" size={32} />
            <h3 className="BrandName">DevDoc</h3>
            <p className="BrandTagline">
              Building digital experiences that make a difference
            </p>
            <motion.div className="MadeWithLove" whileHover={{ scale: 1.05 }}>
              <span>Made with </span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ff6b6b", "#ff8e8e", "#ff6b6b"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span> and </span>
              <Coffee size={16} />
              <span> by passionate developers</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="FooterSection LinksSection"
          variants={itemVariants}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <h4 className="SectionTitle">Quick Links</h4>
          <ul className="LinkList">
            {quickLinks.map((link) => (
              <AnimatedFooterLink key={link.name} link={link} />
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="FooterSection TechSection"
          variants={itemVariants}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <h4 className="SectionTitle">Tech Stack</h4>
          <div className="TechStack">
            {techStack.map((tech, index) => (
              <AnimatedTechPill key={tech} tech={tech} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="FooterSection ContactSection"
          variants={itemVariants}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <h4 className="SectionTitle">Get In Touch</h4>
          <div className="ContactInfo">
            <motion.div className="ContactItem" whileHover={{ x: 5 }}>
              <MapPin size={16} />
              <span>Emalahleni MP, RSA</span>
            </motion.div>
            <motion.div className="ContactItem" whileHover={{ x: 5 }}>
              <Mail size={16} />
              <span>dev,doc@outloo.com</span>
            </motion.div>
            <motion.div className="ContactItem" whileHover={{ x: 5 }}>
              <Phone size={16} />
              <span>+27 68 718 0502</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="SocialLinks">
            {socialLinks.map((social) => (
              <AnimatedSocialLink key={social.name} social={social} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="FooterBottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="FooterBottomContent">
          <div className="Copyright">
            © {currentYear} DevDoc. All rights reserved.
          </div>

          <div className="FooterLinks">
            <a href="/privacy" className="FooterBottomLink">
              Privacy Policy
            </a>
            <a href="/terms" className="FooterBottomLink">
              Terms of Service
            </a>
            <a href="/cookies" className="FooterBottomLink">
              Cookie Policy
            </a>
          </div>

          {/* Scroll to Top Button */}
          <AnimatedScrollButton />
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
