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
} from "lucide-react";

const ConnectWithMe = () => {
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
      link: "#", // Add your Calendly or meeting link here
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
      handle: "Your GitHub", // Add your GitHub handle
      link: "https://github.com/your-github-profile", // Update with your GitHub
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
      link: "#", // Add your resume PDF link
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
                <MessageCircle size={16} />
                <span>Let's Build Something Amazing Together</span>
              </motion.div>

              <h1 className="HeroTitle">
                Connect With <span className="GradientText">Dev Doc</span>
              </h1>

              <p className="HeroDescription">
                I'm always excited to discuss new opportunities, collaborate on
                innovative projects, or just chat about technology and
                development. Whether you're a potential client, fellow
                developer, or someone interested in my journey - let's talk!
              </p>

              <div className="LocationInfo">
                <MapPin size={18} />
                <span>
                  Based in Witbank, MP • Open to remote work & relocation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="ContactMethodsSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Direct Contact Channels</h2>
            <p>Choose the method that works best for you</p>
          </motion.div>

          <div className="ContactGrid">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                className="ContactCard"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="ContactIcon" style={{ color: method.color }}>
                  {method.icon}
                </div>
                <div className="ContactInfo">
                  <h3>{method.title}</h3>
                  <p className="ContactValue">{method.value}</p>
                  <p className="ContactDescription">{method.description}</p>
                </div>
                <ExternalLink size={18} className="LinkArrow" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="QuickActionsSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Quick Actions</h2>
            <p>Instant access to what you might need</p>
          </motion.div>

          <div className="ActionsGrid">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                className={`ActionCard ${action.variant}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="ActionIcon">{action.icon}</div>
                <div className="ActionInfo">
                  <h3>{action.title}</h3>
                  <span className="ActionButton">{action.action}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="SocialSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Follow My Journey</h2>
            <p>Connect with me across different platforms</p>
          </motion.div>

          <div className="SocialGrid">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="SocialCard"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="SocialIcon">{social.icon}</div>
                <div className="SocialInfo">
                  <h3>{social.name}</h3>
                  <p className="SocialHandle">{social.handle}</p>
                  <p className="SocialDescription">{social.description}</p>
                </div>
                <ExternalLink size={18} className="LinkArrow" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="CTASection">
        <div className="Container">
          <motion.div className="CTAContent" variants={itemVariants}>
            <MessageCircle size={48} className="CTAIcon" />
            <h2>Ready to Start a Conversation?</h2>
            <p>
              I typically respond within a few hours. Whether you have a project
              in mind, want to discuss collaboration, or just want to connect -
              I'd love to hear from you.
            </p>

            <div className="CTAButtons">
              <motion.a
                href="mailto:ntsako.khoza@yahoo.com"
                className="Button PrimaryButton Large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Send me an Email
              </motion.a>

              <motion.a
                href="https://wa.me/27687180502"
                className="Button SecondaryButton Large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
                WhatsApp Message
              </motion.a>
            </div>

            <motion.div className="ResponseTime" variants={itemVariants}>
              <div className="ResponseBadge">
                <span>⚡</span>
                <span>Quick Response Guaranteed</span>
              </div>
              <p>Usually reply within 2-4 hours during business days</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ConnectWithMe;
