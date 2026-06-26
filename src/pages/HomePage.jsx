import { Link } from "react-router-dom";
import periods from "../data/periods";
import { PageContainer, Title, Card, CardTitle } from "../components/StyledComponents";

function HomePage() {
  return (
    <PageContainer>
      <Title>Découvrir l'histoire de l'Algérie</Title>
      {periods.map((period) => (
        <Card as={Link} key={period.id} to={`/periode/${period.id}`}>
          <CardTitle>{period.title}</CardTitle>
          <p>{period.description}</p>
        </Card>
      ))}
    </PageContainer>
  );
}

export default HomePage;