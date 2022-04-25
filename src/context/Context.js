import React, { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState(() => {
    return window.sessionStorage.getItem("userId");
  });

  const [token, setToken] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const [businessName, setBusinessName] = useState(() => {
    return window.sessionStorage.getItem("businessName");
  });
  const [email, setEmail] = useState(() => {
    return window.sessionStorage.getItem("email");
  });

  const [currency, setCurrency] = useState(() => {
    return window.sessionStorage.getItem("currency");
  });

  const [monthlyRequest, setMonthlyRequest] = useState(() => {
    return window.sessionStorage.getItem("monthlyRequest");
  });

  const [taxIdentificationNumber, setTaxIdentificationNumber] = useState(() => {
    return window.sessionStorage.getItem("taxIdentificationNumber");
  });

  const [bankInformation, setBankInformation] = useState(() => {
    return window.sessionStorage.getItem("bankInformation");
  });

  const value = {
    userId,
    token,
    businessName,
    email,
    currency,
    monthlyRequest,
    taxIdentificationNumber,
    bankInformation,
    modal,
    setModal,

    setUserData: (data) => {
      const {
        businessName,
        currency,
        monthlyRequest,
        taxIdentificationNumber,
        bankInformation,
      } = data;

      window.sessionStorage.setItem("businessName", businessName);
      window.sessionStorage.setItem("currency", currency);
      window.sessionStorage.setItem("monthlyRequest", monthlyRequest);
      window.sessionStorage.setItem(
        "taxIdentificationNumber",
        taxIdentificationNumber
      );
      window.sessionStorage.setItem("bankInformation", bankInformation);

      setBusinessName(businessName);
      setCurrency(currency);
      setMonthlyRequest(monthlyRequest);
      setTaxIdentificationNumber(taxIdentificationNumber);
      setBankInformation(bankInformation);
    },

    activateAuth: (data) => {
      const { access_token } = data;
      const {
        id,
        email,
        businessName,
        currency,
        monthlyRequest,
        taxIdentificationNumber,
        bankInformation,
      } = data?.user;

      window.sessionStorage.setItem("token", access_token);
      window.sessionStorage.setItem("userId", id);
      window.sessionStorage.setItem("email", email);
      window.sessionStorage.setItem("businessName", businessName);
      window.sessionStorage.setItem("currency", currency);
      window.sessionStorage.setItem("monthlyRequest", monthlyRequest);
      window.sessionStorage.setItem(
        "taxIdentificationNumber",
        taxIdentificationNumber
      );
      window.sessionStorage.setItem("bankInformation", bankInformation);

      setToken(access_token);
      setUserId(id);
      setBusinessName(businessName);
      setEmail(email);
      setCurrency(currency);
      setMonthlyRequest(monthlyRequest);
      setTaxIdentificationNumber(taxIdentificationNumber);
      setBankInformation(bankInformation);
    },
    
    // Function: limpia todas variables, localStorage y sessionStorage
    removeAuth: () => {
      window.localStorage.clear();
      window.sessionStorage.clear();
      setToken(undefined);
      setBusinessName(undefined);
      setEmail(undefined);
      setCurrency(undefined);
      setMonthlyRequest(undefined);
      setTaxIdentificationNumber(undefined);
      setBankInformation(undefined);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const context = {
  Provider,
  Consumer: Context.Consumer,
};

export default context;
