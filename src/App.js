import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Context } from "context/Context";

import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { InvoicesPage } from "./pages/Invoices";
import { NavbarComponent } from "layout/Navbar";
export const App = () => {
  const { token } = useContext(Context);
  return (
    <>
      <GlobalStyles />
      {!token && (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Router>
      )}
      {token && (
        <Router>
          <NavbarComponent />
          <Routes>
            <Route element={<InvoicesPage />} path="/" />
            <Route path="/logout" element={<LoginPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Router>
      )}
    </>
  );
};
