import "../Styles/Homepage.css";
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Star,
  Users,
  Award,
  Calendar,
  Mail,
  Download,
  ChevronRight,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const Homepage = () => {
  // Animation variants
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

  // ------------------------------------------
  // TWEAKED CONTENT START
  // ------------------------------------------

  // Stats data
  const stats = [
    { icon: <Code2 size={24} />, number: "58+", label: "GitHub Repositories" },
    { icon: <Users size={24} />, number: "4", label: "Client Projects" },
    { icon: <Calendar size={24} />, number: "Self", label: "Taught Developer" },
    { icon: <Award size={24} />, number: "10+", label: "Technologies Used" },
  ];

  // Featured skills (Removed level/percentage functionality as requested)
  const skills = [
    "React/JavaScript",
    "Framer Motion & GSAP",
    "Tailwind CSS & Bootstrap",
    "Ant Design & Material UI",
    "Effective AI Prompting",
    "WordPress, Wix, Elementor (CMS)",
  ];

  // Projects (Using a placeholder array as requested)
  // NOTE: The rendering logic for this section has been changed to show a placeholder message.
  const projects = [
    {
      title: "Placeholder Project 1",
      description: "Data will be loaded from the database here.",
      tech: ["React", "DB", "Link"],
      link: "#",
    },
  ];

  // Testimonials (Updated with mock content since none were provided)
  const testimonials = [
    {
      quote:
        "Ntsako's commitment to self-improvement and speed is unmatched. 'Dev Doc' delivers clean, modern frontend solutions.",
      author: "Future Mentor",
      role: "Lead Developer",
    },
    {
      quote:
        "A highly passionate developer who quickly understands requirements and leverages modern tools like Framer Motion to create engaging UI.",
      author: "Early Adopter Client",
      role: "Small Business Owner",
    },
  ];

  // ------------------------------------------
  // TWEAKED CONTENT END
  // ------------------------------------------

  return (
    <motion.div
      className="Homepage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="HeroSection">
        <div className="HeroContent">
          <motion.div className="HeroText" variants={itemVariants}>
            <motion.div className="Badge" whileHover={{ scale: 1.05 }}>
              <Star size={16} />
              <span>Self-Taught & Available for Opportunities</span>
            </motion.div>

            <h1 className="HeroTitle">
              <span className="GradientText">Ntsako "Dev Doc" Khoza</span>
              <br />
              Frontend Digital Craftsman
            </h1>

            <p className="HeroDescription">
              I am a passionate, self-taught **Frontend Developer** focused on
              building impactful digital solutions. I specialize in captivating
              user interfaces using **React, Framer Motion, and GSAP**,
              committed to pixel-perfect execution.
            </p>

            <div className="HeroActions">
              <motion.button
                className="Button PrimaryButton"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // NOTE: Add your contact link here
              >
                <Mail size={18} />
                Get In Touch
              </motion.button>

              <motion.button
                className="Button SecondaryButton"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // NOTE: Add your resume download link here
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </div>

            <div className="SocialProof">
              <div className="SocialLinks">
                <motion.a
                  href="https://github.com/your-github-profile" // NOTE: Update this link
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/your-linkedin-profile" // NOTE: Update this link
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div className="HeroVisual" variants={itemVariants}>
            <div className="CodeWindow">
              <div className="WindowHeader">
                <div className="WindowControls">
                  <div className="Control red"></div>
                  <div className="Control yellow"></div>
                  <div className="Control green"></div>
                </div>
              </div>
              <div className="CodeContent">
                <pre>{`const developer = {
  name: "Ntsako Doctor Khoza",
  alias: "Dev Doc",
  role: "Frontend Developer",
  skills: ["React", "Framer Motion", "GSAP"],
  learningPath: "Self-Taught",
  focus: "Impactful Digital Solutions",
  available: true
};`}</pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="StatsSection">
        <div className="Container">
          <div className="StatsGrid">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="StatCard"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="StatIcon">{stat.icon}</div>
                <h3 className="StatNumber">{stat.number}</h3>
                <p className="StatLabel">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section (Updated to remove progress bars) */}
      <section className="SkillsSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Technical Expertise & Toolkit</h2>
            <p>
              My stack is built around modern frontend technologies and effective
              development practices.
            </p>
          </motion.div>

          <div className="SkillsList">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="SkillTagItem"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <ChevronRight size={16} />
                <span className="SkillName">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (Modified to show placeholder) */}
      <section className="ProjectsSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>Featured Projects</h2>
            <p>
              A selection of my best work, currently being loaded from a
              dedicated database component.
            </p>
          </motion.div>

          {/* Project Placeholder Component Area */}
          <motion.div
            className="ProjectPlaceholder"
            variants={itemVariants}
            style={{
              minHeight: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed var(--color-primary)",
              borderRadius: "8px",
              marginTop: "40px",
              textAlign: "center",
              padding: "20px",
              backgroundColor: "var(--color-bg-secondary)",
            }}
          >
            <p style={{ color: "var(--color-text-secondary)" }}>
              **Project Component Coming Soon:** This section is ready to render
              your detailed `FeaturedProjects` component from your database source
              when integrated.
            </p>
          </motion.div>

          <motion.div className="SectionFooter" variants={itemVariants}>
            <motion.a
              href="/my-work"
              className="ViewAllButton"
              whileHover={{ x: 5 }}
            >
              View All Repositories
              <ChevronRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="TestimonialsSection">
        <div className="Container">
          <motion.div className="SectionHeader" variants={itemVariants}>
            <h2>What Clients & Peers Say</h2>
            <p>Feedback from people who appreciate speed and quality.</p>
          </motion.div>

          <div className="TestimonialsGrid">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                className="TestimonialCard"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="QuoteIcon">"</div>
                <p className="TestimonialQuote">{testimonial.quote}</p>
                <div className="TestimonialAuthor">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="CTASection">
        <div className="Container">
          <motion.div className="CTAContent" variants={itemVariants}>
            <Rocket size={48} className="CTAIcon" />
            <h2>Ready to Launch Your Next Project?</h2>
            <p>
              Let's leverage modern frontend tools and effective AI prompting to
              bring your vision to life, fast and polished.
            </p>
            <motion.button
              className="Button PrimaryButton Large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // NOTE: Add your contact link here
            >
              <Mail size={20} />
              Let's Talk
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;