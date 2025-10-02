import { supabase, handleSupabaseError } from "../database/supabase.js";

export const personalInfoAPI = {
  // Get all personal info (usually just one record)
  getPersonalInfo: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) throw error;
      return data[0] || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  // Get personal info by ID
  getPersonalInfoById: async (id) => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  // Get specific parts of personal info
  getSocialLinks: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("social_links")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data?.social_links || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  getSkills: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("skills")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data?.skills || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  getExperience: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("experience")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data?.experience || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  getEducation: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("education")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data?.education || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  getLearningPhilosophy: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("learning_philosophy")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data?.learning_philosophy || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  getCurrentFocus: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("current_focus")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data?.current_focus || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  getFutureGoals: async () => {
    try {
      const { data, error } = await supabase
        .from("personal_info")
        .select("future_goals")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data?.future_goals || null;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },
};
