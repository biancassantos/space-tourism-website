import "../style.css";

type SpanHeadingProps = {
  number?: string
  text: string
}

function SpanHeading({ number, text }: SpanHeadingProps) {
  return (
    <div className="span-heading">
      {number && <span id="number">{number}</span>}
      <span id="text">{text}</span>
    </div>
  )
}

export default SpanHeading;