import SmallTitle from "../../../components/SmallTitle";
import BigTitle from "../../../components/BigTitle";
import TechnologyMenu from "./TechnologyMenu";
import TechnologyImage from "./TechnologyImage";
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
      <TechnologyImage 
      name={name}
      portraitImg={portraitImg}
      landscapeImg={landscapeImg}
      />
    </section>
  )
}

export default TechnologyCard;