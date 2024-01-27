import { useState } from 'react';
import Team from "./Team"

interface IProps {
  team1?: string,
  team2?: string,
  boxNumber: number,

}

const VersusBox = ({team1, team2, boxNumber}: IProps) => {
  const [droppedTeam1, setDroppedTeam1] = useState<{name: string, fromBox: number} | null>(null);
  const [droppedTeam2, setDroppedTeam2] = useState<{name: string, fromBox: number} | null>(null);
  const [isDragOver1, setIsDragOver1] = useState(false);
  const [isDragOver2, setIsDragOver2] = useState(false);

  const map = new Map();
  map.set(1, 9);
  map.set(2, 9);
  map.set(3, 10);
  map.set(4, 10);
  map.set(5, 11);
  map.set(6, 11);
  map.set(7, 12);
  map.set(8, 12);
  map.set(9, 13);
  map.set(10, 13);
  map.set(11, 14);
  map.set(12, 14);


  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleOnDrop1 = (e: React.DragEvent) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("text/plain")
    let team = JSON.parse(data);
    if (map.get(team.fromBox) !== boxNumber) {
      return;
    }
    if(droppedTeam2?.fromBox === team.fromBox) {
      return;
    }

    setDroppedTeam1(team);
    setIsDragOver1(false);
  }

  const handleOnDrop2 = (e: React.DragEvent) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("text/plain")
    let team = JSON.parse(data);
    if (map.get(team.fromBox) !== boxNumber) {
      return;
    }

    if(droppedTeam1?.fromBox === team.fromBox) {
      return;
    }
    setDroppedTeam2(team);
    setIsDragOver2(false);
  }

  const handleDragEnter1 = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver1(true);
  }

  const handleDragLeave1 = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver1(false);
  }

  const handleDragEnter2 = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver2(true);
  }

  const handleDragLeave2 = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver2(false);
  }

  return (
    <div className='flex flex-row items-center justify-center p-2 m-3 border border-gray-400 rounded-lg'>
      {boxNumber}
      { team1 ? 
        <Team teamName={team1} fromBox={boxNumber} />
        : 
        droppedTeam1 ?
          <Team teamName={droppedTeam1.name} fromBox={boxNumber} />
          :
          <div 
            className={`flex flex-col items-center justify-center p-7 m-3 border ${isDragOver1 ? 'border-green-500' : 'border-dotted'}`} onDrop={handleOnDrop1} 
            onDragOver={handleOnDragOver} 
            onDragEnter={handleDragEnter1} 
            onDragLeave={handleDragLeave1}
          >
        </div>
      }

      VS

      { team2 ? 
        <Team teamName={team2} fromBox={boxNumber} />
        : 
        droppedTeam2 ?
          <Team teamName={droppedTeam2.name} fromBox={boxNumber} />
          :
          <div 
            className={`flex flex-col items-center justify-center p-7 m-3 border ${isDragOver2 ? 'border-green-500' : 'border-dotted'}`} onDrop={handleOnDrop2} 
            onDragOver={handleOnDragOver} 
            onDragEnter={handleDragEnter2} 
            onDragLeave={handleDragLeave2}
          >
        </div>
      }
    </div>
  )
}

export default VersusBox