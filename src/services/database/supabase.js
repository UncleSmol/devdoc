import { createClient } from "@supabase/supabase-js";

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl) {
  throw new Error("Missing VITE_SUPABASE_URL environment variable");
}

if (!supabaseAnonKey) {
  throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable");
}

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  // Additional options for better performance
  global: {
    headers: {
      "X-Client-Info": "dev-doc-portfolio",
    },
  },
  // Real-time subscriptions configuration
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Optional: Test connection function
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Supabase connection test failed:", error);
      return false;
    }

    console.log("Supabase connection successful");
    return true;
  } catch (error) {
    console.error("Supabase connection test error:", error);
    return false;
  }
};

// Helper function to handle Supabase errors
export const handleSupabaseError = (error) => {
  console.error("Supabase Error:", error);

  // You can customize error messages based on error codes
  if (error.code === "PGRST301") {
    return "Resource not found";
  } else if (error.code === "42501") {
    return "Access denied - check RLS policies";
  } else if (error.code === "42P01") {
    return "Table does not exist";
  } else {
    return error.message || "An unexpected error occurred";
  }
};
