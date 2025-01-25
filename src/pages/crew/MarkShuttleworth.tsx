import CrewCard from "./components/CrewCard";
import data from "../../data/data.json";
import "./style.css";

function MarkShuttleworth() {
  const member = data.crew[1];

  return (
    <CrewCard 
    name={member.name}
    image={member.images["png"]}
    role={member.role}
    bio={member.bio}
    />
  )
}

export default MarkShuttleworth;