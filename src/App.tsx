import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import { Edit } from "./components/Edit";
import { LoginProvider } from "./context/LoginCtx";
import ReqLogin from "./ReqLogin";
import { Login } from "./components/Login";
import { Orders } from "./components/Orders";

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ReqLogin />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </div>
    </LoginProvider>
  );
}

export default App;
