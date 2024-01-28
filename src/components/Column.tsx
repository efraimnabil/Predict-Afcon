import VersusBox from "./VersusBox"

interface IProps {
    matchesCount: number
    roundTeams?: string[]
    countStart: number
}

const Column = ({matchesCount, roundTeams = [], countStart}: IProps) => {
  return (
    <div className='flex justify-around h-full'>
      {
        Array.from({ length: matchesCount }).map((_, index) => {
          const team1 = roundTeams.length > index * 2 ? roundTeams[index * 2] : undefined;
          const team2 = roundTeams.length > index * 2 + 1 ? roundTeams[index * 2 + 1] : undefined;
          return <VersusBox key={index} team1={team1} team2={team2} boxNumber={countStart + index}/>
        })
      }
    </div>
  )
}

export default Column