import "../style.css";

type DistanceInfoProps = {
  heading: string
  info: string
}

function DistanceInfo({ heading, info }: DistanceInfoProps) {
  return (
    <div className="distance-info">
      <h3>{heading}</h3>
      <p>{info}</p>
    </div>
  )
}

export default DistanceInfo;