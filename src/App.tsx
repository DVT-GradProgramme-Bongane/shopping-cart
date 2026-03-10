import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import PageNotFoundPage from "./pages/PageNotFound";
import HomePage from "./pages/Home";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
