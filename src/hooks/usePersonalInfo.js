import { useState, useEffect } from "react";
import { personalInfoAPI } from "../services/api/personalInfoAPI";

export const usePersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get all personal info
  const fetchPersonalInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getPersonalInfo();
      setPersonalInfo(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get personal info by ID
  const fetchPersonalInfoById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getPersonalInfoById(id);
      setPersonalInfo(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get specific data sections
  const fetchSocialLinks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getSocialLinks();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getSkills();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchExperience = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getExperience();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchEducation = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getEducation();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchLearningPhilosophy = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getLearningPhilosophy();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentFocus = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getCurrentFocus();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchFutureGoals = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await personalInfoAPI.getFutureGoals();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch main personal info on mount
  useEffect(() => {
    fetchPersonalInfo();
  }, []);

  return {
    // State
    personalInfo,
    loading,
    error,

    // Methods
    fetchPersonalInfo,
    fetchPersonalInfoById,
    fetchSocialLinks,
    fetchSkills,
    fetchExperience,
    fetchEducation,
    fetchLearningPhilosophy,
    fetchCurrentFocus,
    fetchFutureGoals,

    // Convenience properties
    socialLinks: personalInfo?.social_links,
    skills: personalInfo?.skills,
    experience: personalInfo?.experience,
    education: personalInfo?.education,
    learningPhilosophy: personalInfo?.learning_philosophy,
    currentFocus: personalInfo?.current_focus,
    futureGoals: personalInfo?.future_goals,
  };
};

// Custom hook for just social links
export const useSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        setLoading(true);
        const data = await personalInfoAPI.getSocialLinks();
        setSocialLinks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return { socialLinks, loading, error };
};

// Custom hook for just skills
export const useSkills = () => {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        setLoading(true);
        const data = await personalInfoAPI.getSkills();
        setSkills(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, []);

  return { skills, loading, error };
};

// Custom hook for just experience
export const useExperience = () => {
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        setLoading(true);
        const data = await personalInfoAPI.getExperience();
        setExperience(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceData();
  }, []);

  return { experience, loading, error };
};
