import { useState, useEffect } from "react";
import { pricingPackagesAPI } from "../services/api/pricingPackagesAPI";

export const usePricingPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await pricingPackagesAPI.getAllPackages();
      setPackages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailablePackages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await pricingPackagesAPI.getAvailablePackages();
      setPackages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPackagesByCurrency = async (currency) => {
    try {
      setLoading(true);
      setError(null);
      const data = await pricingPackagesAPI.getPackagesByCurrency(currency);
      setPackages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return {
    packages,
    loading,
    error,
    refetch: fetchPackages,
    fetchAvailablePackages,
    fetchPackagesByCurrency,
  };
};
