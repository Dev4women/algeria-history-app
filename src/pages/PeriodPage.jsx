import { useParams, Link } from "react-router-dom";
import periods from "../data/periods";
import { PageContainer, Title, Card, CardTitle, BackLink } from "../components/StyledComponents";

function PeriodPage() {
  const { id } = useParams();
  const period = periods.find((p) => p.id === parseInt(id));

  if (!period) {
    return <p>Période introuvable.</p>;
  }

  return (
    <PageContainer>
      <BackLink as={Link} to="/">← Retour à l'accueil</BackLink>
      <Title>{period.title}</Title>
      {period.lessons.map((lesson) => (
        <Card as={Link} key={lesson.id} to={`/lecon/${lesson.id}`}>
          <CardTitle>{lesson.title}</CardTitle>
        </Card>
      ))}
    </PageContainer>
  );
}

export default PeriodPage;