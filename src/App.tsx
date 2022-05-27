import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import { Edit } from "./components/Edit";
import { LoginProvider } from "./context/LoginCtx";
import ReqLogin from "./ReqLogin";
import { Login } from "./components/Login";
import { Orders } from "./components/Orders";
import { Error } from "./components/Error";
import { Landing } from "./components/Landing";
import { Header } from "./components/Header";
import { Logout } from "./components/Logout";

function App() {
  return (
    <LoginProvider>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ReqLogin />}>
              <Route path="/orders" element={<Orders />} />
              <Route path="/add" element={<Add />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LoginProvider>
  );
}

export default App;
