import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import QuizzPage from "./pages/quizz";
import AuthLayout from "./components/layouts/authLayout";
import GuestLayout from "./components/layouts/guestLayout";
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<QuizzPage />} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
