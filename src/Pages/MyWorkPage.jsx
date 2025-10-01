import React from "react";
import "../Styles/MyWorkPage.css";
import { useProjects } from "../hooks/useProjects";
import { motion } from "framer-motion";
import { ExternalLink, Star, Calendar, Tag, Code, Eye } from "lucide-react";

const MyWorkPage = () => {
  const { projects, loading, error } = useProjects();

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
      {/* Header Section */}
      <div className="page-header">
        <h1>My Projects</h1>
        <p className="project-count">
          Showing {projects.length} project{projects.length !== 1 ? "s" : ""}
          {projects.some((p) => p.is_featured) && (
            <span className="featured-count">
              • {projects.filter((p) => p.is_featured).length} featured
            </span>
          )}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-card ${project.is_featured ? "featured" : ""}`}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </motion.a>
                )}

                <motion.button
                  className="project-link secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    console.log("Project details:", project);
                    console.log("Raw JSON:", JSON.stringify(project, null, 2));
                  }}
                >
                  <Eye size={16} />
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="empty-state">
          <h3>No Projects Found</h3>
          <p>There are no projects in the database yet.</p>
        </div>
      )}
    </motion.div>
  );
};

export default MyWorkPage;
