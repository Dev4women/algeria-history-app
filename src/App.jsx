import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeriodPage from "./pages/PeriodPage";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <BrowserRouter basename="/algeria-history-app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/periode/:id" element={<PeriodPage />} />
        <Route path="/lecon/:id" element={<LessonPage />} />
        <Route path="/lecon/:id/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;