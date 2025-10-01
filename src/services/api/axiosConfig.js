import axios from "axios";

// Get base URL from environment variables
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

// Create axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - runs before every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth tokens if needed
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (import.meta.env.VITE_NODE_ENV === "development") {
      console.log(
        `🔄 API Request: ${config.method?.toUpperCase()} ${config.url}`,
        config.params || ""
      );
    }

    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor - runs after every response
axiosInstance.interceptors.response.use(
  (response) => {
    // Log successful response in development
    if (import.meta.env.VITE_NODE_ENV === "development") {
      console.log(
        `✅ API Response: ${response.status} ${response.config.url}`,
        response.data
      );
    }
    return response;
  },
  (error) => {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      console.error("❌ API Error Response:", {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
      });

      // Handle specific status codes
      switch (error.response.status) {
        case 401:
          console.error("Unauthorized - Redirect to login");
          // You can redirect to login page here
          break;
        case 403:
          console.error("Forbidden - Insufficient permissions");
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("Unknown server error");
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("❌ Network Error:", {
        message: error.message,
        url: error.config?.url,
      });
    } else {
      // Something else happened
      console.error("❌ Unexpected Error:", error.message);
    }

    return Promise.reject(error);
  }
);

// Helper functions for common API operations
export const apiHelpers = {
  // Handle API errors with user-friendly messages
  handleApiError: (error) => {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    if (error.message) {
      return error.message;
    }
    return "An unexpected error occurred";
  },

  // Generic GET request
  get: (url, config = {}) => {
    return axiosInstance.get(url, config);
  },

  // Generic POST request
  post: (url, data = {}, config = {}) => {
    return axiosInstance.post(url, data, config);
  },

  // Generic PUT request
  put: (url, data = {}, config = {}) => {
    return axiosInstance.put(url, data, config);
  },

  // Generic PATCH request
  patch: (url, data = {}, config = {}) => {
    return axiosInstance.patch(url, data, config);
  },

  // Generic DELETE request
  delete: (url, config = {}) => {
    return axiosInstance.delete(url, config);
  },

  // Upload file with progress
  upload: (url, file, onProgress = null) => {
    const formData = new FormData();
    formData.append("file", file);

    return axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentCompleted);
        }
      },
    });
  },
};

// Test function to verify axios configuration
export const testAxiosConfig = async () => {
  try {
    console.log("🧪 Testing Axios configuration...");

    // Test with a simple public API
    const response = await axiosInstance.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log("✅ Axios configuration test passed");
    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("❌ Axios configuration test failed:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export default axiosInstance;
