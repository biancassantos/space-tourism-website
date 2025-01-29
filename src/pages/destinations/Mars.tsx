import DestinationCard from "./components/DestinationCard";
import data from "../../data/data.json";

function Mars() {
  const mars = data.destinations[1];

  return (
    <DestinationCard 
    name={mars.name}
    image={mars.image}
    description={mars.description}
    distance={mars.distance}
    travel={mars.travel}
    />
  )
}

export default Mars;