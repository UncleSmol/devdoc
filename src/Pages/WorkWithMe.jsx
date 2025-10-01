import React from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Zap, ArrowRight, CheckCircle } from "lucide-react";

// These will be imported from your external components
const PricingPackages = () => (
  <div className="ComponentPlaceholder">
    <div className="PlaceholderIcon">
      <Star size={32} />
    </div>
    <h3>Pricing Packages</h3>
    <p>Component loading from ../components/common/PricingPackages</p>
  </div>
);

const BookingForm = () => (
  <div className="ComponentPlaceholder">
    <div className="PlaceholderIcon">
      <Calendar size={32} />
    </div>
    <h3>Booking Form</h3>
    <p>Component loading from ../components/common/BookingForm</p>
  </div>
);

const FeaturedProjectsShowcase = () => (
  <div className="ComponentPlaceholder">
    <div className="PlaceholderIcon">
      <Zap size={32} />
    </div>
    <h3>Featured Projects</h3>
    <p>Component loading from ../components/common/FeaturedProjectsShowcase</p>
  </div>
);

const WorkWithMe = () => {
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

  const benefits = [
    "Fast turnaround times",
    "Modern tech stack (React, Framer Motion, GSAP)",
    "SEO-optimized solutions",
    "Mobile-first responsive design",
    "Ongoing support & maintenance",
    "Transparent communication",
  ];

  return (
    <motion.div
      className="WorkWithMe"
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
                <Zap size={16} />
                <span>Let's Build Your Digital Solution</span>
              </motion.div>

              <h1 className="HeroTitle">
                Work With <span className="GradientText">Dev Doc</span>
              </h1>

              <p className="HeroDescription">
                I specialize in creating fast, modern, and conversion-focused
                frontend solutions. Whether you need a complete website, a web
                application, or improvements to your existing digital presence -
                I've got you covered.
              </p>

              <div className="BenefitsList">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="BenefitItem"
                    variants={itemVariants}
                  >
                    <CheckCircle size={18} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="ShowcaseSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Why Work With Me?</h2>
            <p>See examples of what we can build together</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeaturedProjectsShowcase />
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="PricingSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Transparent Pricing</h2>
            <p>Choose the package that fits your needs and budget</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <PricingPackages />
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="BookingSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Start Your Project</h2>
            <p>Let's discuss your ideas and requirements</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ProcessSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>My Development Process</h2>
            <p>Clear, structured, and collaborative workflow</p>
          </motion.div>

          <div className="ProcessSteps">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "Understand your needs and goals",
              },
              {
                step: "02",
                title: "Proposal & Planning",
                desc: "Detailed project scope and timeline",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your solution with modern tech",
              },
              {
                step: "04",
                title: "Review & Refine",
                desc: "Your feedback incorporated",
              },
              {
                step: "05",
                title: "Launch & Support",
                desc: "Deployment and ongoing maintenance",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="ProcessStep"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="StepNumber">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {index < 4 && <div className="StepConnector"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="CTASection">
        <div className="Container">
          <motion.div className="CTAContent" variants={itemVariants}>
            <Zap size={48} className="CTAIcon" />
            <h2>Ready to Bring Your Idea to Life?</h2>
            <p>
              Let's create something amazing together. I'm ready to help you
              build a digital solution that drives results and exceeds
              expectations.
            </p>
            <motion.a
              href="#booking"
              className="Button PrimaryButton Large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default WorkWithMe;
