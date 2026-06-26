import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import confetti from "canvas-confetti";
import { setQuizScore } from "../redux/progressSlice";
import periods from "../data/periods";
import { PageContainer, Title, Button, OptionButton } from "../components/StyledComponents";

function QuizPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const audioRef = useRef(null);

  let lesson = null;
  for (const period of periods) {
    const found = period.lessons.find((l) => l.id === parseInt(id));
    if (found) lesson = found;
  }

  useEffect(() => {
    if (showResult) {
      const audio = new Audio(`${import.meta.env.BASE_URL}kassaman.mp3`);
      audioRef.current = audio;
      audio.play().catch((error) => {
        console.error("Erreur de lecture audio :", error);
      });

      const flagShape = confetti.shapeFromText({ text: "🇩🇿", scalar: 4 });

      const interval = setInterval(() => {
        confetti({
          particleCount: 10,
          startVelocity: 15,
          gravity: 0.3,
          spread: 100,
          ticks: 700,
          origin: { x: Math.random(), y: 0 },
          shapes: [flagShape],
          scalar: 6,
        });
      }, 250);

      return () => {
        clearInterval(interval);
        audio.pause();
      };
    }
  }, [showResult]);

  function handleStopAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
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
    const updatedAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.correctAnswer,
      },
    ];
    setAnswers(updatedAnswers);

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
        <Button onClick={handleStopAudio}>Arrêter la musique</Button>

        <div className="quiz-recap">
          {answers.map((item, index) => (
            <div key={index} className="recap-item">
              <p><strong>{index + 1}. {item.question}</strong></p>
              <p>Ta réponse : {item.userAnswer}</p>
              <p>Bonne réponse : {item.correctAnswer}</p>
            </div>
          ))}
        </div>

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