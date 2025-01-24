import DestinationMenu from "./ui/DestinationMenu";
import DistanceInfo from "./ui/DistanceInfo";
import "../style.css";

type DestinationCardProps = {
  name: string
  image: string
  description: string
  distance: string
  travel: string
}

function DestinationCard({ name, image, description, distance, travel }: DestinationCardProps) {
  return (
    <section className="destination-card">
      <img src={image} alt={`Image of ${name}`} />
      <section className="destination-info">
        <DestinationMenu />
        <article>
          <h2>{name}</h2>
          <p>{description}</p>
          <hr />
          <div className="distance-info-container">
            <DistanceInfo 
            heading="Avg. Distance"
            info={distance}
            />
            <DistanceInfo 
            heading="Est. Travel Time"
            info={travel}
            />
          </div>
        </article>
      </section>
    </section>
  )
}

export default DestinationCard;