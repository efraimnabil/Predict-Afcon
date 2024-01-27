import { useState } from 'react';
import Team from "./Team"
import CUP from '../assets/cup.png'
import { useMap } from './../Context/MapContext';

interface IProps {
  team1?: string,
  team2?: string,
  boxNumber: number,
  final?: boolean,
  winners?: string
}

const VersusBox = ({ team1, team2, boxNumber, final, winners }: IProps) => {
  const { map } = useMap();
  const [droppedTeam1, setDroppedTeam1] = useState<{ name: string, fromBox: number } | null>(null);
  const [droppedTeam2, setDroppedTeam2] = useState<{ name: string, fromBox: number } | null>(null);
  const [isDragOver1, setIsDragOver1] = useState(false);
  const [isDragOver2, setIsDragOver2] = useState(false);


  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const handleOnDrop1 = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver1(false);
    const data = e.dataTransfer.getData("text/plain");
    const team = JSON.parse(data);

    if (map.get(team.fromBox) !== boxNumber || droppedTeam2?.fromBox === team.fromBox) {
      return;
    }

    setDroppedTeam1(team);
  }

  const handleOnDrop2 = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver2(false);
    const data = e.dataTransfer.getData("text/plain");
    const team = JSON.parse(data);

    if (map.get(team.fromBox) !== boxNumber || droppedTeam1?.fromBox === team.fromBox) {
      return;
    }

    setDroppedTeam2(team);
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
    <div className='flex flex-col items-center justify-center p-1 m-2 border border-gray-400 rounded-lg'>
      {winners === "winner" && <h2 className='text-2xl'>Winner</h2>}
      {winners === "third" && <h2 className='text-2xl'>Third Place</h2>}
      {winners ?
        droppedTeam1 ? <Team teamName={droppedTeam1.name} fromBox={boxNumber} /> :
        <div
        className={`flex flex-col items-center justify-center p-7 m-3 border ${isDragOver1 ? 'border-green-500' : 'border-dotted'}`}
        onDrop={handleOnDrop1}
        onDragOver={handleOnDragOver}
        onDragEnter={handleDragEnter1}
        onDragLeave={handleDragLeave1}
        >

          {boxNumber}
        </div>

        :

        <>
          {final && <h2 className='text-2xl'>Final</h2>}
          {boxNumber}
          <div className='flex flex-row items-center justify-center'>
            {team1 ?
              <Team teamName={team1} fromBox={boxNumber} />
              :
              droppedTeam1 ?
                <Team teamName={droppedTeam1.name} fromBox={boxNumber} />
                :
                <div
                  className={`flex flex-col items-center justify-center p-7 m-3 border ${isDragOver1 ? 'border-green-500' : 'border-dotted'}`}
                  onDrop={handleOnDrop1}
                  onDragOver={handleOnDragOver}
                  onDragEnter={handleDragEnter1}
                  onDragLeave={handleDragLeave1}
                ></div>
            }

            {final ?
              <img src={CUP} alt='cup' className='h-32' draggable="false" />
              :
              <p className='text-sm font-bold'>VS</p>
            }

            {team2 ?
              <Team teamName={team2} fromBox={boxNumber} />
              :
              droppedTeam2 ?
                <Team teamName={droppedTeam2.name} fromBox={boxNumber} />
                :
                <div
                  className={`flex flex-col items-center justify-center p-7 m-3 border ${isDragOver2 ? 'border-green-500' : 'border-dotted'}`}
                  onDrop={handleOnDrop2}
                  onDragOver={handleOnDragOver}
                  onDragEnter={handleDragEnter2}
                  onDragLeave={handleDragLeave2}
                ></div>
            }
          </div>
        </>
      }
    </div>
  );
}

export default VersusBox;
