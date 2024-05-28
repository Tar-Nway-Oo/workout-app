import "../App.css"

type NotFoundProps = {
   text: string
}

export default function NotFound({text}: NotFoundProps) {
  return (
    <p className="not-found-text">{text}</p>
  )
}
