import { Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
