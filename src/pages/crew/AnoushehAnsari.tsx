import CrewCard from "./components/CrewCard";
import data from "../../data/data.json";
import "./style.css";

function AnoushehAnsari() {
  const member = data.crew[3];

  return (
    <CrewCard 
    name={member.name}
    image={member.image}
    role={member.role}
    bio={member.bio}
    />
  )
}

export default AnoushehAnsari;