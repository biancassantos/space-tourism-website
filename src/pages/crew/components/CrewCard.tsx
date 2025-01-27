import SmallTitle from "../../../components/SmallTitle";
import BigTitle from "../../../components/BigTitle";
import CrewMenu from "./ui/CrewMenu";
import "../style.css";

type CrewCardProps = {
  name: string
  image: string
  role: string
  bio: string
}

function CrewCard({ name, image, role, bio }: CrewCardProps) {
  return (
    <section className="crew-card">
      <div>
        <article>
          <SmallTitle text={role} />
          <BigTitle text={name} />
          <p>{bio}</p>
        </article>
        <CrewMenu />
      </div>
      <img src={image} alt={`Picture of ${name}`} />
    </section>
  )
}

export default CrewCard;