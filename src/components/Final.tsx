import VersusBox from "./VersusBox"

interface IProps {
  teams1?: string,
  teams2?: string
  winnerTeam?: string
}

const Final = ({teams1, teams2, winnerTeam}: IProps) => {

  return (
    <div className="flex justify-around xl:flex-col gap-10">
        <VersusBox boxNumber={16} winner={true} team1={winnerTeam} />
        <VersusBox boxNumber={15} final={true} team1={teams1} team2={teams2} />
    </div>
  )
}

export default Final