import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import PageNotFoundPage from "./pages/PageNotFound";
import HomePage from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
