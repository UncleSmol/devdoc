import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { useProjects } from "../../hooks/useProjects";
import "../../Styles/FeaturedProjects.css";

const FeaturedProjects = () => {
  const { projects, loading, error } = useProjects();

  // Filter only featured projects
  const featuredProjects = projects.filter((project) => project.is_featured);

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

  if (loading) {
    return (
      <div className="featured-projects-loading">
        <div className="loading-spinner"></div>
        <p>Loading featured projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="featured-projects-error">
        <p>Error loading featured projects: {error}</p>
      </div>
    );
  }

  if (featuredProjects.length === 0) {
    return (
      <div className="featured-projects-empty">
        <p>No featured projects available at the moment.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="featured-projects-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {featuredProjects.map((project) => (
        <motion.div
          key={project.id}
          className="featured-project-card"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Featured Badge */}
          {project.is_featured && (
            <div className="featured-badge">
              <Star size={14} />
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
                <span className="availability-badge available">Available</span>
              )}
            </div>

            {/* Project Description */}
            {project.description && (
              <p className="project-description">
                {project.description.length > 120
                  ? `${project.description.substring(0, 120)}...`
                  : project.description}
              </p>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="tag-more">+{project.tags.length - 3}</span>
                )}
              </div>
            )}

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
                  Live Demo
                </motion.a>
              )}

              {project.github_url && (
                <motion.a
                  href={project.github_url}
                  className="project-link secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedProjects;
