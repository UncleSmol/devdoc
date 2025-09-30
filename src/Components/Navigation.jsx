import "../Styles/Navigation.css";
import { motion } from "framer-motion";

import AppLogo from "../assets/dev-doc-logo.svg";
import HomepageIcon from "../assets/house-line-fill.png";
import InfoPageIcon from "../assets/info-fill.png";
import MyWorkPageIcon from "../assets/briefcase-fill.png";
import ConnectWithUSPageIcon from "../assets/phone-call-fill.png";
import WorkWithMePageIcon from "../assets/users-four-fill.png";

const navItemArr = [
  {
    navItemIdKey: 1,
    navItemLabel: "home",
    navItemPath: "/",
    navItemIcon: HomepageIcon,
    navItemAlt: "Homepage Icon",
  },
  {
    navItemIdKey: 2,
    navItemLabel: "info",
    navItemPath: "/info",
    navItemIcon: InfoPageIcon,
    navItemAlt: "Info Page Icon",
  },
  {
    navItemIdKey: 3,
    navItemLabel: "my work",
    navItemPath: "/my-work",
    navItemIcon: MyWorkPageIcon,
    navItemAlt: "My Work Page Icon",
  },
  {
    navItemIdKey: 4,
    navItemLabel: "Connect",
    navItemPath: "/",
    navItemIcon: ConnectWithUSPageIcon,
    navItemAlt: "Connect With Us Page Icon",
  },
  {
    navItemIdKey: 5,
    navItemLabel: "Work With Me",
    navItemPath: "/work-with-me",
    navItemIcon: WorkWithMePageIcon,
  },
];

// 3D Animation variants
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

const navItem3DVariants = {
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

const logo3DVariants = {
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

const navContainer3DVariants = {
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

const header3DVariants = {
  hidden: {
    y: -120,
    opacity: 0,
    rotateX: -25,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      duration: 1,
    },
  },
};

const Navigation = () => {
  return (
    <motion.header
      className="HeaderContainer"
      variants={header3DVariants}
      initial="hidden"
      animate="visible"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      <motion.img
        src={AppLogo}
        alt="App Logo"
        variants={logo3DVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        style={{
          transformStyle: "preserve-3d",
          cursor: "pointer",
        }}
      />

      <motion.nav
        className="NavbarContainer"
        variants={navContainer3DVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.ul
          className="NavList"
          variants={container3DVariants}
          initial="hidden"
          animate="visible"
          style={{
            transformStyle: "preserve-3d",
            perspective: "800px",
          }}
        >
          {navItemArr.map((navItem) => (
            <motion.li
              className="NavItem"
              key={navItem.navItemIdKey}
              variants={navItem3DVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.a
                className="NavItemLink"
                href={navItem.navItemPath}
                whileHover={{
                  boxShadow:
                    "0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(200, 63, 18, 0.3)",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.img
                  className="NavItemImg"
                  src={navItem.navItemIcon}
                  alt={navItem.navItemAlt}
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <motion.p
                  className="NavItemLabel"
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {navItem.navItemLabel}
                </motion.p>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
};

export default Navigation;
