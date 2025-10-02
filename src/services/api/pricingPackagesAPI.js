import { supabase, handleSupabaseError } from "../database/supabase";

export const pricingPackagesAPI = {
  // Get all pricing packages
  getAllPackages: async () => {
    try {
      const { data, error } = await supabase
        .from("pricing_packages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  // Get available pricing packages
  getAvailablePackages: async () => {
    try {
      const { data, error } = await supabase
        .from("pricing_packages")
        .select("*")
        .eq("is_available", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  // Get package by ID
  getPackageById: async (id) => {
    try {
      const { data, error } = await supabase
        .from("pricing_packages")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  // Get packages by currency
  getPackagesByCurrency: async (currency) => {
    try {
      const { data, error } = await supabase
        .from("pricing_packages")
        .select("*")
        .eq("currency", currency)
        .eq("is_available", true)
        .order("price", { ascending: true });

      if (error) throw error;
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },
};
