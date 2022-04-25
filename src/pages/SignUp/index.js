import React, { useState, useContext } from "react";

import { SignUpForm } from "./SigUpForm";
import { request } from "api/axiosRequest";
import { useNavigate } from "react-router-dom";
import { Context } from "context/Context";

export const SignUpPage = (edit) => {
  const { token, userId, setUserData, setModal } = useContext(Context);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleData = (data) => {
    if (!data) return {};

    delete data.passwordCheck;

    const monthlyRequest = Number(data.monthlyRequest)
      ? Number(data.monthlyRequest)
      : 0;

    const bankInformation = Number(data.bankInformation)
      ? Number(data.bankInformation)
      : 0;

    const newData = {
      ...data,
      monthlyRequest,
      bankInformation,
    };

    return newData;
  };

  const getRequestOptions = (data) => {
    if (token && userId) {
      delete data.password;
      return {
        method: "PUT",
        url: `/users/${userId}`,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return {
      method: "POST",
      data: data,
      url: "/users",
    };
  };

  const onSubmit = async (data) => {
    setError(false);
    const { password, passwordCheck } = data;
    if (password !== passwordCheck) {
      setError("Las contraseñas deben coincidir");
      return;
    }
    const newData = handleData(data);
    const config = getRequestOptions(newData);
    setLoading(true);
    const response = await request(config);
    setLoading(false);
    if (response.error) setError(response.error);
    if (response.data) {
      setUserData(response.data);
      navigate("/", {replace: true});
      setModal(false);
    };
  };

  return (
    <SignUpForm
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      edit={edit}
    />
  );
};
