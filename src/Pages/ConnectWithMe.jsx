import "../Styles/ConnectWithMe.css";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  FileText,
  MessageSquare,
  MapPin,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

const ConnectWithMe = () => {
  // 3D Animation variants - Consistent with MyWorkPage
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
      rotateY: 15,
      rotateX: -5,
      y: -8,
      scale: 1.05,
      z: 30,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12,
      },
    },
    tap: {
      rotateY: 0,
      rotateX: 3,
      scale: 0.95,
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
      scale: 1.2,
      y: -3,
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
      y: 3,
      opacity: 1,
      rotateX: 3,
      transition: {
        type: "spring",
        stiffness: 400,
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

  const simpleButtonVariants = {
    normal: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
    },
  };

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "WhatsApp/Call",
      value: "+27 68 718 0502",
      link: "https://wa.me/27687180502",
      description: "Quick responses for urgent matters",
      color: "var(--color-accent-primary)",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "ntsako.khoza@yahoo.com",
      link: "mailto:ntsako.khoza@yahoo.com",
      description: "Detailed project discussions",
      color: "var(--color-accent-secondary)",
    },
    {
      icon: <Mail size={24} />,
      title: "Alternative Email",
      value: "dev.doc@outlook.com",
      link: "mailto:dev.doc@outlook.com",
      description: "Backup communication channel",
      color: "var(--color-accent-primary)",
    },
    {
      icon: <Calendar size={24} />,
      title: "Schedule a Call",
      value: "Book a meeting",
      link: "#",
      description: "15-30 minute introductory call",
      color: "var(--color-accent-secondary)",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      handle: "Doctor Khoza",
      link: "https://www.linkedin.com/in/doctor-khoza-b00746145/",
      description: "Professional network & career updates",
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      handle: "Your GitHub",
      link: "https://github.com/your-github-profile",
      description: "Code repositories & projects",
    },
    {
      icon: <MessageSquare size={24} />,
      name: "TikTok",
      handle: "@uncle.smol",
      link: "https://www.tiktok.com/@uncle.smol/",
      description: "Tech insights & development journey",
    },
    {
      icon: <MessageCircle size={24} />,
      name: "Other Platforms",
      handle: "Available on request",
      link: "#",
      description: "Additional professional networks",
    },
  ];

  const quickActions = [
    {
      icon: <FileText size={20} />,
      title: "Download Resume",
      action: "Download PDF",
      link: "#",
      variant: "primary",
    },
    {
      icon: <ExternalLink size={20} />,
      title: "View Portfolio",
      action: "See My Work",
      link: "/my-work",
      variant: "secondary",
    },
    {
      icon: <MessageCircle size={20} />,
      title: "Quick Message",
      action: "Send WhatsApp",
      link: "https://wa.me/27687180502?text=Hi%20Ntsako,%20I%20saw%20your%20portfolio...",
      variant: "primary",
    },
  ];

  return (
    <motion.div
      className="ConnectWithMe"
      variants={container3DVariants}
      initial="hidden"
      animate="visible"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="HeroSection"
        variants={sectionContainer3DVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="Container">
          <motion.div
            className="HeroContent"
            variants={container3DVariants}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="HeroText"
              variants={container3DVariants}
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
                  <MessageCircle size={16} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Let's Build Something Amazing Together
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
                Connect With <span className="GradientText">Dev Doc</span>
              </motion.h1>

              <motion.p
                className="HeroDescription"
                variants={item3DVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                I'm always excited to discuss new opportunities, collaborate on
                innovative projects, or just chat about technology and
                development. Whether you're a potential client, fellow
                developer, or someone interested in my journey - let's talk!
              </motion.p>

              <motion.div
                className="LocationInfo"
                variants={item3DVariants}
                whileHover="hover"
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
                  <MapPin size={18} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Based in Witbank, MP • Open to remote work & relocation
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section
        className="ContactMethodsSection"
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
              Direct Contact Channels
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Choose the method that works best for you
            </motion.p>
          </motion.div>

          <motion.div
            className="ContactGrid"
            variants={container3DVariants}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                className="ContactCard"
                variants={item3DVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="ContactIcon"
                  style={{ color: method.color }}
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {method.icon}
                </motion.div>
                <div className="ContactInfo">
                  <motion.h3
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {method.title}
                  </motion.h3>
                  <motion.p
                    className="ContactValue"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {method.value}
                  </motion.p>
                  <motion.p
                    className="ContactDescription"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {method.description}
                  </motion.p>
                </div>
                <motion.div
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <ExternalLink size={18} className="LinkArrow" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        className="QuickActionsSection"
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
              Quick Actions
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Instant access to what you might need
            </motion.p>
          </motion.div>

          <motion.div
            className="ActionsGrid"
            variants={container3DVariants}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
          >
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                className={`ActionCard ${action.variant}`}
                variants={item3DVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="ActionIcon"
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {action.icon}
                </motion.div>
                <div className="ActionInfo">
                  <motion.h3
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {action.title}
                  </motion.h3>
                  <motion.span
                    className="ActionButton"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {action.action}
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.section
        className="SocialSection"
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
              Follow My Journey
            </motion.h2>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Connect with me across different platforms
            </motion.p>
          </motion.div>

          <motion.div
            className="SocialGrid"
            variants={container3DVariants}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="SocialCard"
                variants={item3DVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="SocialIcon"
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {social.icon}
                </motion.div>
                <div className="SocialInfo">
                  <motion.h3
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {social.name}
                  </motion.h3>
                  <motion.p
                    className="SocialHandle"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {social.handle}
                  </motion.p>
                  <motion.p
                    className="SocialDescription"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {social.description}
                  </motion.p>
                </div>
                <motion.div
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <ExternalLink size={18} className="LinkArrow" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="CTASection"
        variants={sectionContainer3DVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="Container">
          <motion.div
            className="CTAContent"
            variants={container3DVariants}
            initial="hidden"
            animate="visible"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="CTAIcon"
              variants={item3DVariants}
              whileHover="hover"
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
                <MessageCircle size={48} />
              </motion.div>
            </motion.div>

            <motion.h2
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Ready to Start a Conversation?
            </motion.h2>

            <motion.p
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              I typically respond within a few hours. Whether you have a project
              in mind, want to discuss collaboration, or just want to connect -
              I'd love to hear from you.
            </motion.p>

            <motion.div
              className="CTAButtons"
              variants={container3DVariants}
              initial="hidden"
              animate="visible"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.a
                href="mailto:ntsako.khoza@yahoo.com"
                className="Button PrimaryButton Large"
                variants={simpleButtonVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
              >
                <Mail size={20} />
                Send me an Email
              </motion.a>

              <motion.a
                href="https://wa.me/27687180502"
                className="Button SecondaryButton Large"
                variants={simpleButtonVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
              >
                <MessageCircle size={20} />
                WhatsApp Message
              </motion.a>
            </motion.div>

            <motion.div
              className="ResponseTime"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="ResponseBadge"
                variants={item3DVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.span
                  variants={icon3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  ⚡
                </motion.span>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Quick Response Guaranteed
                </motion.span>
              </motion.div>
              <motion.p
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Usually reply within 2-4 hours during business days
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ConnectWithMe;
