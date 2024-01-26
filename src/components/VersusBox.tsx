import { useState } from 'react';
import Team from "./Team"

interface IProps {
  team1?: string,
  team2?: string,
}

const VersusBox = ({team1, team2}: IProps) => {
  const [droppedTeam1, setDroppedTeam1] = useState<string | null>(null);
  const [droppedTeam2, setDroppedTeam2] = useState<string | null>(null);

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleOnDrop1 = (e: React.DragEvent) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("text/plain")
    setDroppedTeam1(data);
  }

  const handleOnDrop2 = (e: React.DragEvent) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("text/plain")
    setDroppedTeam2(data);
  }
  
  return (
    <div className='flex flex-row items-center justify-center p-2 m-3 border border-gray-400 rounded-lg'>
      { team1 ? 
        <Team teamName={team1} /> 
        : 
        droppedTeam1 ?
          <Team teamName={droppedTeam1} />
          :
          <div className='flex flex-col items-center justify-center p-7 m-3 border border-dotted' onDrop={handleOnDrop1} onDragOver={handleOnDragOver}>
        </div>
      }

      VS

      { team2 ? 
        <Team teamName={team2} /> 
        : 
        droppedTeam2 ?
          <Team teamName={droppedTeam2} />
          :
          <div className='flex flex-col items-center justify-center p-7 m-3 border border-dotted' onDrop={handleOnDrop2} onDragOver={handleOnDragOver}>
        </div>
      }
    </div>
  )
}

export default VersusBox