import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { markLessonComplete } from "../redux/progressSlice";
import periods from "../data/periods";

function LessonPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let lesson = null;
  for (const period of periods) {
    const found = period.lessons.find((l) => l.id === parseInt(id));
    if (found) lesson = found;
  }

  if (!lesson) {
    return <p>Leçon introuvable.</p>;
  }

  function handleQuizClick() {
    dispatch(markLessonComplete(lesson.id));
    navigate(`/lecon/${lesson.id}/quiz`);
  }

  return (
    <div className="lesson-page">
      <Link to="/">← Retour à l'accueil</Link>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
      <button onClick={handleQuizClick}>Faire le quiz</button>
    </div>
  );
}

export default LessonPage;