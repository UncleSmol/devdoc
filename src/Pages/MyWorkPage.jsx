import React from "react";
import "../Styles/MyWorkPage.css";
import { useProjects } from "../hooks/useProjects";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Star,
  Calendar,
  Tag,
  Code,
  Eye,
  Rocket,
  Target,
  Zap,
  Heart,
  Sparkles,
} from "lucide-react";

const MyWorkPage = () => {
  const { projects, loading, error } = useProjects();

  // Simplified animation variants - no 3D rotations
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

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow:
        "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px var(--color-accent-primary)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotateZ: 5,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  // Development philosophy points
  const devPhilosophy = [
    {
      icon: <Target size={20} />,
      title: "Problem-First Approach",
      description:
        "Every project starts with understanding the real-world problem before writing a single line of code.",
    },
    {
      icon: <Zap size={20} />,
      title: "Performance Focused",
      description:
        "Optimized code, fast loading times, and smooth animations are non-negotiable.",
    },
    {
      icon: <Heart size={20} />,
      title: "User-Centric Design",
      description:
        "Creating interfaces that are not just beautiful, but intuitive and accessible to everyone.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Modern Tech Stack",
      description:
        "Leveraging the latest tools and frameworks to build scalable, maintainable solutions.",
    },
  ];

  if (loading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading projects...</p>
      </div>
    );

  if (error)
    return (
      <div className="error-container">
        <h2>Error Loading Projects</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <motion.div
      className="my-work-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="work-hero">
        <div className="container">
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.div className="hero-badge" whileHover={{ scale: 1.05 }}>
              <Rocket size={16} />
              <span>Portfolio Showcase</span>
            </motion.div>

            <motion.h1
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              Welcome to my digital workshop! Here you'll find a collection of
              projects that showcase my journey from HR professional to
              passionate frontend developer. Each project represents a learning
              milestone and a solution to real-world challenges.
            </motion.p>

            <motion.div className="hero-stats" variants={containerVariants}>
              <motion.div className="stat" whileHover={{ scale: 1.05 }}>
                <span className="stat-number">{projects.length}+</span>
                <span className="stat-label">Projects</span>
              </motion.div>
              <motion.div className="stat" whileHover={{ scale: 1.05 }}>
                <span className="stat-number">
                  {projects.filter((p) => p.is_featured).length}
                </span>
                <span className="stat-label">Featured</span>
              </motion.div>
              <motion.div className="stat" whileHover={{ scale: 1.05 }}>
                <span className="stat-number">
                  {projects.filter((p) => p.is_available).length}
                </span>
                <span className="stat-label">Live Demos</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>My Development Philosophy</h2>
            <p>The principles that guide every line of code I write</p>
          </motion.div>

          <motion.div className="philosophy-grid" variants={containerVariants}>
            {devPhilosophy.map((point, index) => (
              <motion.div
                key={index}
                className="philosophy-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div className="philosophy-icon" whileHover="hover">
                  {point.icon}
                </motion.div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Header */}
      <section className="projects-intro">
        <div className="container">
          <motion.div className="page-header" variants={itemVariants}>
            <motion.h1
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Featured Projects
            </motion.h1>
            <motion.p
              className="project-count"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Showing {projects.length} project
              {projects.length !== 1 ? "s" : ""}
              {projects.some((p) => p.is_featured) && (
                <span className="featured-count">
                  • {projects.filter((p) => p.is_featured).length} featured
                </span>
              )}
            </motion.p>
          </motion.div>

          <motion.p className="projects-description" variants={itemVariants}>
            Each project below represents a unique challenge and learning
            opportunity. From responsive web applications to interactive UI
            experiments, these works demonstrate my growth as a developer and my
            commitment to creating meaningful digital experiences.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${
                  project.is_featured ? "featured" : ""
                }`}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                {/* Featured Badge */}
                {project.is_featured && (
                  <motion.div className="featured-badge" whileHover="hover">
                    <motion.div whileHover="hover">
                      <Star size={16} />
                    </motion.div>
                    <span>Featured</span>
                  </motion.div>
                )}

                {/* Project Image */}
                {project.image_url && (
                  <div className="project-image">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.is_available && (
                      <span className="availability-badge available">
                        Available
                      </span>
                    )}
                  </div>

                  {/* Project Description */}
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}

                  {/* Code Snippet Preview */}
                  {project.code_entppet && (
                    <div className="code-preview">
                      <div className="code-header">
                        <Code size={14} />
                        <span>Code Snippet</span>
                      </div>
                      <pre className="code-snippet">
                        {project.code_entppet.length > 150
                          ? `${project.code_entppet.substring(0, 150)}...`
                          : project.code_entppet}
                      </pre>
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="project-tags">
                      <Tag size={14} />
                      <div className="tags-list">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Metadata */}
                  <div className="project-meta">
                    {project.created_at && (
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>
                          {new Date(project.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    )}

                    {project.updated_at &&
                      project.updated_at !== project.created_at && (
                        <div className="meta-item">
                          <span className="updated">
                            Updated:{" "}
                            {new Date(project.updated_at).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                  </div>

                  {/* Project Links */}
                  <div className="project-actions">
                    {project.project_url && (
                      <motion.a
                        href={project.project_url}
                        className="project-link primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <motion.div whileHover="hover">
                          <ExternalLink size={16} />
                        </motion.div>
                        View Project
                      </motion.a>
                    )}

                    <motion.button
                      className="project-link secondary"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => {
                        console.log("Project details:", project);
                        console.log(
                          "Raw JSON:",
                          JSON.stringify(project, null, 2)
                        );
                      }}
                    >
                      <motion.div whileHover="hover">
                        <Eye size={16} />
                      </motion.div>
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="work-cta">
        <div className="container">
          <motion.div className="cta-content" variants={itemVariants}>
            <motion.div
              className="cta-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Sparkles size={40} />
            </motion.div>
            <h2>Ready to Build Something Amazing?</h2>
            <p>
              Interested in collaborating or have a project in mind? I'm always
              excited to take on new challenges and create digital solutions
              that make a difference.
            </p>
            <motion.a
              href="/connect-with-me"
              className="cta-button"
              whileHover="hover"
              whileTap="tap"
            >
              <span>Let's Work Together</span>
              <Rocket size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Empty State */}
      {projects.length === 0 && (
        <motion.div className="empty-state" variants={itemVariants}>
          <h3>No Projects Found</h3>
          <p>There are no projects in the database yet.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MyWorkPage;
