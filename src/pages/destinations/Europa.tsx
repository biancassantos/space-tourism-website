import DestinationCard from "./components/DestinationCard";
import data from "../../data/data.json";

function Europa() {
  const europa = data.destinations[2];

  return (
    <DestinationCard 
    name={europa.name}
    image={europa.image}
    description={europa.description}
    distance={europa.distance}
    travel={europa.travel}
    />  
  )
}

export default Europa;