import CrewCard from "./components/CrewCard";
import data from "../../data/data.json";
import "./style.css";

function DouglasHurley() {
  const member = data.crew[0];

  return (
    <CrewCard 
    name={member.name}
    image={member.image}
    role={member.role}
    bio={member.bio}
    />
  )
}

export default DouglasHurley;