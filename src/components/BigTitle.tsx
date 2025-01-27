import "./style.css";

type BigTitleProps = {
  text: string
}

function BigTitle({ text }: BigTitleProps) {
  return (
    <h3 className="big-title">{text}</h3>
  )
}

export default BigTitle;