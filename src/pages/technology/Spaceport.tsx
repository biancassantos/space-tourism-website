import TechnologyCard from "./components/TechnologyCard";
import data from "../../data/data.json";
import "./style.css";

function Spaceport() {
  const technology = data.technology[1];

  return (
    <TechnologyCard 
    name={technology.name}
    description={technology.description}
    portraitImg={technology.images.portrait}
    landscapeImg={technology.images.landscape}
    />
  )
}

export default Spaceport;