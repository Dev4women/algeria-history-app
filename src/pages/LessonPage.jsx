import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { markLessonComplete } from "../redux/progressSlice";
import periods from "../data/periods";
import { PageContainer, Title, Button, BackLink } from "../components/StyledComponents";

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
    <PageContainer>
      <BackLink as={Link} to="/">← Retour à l'accueil</BackLink>
      <Title>{lesson.title}</Title>
      <p>{lesson.content}</p>
      <Button onClick={handleQuizClick}>Faire le quiz</Button>
    </PageContainer>
  );
}

export default LessonPage;