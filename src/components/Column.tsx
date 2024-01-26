import VersusBox from "./VersusBox"

interface IProps {
    matchesCount: number
    roundTeams?: string[]
}

const Column = ({matchesCount, roundTeams = []}: IProps) => {
  return (
    <div className='flex flex-col justify-around h-full'>
      {
        Array.from({ length: matchesCount }).map((_, index) => {
          const team1 = roundTeams.length > index * 2 ? roundTeams[index * 2] : undefined;
          const team2 = roundTeams.length > index * 2 + 1 ? roundTeams[index * 2 + 1] : undefined;
          return <VersusBox key={index} team1={team1} team2={team2} />
        })
      }
    </div>
  )
}

export default Column