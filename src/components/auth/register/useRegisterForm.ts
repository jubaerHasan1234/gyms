"use client";

import { useState } from "react";
import { authApi } from "@/lib/authApi";

export function useRegisterForm(onSuccess: (data: { email: string }) => void) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.first_name.trim()) {
      setErrorMessage("Please enter your first name.");
      return;
    }
    if (!formData.last_name.trim()) {
      setErrorMessage("Please enter your last name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (formData.password !== formData.password_confirmation) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (!formData.terms) {
      setErrorMessage("You must accept the terms and conditions to register.");
      return;
    }

    try {
      setLoading(true);
      const res = await authApi.register(formData);

      if (res.status) {
        onSuccess({
          email: formData.email.trim(),
        });
      } else {
        const errorText =
          res.message ||
          (res.errors
            ? Object.values(res.errors).flat().join(". ")
            : "Registration failed. Please check your details and try again.");
        setErrorMessage(errorText);
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    errorMessage,
    handleChange,
    handleSubmit,
  };
}
