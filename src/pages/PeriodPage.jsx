import { useParams, Link } from "react-router-dom";
import periods from "../data/periods";

function PeriodPage() {
  const { id } = useParams();
  const period = periods.find((p) => p.id === parseInt(id));

  if (!period) {
    return <p>Période introuvable.</p>;
  }

  return (
    <div className="period-page">
      <Link to="/">← Retour à l'accueil</Link>
      <h1>{period.title}</h1>
      <div className="lessons-list">
        {period.lessons.map((lesson) => (
          <Link key={lesson.id} to={`/lecon/${lesson.id}`} className="lesson-link">
            <h3>{lesson.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PeriodPage;