import { supabase, handleSupabaseError } from "../database/supabase";

export const projectsAPI = {
  // Get all projects
  getAllProjects: async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  // Get featured projects
  getFeaturedProjects: async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },
};

// Simple test function - FIXED EXPORT NAME
export const testProjectsAPI = async () => {
  try {
    const projects = await projectsAPI.getAllProjects();
    return {
      success: true,
      message: `Connected successfully! Found ${projects.length} projects`,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
