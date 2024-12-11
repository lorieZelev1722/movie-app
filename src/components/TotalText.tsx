
interface Props{
    totalResult : string;
}

function TotalText(props:Props) {
  return (
    <p className="text-right p-3">Total Result: {props.totalResult}</p>
  )
}

export default TotalText