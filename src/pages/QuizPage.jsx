import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuizScore } from "../redux/progressSlice";
import periods from "../data/periods";

function QuizPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  let lesson = null;
  for (const period of periods) {
    const found = period.lessons.find((l) => l.id === parseInt(id));
    if (found) lesson = found;
  }

  if (!lesson) {
    return <p>Quiz introuvable.</p>;
  }

  const quiz = lesson.quiz;
  const currentQuestion = quiz[currentQuestionIndex];

  function handleAnswerClick(option) {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  }

  function handleNextClick() {
    const isLastQuestion = currentQuestionIndex === quiz.length - 1;

    if (isLastQuestion) {
      dispatch(setQuizScore({ lessonId: lesson.id, score, total: quiz.length }));
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  }

  if (showResult) {
    return (
      <div className="quiz-page">
        <h2>Quiz terminé !</h2>
        <p>Tu as obtenu {score} bonnes réponses sur {quiz.length}.</p>
        <Link to={`/lecon/${lesson.id}`}>Retour à la leçon</Link>
        <br />
        <Link to="/">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <p>Question {currentQuestionIndex + 1} / {quiz.length}</p>
      <h2>{currentQuestion.question}</h2>

      <div className="quiz-options">
        {currentQuestion.options.map((option) => {
          let className = "quiz-option-btn";

          if (selectedAnswer) {
            if (option === currentQuestion.correctAnswer) {
              className += " correct";
            } else if (option === selectedAnswer) {
              className += " incorrect";
            }
          }

          return (
            <button
              key={option}
              className={className}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <button onClick={handleNextClick}>
          {currentQuestionIndex === quiz.length - 1 ? "Voir le résultat" : "Question suivante"}
        </button>
      )}
    </div>
  );
}

export default QuizPage;