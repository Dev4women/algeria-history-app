import { Link } from "react-router-dom";
import periods from "../data/periods";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Découvrir l'histoire de l'Algérie</h1>
      <div className="periods-list">
        {periods.map((period) => (
          <Link key={period.id} to={`/periode/${period.id}`} className="period-link">
            <h2>{period.title}</h2>
            <p>{period.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;