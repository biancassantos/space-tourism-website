import DestinationCard from "./components/DestinationCard";
import data from "../../data/data.json";

function Moon() {
  const moon = data.destinations[0];

  return (
    <DestinationCard 
    name={moon.name}
    image={moon.image}
    description={moon.description}
    distance={moon.distance}
    travel={moon.travel}
    />  
  )
}

export default Moon;