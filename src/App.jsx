import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// ❌ BrowserRouter import नको
import CitizenNavbar  from "./components/common/CitizenNavbar";
import Home           from "./pages/Home";
import Login          from "./pages/Login";
import Registration   from "./pages/Registration";
import BookAppointment from "./pages/BookAppointment";
import Myappointments from "./pages/Myappointments";
import Footer from "./components/common/Footer";

function ProtectedRoute({ children }) {
  const citizen = localStorage.getItem("citizenUser");
  return citizen ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    // ❌ <BrowserRouter> नको — आधीच main.jsx मध्ये आहे
    <>
      <CitizenNavbar />
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/login"            element={<Login />} />
        <Route path="/register"         element={<Registration />} />
        <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
        <Route path="/my-appointments"  element={<ProtectedRoute><Myappointments /></ProtectedRoute>} />
        <Route path="*"                 element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  );
}