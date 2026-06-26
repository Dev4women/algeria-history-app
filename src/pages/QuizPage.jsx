import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuizScore } from "../redux/progressSlice";
import periods from "../data/periods";
import { PageContainer, Title, Button, OptionButton, BackLink } from "../components/StyledComponents";

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
      <PageContainer>
        <Title>Quiz terminé !</Title>
        <p>Tu as obtenu {score} bonnes réponses sur {quiz.length}.</p>
        <Link to={`/lecon/${lesson.id}`}>Retour à la leçon</Link>
        <br />
        <Link to="/">Retour à l'accueil</Link>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <p>Question {currentQuestionIndex + 1} / {quiz.length}</p>
      <Title as="h2">{currentQuestion.question}</Title>

      <div>
        {currentQuestion.options.map((option) => {
          let status = null;

          if (selectedAnswer) {
            if (option === currentQuestion.correctAnswer) {
              status = "correct";
            } else if (option === selectedAnswer) {
              status = "incorrect";
            }
          }

          return (
            <OptionButton
              key={option}
              status={status}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </OptionButton>
          );
        })}
      </div>

      {selectedAnswer && (
        <Button onClick={handleNextClick}>
          {currentQuestionIndex === quiz.length - 1 ? "Voir le résultat" : "Question suivante"}
        </Button>
      )}
    </PageContainer>
  );
}

export default QuizPage;