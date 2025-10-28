import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import QuizzPage from "./pages/quizz";
import AuthLayout from "./components/layouts/authLayout";
import GuestLayout from "./components/layouts/guestLayout";
import LoginPage from "./pages/login";
import HomePage from "./pages";
import ResultPage from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<HomePage />} />
          <Route path="quiz" element={<QuizzPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
