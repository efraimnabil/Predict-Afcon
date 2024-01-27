import VersusBox from "./VersusBox"

interface IProps {

}

const Final = ({}: IProps) => {
  return (
    <div className="flex flex-col justify-around h-full">
        <VersusBox boxNumber={16} winners="winner" />
        <VersusBox boxNumber={15} final={true} />
        <VersusBox boxNumber={17} winners="third" />
    </div>
  )
}

export default Final