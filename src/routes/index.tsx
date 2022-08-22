import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicTabs from "../components/Tabs";

import Signup from "../screens/Signup";
import Users from "../screens/Users";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <BasicTabs />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
