import React, { useState } from "react";
import "../Styles/MyWorkPage.css";
import { useProjects } from "../hooks/useProjects";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Github,
  Link,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const MyWorkPage = () => {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Toggle description expansion
  const toggleDescription = (projectId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  // Check if description should be truncated (more than 150 chars)
  const shouldTruncate = (description) => {
    return description && description.length > 150;
  };

  // Get truncated text
  const getTruncatedText = (text) => {
    if (!text) return "";
    return text.length > 150 ? `${text.substring(0, 150)}...` : text;
  };

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

  // Simplified button variants for better clickability
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
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

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
    document.body.style.overflow = "unset";
  };

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
    <>
      <motion.div
        className="my-work-page"
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
          className="work-hero"
          variants={sectionContainer3DVariants}
          initial="hidden"
          animate="visible"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="container">
            <motion.div
              className="hero-content"
              variants={container3DVariants}
              initial="hidden"
              animate="visible"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="hero-badge"
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
                  <Rocket size={16} />
                </motion.div>
                <motion.span
                  variants={text3DVariants}
                  initial="normal"
                  whileHover="hover"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  Portfolio Showcase
                </motion.span>
              </motion.div>

              <motion.h1
                variants={item3DVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Crafting Digital{" "}
                <span className="gradient-text">Experiences</span>
              </motion.h1>

              <motion.p
                className="hero-description"
                variants={item3DVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Welcome to my digital workshop! Here you'll find a collection of
                projects that showcase my journey from HR professional to
                passionate frontend developer. Each project represents a
                learning milestone and a solution to real-world challenges.
              </motion.p>

              <motion.div
                className="hero-stats"
                variants={container3DVariants}
                initial="hidden"
                animate="visible"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="stat"
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.span
                    className="stat-number"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {projects.length}+
                  </motion.span>
                  <motion.span
                    className="stat-label"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    Projects
                  </motion.span>
                </motion.div>
                <motion.div
                  className="stat"
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.span
                    className="stat-number"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {projects.filter((p) => p.is_featured).length}
                  </motion.span>
                  <motion.span
                    className="stat-label"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    Featured
                  </motion.span>
                </motion.div>
                <motion.div
                  className="stat"
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.span
                    className="stat-number"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {projects.filter((p) => p.is_available).length}
                  </motion.span>
                  <motion.span
                    className="stat-label"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    Live Demos
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Development Philosophy */}
        <motion.section
          className="philosophy-section"
          variants={sectionContainer3DVariants}
          initial="hidden"
          animate="visible"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="container">
            <motion.div
              className="section-header"
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
                My Development Philosophy
              </motion.h2>
              <motion.p
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                The principles that guide every line of code I write
              </motion.p>
            </motion.div>

            <motion.div
              className="philosophy-grid"
              variants={container3DVariants}
              initial="hidden"
              animate="visible"
              style={{
                transformStyle: "preserve-3d",
                perspective: "800px",
              }}
            >
              {devPhilosophy.map((point, index) => (
                <motion.div
                  key={index}
                  className="philosophy-card"
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="philosophy-icon"
                    variants={icon3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {point.icon}
                  </motion.div>
                  <motion.h3
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {point.title}
                  </motion.h3>
                  <motion.p
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {point.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Header */}
        <motion.section
          className="projects-intro"
          variants={sectionContainer3DVariants}
          initial="hidden"
          animate="visible"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="container">
            <motion.div
              className="page-header"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.h1
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Featured Projects
              </motion.h1>
              <motion.p
                className="project-count"
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Showing {projects.length} project
                {projects.length !== 1 ? "s" : ""}
                {projects.some((p) => p.is_featured) && (
                  <motion.span
                    className="featured-count"
                    variants={text3DVariants}
                    initial="normal"
                    whileHover="hover"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    • {projects.filter((p) => p.is_featured).length} featured
                  </motion.span>
                )}
              </motion.p>
            </motion.div>

            <motion.p
              className="projects-description"
              variants={item3DVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Each project below represents a unique challenge and learning
              opportunity. From responsive web applications to interactive UI
              experiments, these works demonstrate my growth as a developer and
              my commitment to creating meaningful digital experiences.
            </motion.p>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="container">
            <motion.div
              className="projects-grid"
              variants={container3DVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className={`project-card ${
                    project.is_featured ? "featured" : ""
                  } ${expandedDescriptions[project.id] ? "expanded" : ""}`}
                  variants={item3DVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Featured Badge */}
                  {project.is_featured && (
                    <div className="featured-badge">
                      <Star size={16} />
                      <span>Featured</span>
                    </div>
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

                    {/* Project Description with Expand/Collapse */}
                    {project.description && (
                      <div className="description-container">
                        <p className="project-description">
                          {expandedDescriptions[project.id]
                            ? project.description
                            : getTruncatedText(project.description)}
                        </p>
                        {shouldTruncate(project.description) && (
                          <motion.button
                            className="expand-button"
                            onClick={() => toggleDescription(project.id)}
                            variants={simpleButtonVariants}
                            initial="normal"
                            whileHover="hover"
                            whileTap="tap"
                          >
                            {expandedDescriptions[project.id] ? (
                              <>
                                <ChevronUp size={14} />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronDown size={14} />
                                Read More
                              </>
                            )}
                          </motion.button>
                        )}
                      </div>
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
                              {new Date(
                                project.updated_at
                              ).toLocaleDateString()}
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
                          variants={simpleButtonVariants}
                          initial="normal"
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <ExternalLink size={16} />
                          View Project
                        </motion.a>
                      )}

                      <motion.button
                        className="project-link secondary"
                        variants={simpleButtonVariants}
                        initial="normal"
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => openProjectDetails(project)}
                      >
                        <Eye size={16} />
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
        <motion.section
          className="work-cta"
          variants={sectionContainer3DVariants}
          initial="hidden"
          animate="visible"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="container">
            <motion.div
              className="cta-content"
              variants={container3DVariants}
              initial="hidden"
              animate="visible"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="cta-icon"
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
                  <Sparkles size={40} />
                </motion.div>
              </motion.div>
              <motion.h2
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Ready to Build Something Amazing?
              </motion.h2>
              <motion.p
                variants={text3DVariants}
                initial="normal"
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                Interested in collaborating or have a project in mind? I'm
                always excited to take on new challenges and create digital
                solutions that make a difference.
              </motion.p>
              <motion.a
                href="/connect-with-me"
                className="cta-button"
                variants={simpleButtonVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
              >
                Let's Work Together
                <Rocket size={16} />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            className="empty-state"
            variants={sectionContainer3DVariants}
            initial="hidden"
            animate="visible"
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
              No Projects Found
            </motion.h3>
            <motion.p
              variants={text3DVariants}
              initial="normal"
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              There are no projects in the database yet.
            </motion.p>
          </motion.div>
        )}
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            <motion.div
              className="modal-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeProjectDetails}
            />
            <motion.div
              className="project-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                className="modal-close"
                onClick={closeProjectDetails}
                variants={simpleButtonVariants}
                initial="normal"
                whileHover="hover"
                whileTap="tap"
              >
                <X size={20} />
              </motion.button>

              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <div className="modal-header-top">
                    {selectedProject.is_featured && (
                      <div className="featured-badge">
                        <Star size={16} />
                        <span>Featured Project</span>
                      </div>
                    )}
                    <h2>{selectedProject.title}</h2>
                    {selectedProject.is_available && (
                      <span className="availability-badge available large">
                        Live Demo Available
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                {selectedProject.image_url && (
                  <div className="modal-image">
                    <img
                      src={selectedProject.image_url}
                      alt={selectedProject.title}
                    />
                  </div>
                )}

                {/* Project Details */}
                <div className="modal-details">
                  {/* Description */}
                  {selectedProject.description && (
                    <div className="detail-section">
                      <h3>Project Overview</h3>
                      <p>{selectedProject.description}</p>
                    </div>
                  )}

                  {/* Full Code Snippet */}
                  {selectedProject.code_entppet && (
                    <div className="detail-section">
                      <h3>
                        <Code size={18} />
                        Code Implementation
                      </h3>
                      <pre className="full-code-snippet">
                        {selectedProject.code_entppet}
                      </pre>
                    </div>
                  )}

                  {/* Tags */}
                  {selectedProject.tags && selectedProject.tags.length > 0 && (
                    <div className="detail-section">
                      <h3>
                        <Tag size={18} />
                        Technologies Used
                      </h3>
                      <div className="tags-list modal-tags">
                        {selectedProject.tags.map((tag, index) => (
                          <span key={index} className="tag large">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Metadata */}
                  <div className="detail-section">
                    <h3>
                      <Clock size={18} />
                      Project Timeline
                    </h3>
                    <div className="metadata-grid">
                      {selectedProject.created_at && (
                        <div className="metadata-item">
                          <span>
                            Created:{" "}
                            {new Date(
                              selectedProject.created_at
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                      {selectedProject.updated_at &&
                        selectedProject.updated_at !==
                          selectedProject.created_at && (
                          <div className="metadata-item">
                            <span>
                              Updated:{" "}
                              {new Date(
                                selectedProject.updated_at
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="modal-actions">
                  {selectedProject.project_url && (
                    <motion.a
                      href={selectedProject.project_url}
                      className="modal-button primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={simpleButtonVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <ExternalLink size={18} />
                      View Live Project
                    </motion.a>
                  )}

                  <motion.button
                    className="modal-button secondary"
                    onClick={closeProjectDetails}
                    variants={simpleButtonVariants}
                    initial="normal"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <X size={18} />
                    Close Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MyWorkPage;
