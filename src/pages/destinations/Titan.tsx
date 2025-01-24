import DestinationCard from "./components/DestinationCard";
import data from "../../data/data.json";

function Titan() {
  const titan = data.destinations[3];

  return (
    <DestinationCard 
    name={titan.name}
    image={titan.images["png"]}
    description={titan.description}
    distance={titan.distance}
    travel={titan.travel}
    />  
  )
}

export default Titan;