import SmallTitle from "../../../components/ui/SmallTitle";
import BigTitle from "../../../components/ui/BigTitle";
import TechnologyMenu from "./ui/TechnologyMenu";
import "../style.css";

type TechnologyCardProps = {
  name: string
  description: string
  portraitImg: string
  landscapeImg: string
}

function TechnologyCard({ name, description, portraitImg, landscapeImg }: TechnologyCardProps) {
  return (
    <section className="technology-card">
      <section className="technology-card-aside">
        <TechnologyMenu />
        <article>
          <SmallTitle text="The terminology..." />
          <BigTitle text={name} />
          <p>{description}</p>
        </article>
      </section>
      <img 
      src={portraitImg} 
      alt={`Image of the ${name}`}
      className="portrait"
      />
      <img 
      src={landscapeImg} 
      alt={`Image of the ${name}`} 
      className="landscape"
      />
    </section>
  )
}

export default TechnologyCard;