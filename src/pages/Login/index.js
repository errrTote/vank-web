import React, { useState, useEffect, useContext } from "react";

import { LoginForm } from "./LoginForm";
import { request } from "api/axiosRequest";
import { Context } from "context/Context";
export const LoginPage = () => {
  const { activateAuth, removeAuth } = useContext(Context);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hook: maneja el timer de la alerta de error.
  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error]);

  useEffect(() => {
    removeAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {
    setError(false);
    setLoading(true);
    const response = await request({
      method: "POST",
      data,
      url: "/auth/login",
    });
    setLoading(false);
    if (response.error) setError(response.error);
    if (response.data) activateAuth(response.data);
  };

  return <LoginForm onSubmit={onSubmit} error={error} loading={loading} />;
};
