import "./style.css";

type SmallTitleProps = {
  text: string
}

function SmallTitle({ text }: SmallTitleProps) {
  return (
    <h2 className="small-title">{text}</h2>
  )
}

export default SmallTitle;