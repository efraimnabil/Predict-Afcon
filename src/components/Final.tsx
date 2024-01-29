import VersusBox from "./VersusBox"

interface IProps {

}

const Final = ({}: IProps) => {
  return (
    <div className="flex justify-around xl:flex-col gap-10">
        <VersusBox boxNumber={16} winners="winner" />
        <VersusBox boxNumber={15} final={true} />
    </div>
  )
}

export default Final