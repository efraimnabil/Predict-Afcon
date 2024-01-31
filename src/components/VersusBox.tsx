import { useState } from 'react';
import Team from "./Team"
import Cup from './UI/Cup'
import { useMap } from '../Context/MapProvider';
import { usePrediction } from '../Context/PredictionProvider';

interface IProps {
  team1?: string,
  team2?: string,
  boxNumber: number,
  final?: boolean,
  winner?: boolean
}

const VersusBox = ({ team1, team2, boxNumber, final, winner }: IProps) => {
  const { map } = useMap();
  const { prediction, updatePrediction } = usePrediction();

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

    if (boxNumber <= 12){
      updatePrediction('quarter', [...prediction.places.quarter, team.name]);
    }
    else if (boxNumber <= 14){
      updatePrediction('semi', [...prediction.places.semi, team.name]);
    }
    else if (boxNumber <= 15){
      updatePrediction('final', [...prediction.places.final, team.name]);
    }
    else if (boxNumber === 16){
      updatePrediction('winner', [...prediction.places.winner, team.name]);
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

    if (boxNumber <= 12){
      updatePrediction('quarter', [...prediction.places.quarter, team.name]);
    }
    else if (boxNumber <= 14){
      updatePrediction('semi', [...prediction.places.semi, team.name]);
    }
    else if (boxNumber <= 15){
      updatePrediction('final', [...prediction.places.final, team.name]);
    }
    else if (boxNumber === 16){
      updatePrediction('winner', [...prediction.places.winner, team.name]);
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
    <div className={`flex flex-col items-center justify-center m-1 border ${winner ? 'border-primary' : 'border-white-30'} rounded-xl`}>
      {winner && <p className='p-2 text-primary'>Winner</p>}
      {winner ?
        droppedTeam1 ? <Team teamName={droppedTeam1.name} fromBox={boxNumber} /> :
        <div
        className={`flex flex-col items-center justify-center px-6 py-7 m-2 border ${isDragOver1 ? 'border-green-500' : 'border-primary'} rounded-xl`}
        onDrop={handleOnDrop1}
        onDragOver={handleOnDragOver}
        onDragEnter={handleDragEnter1}
        onDragLeave={handleDragLeave1}
        >

        </div>

        :

        <>
          {final && <h2 className='p-2'>Final</h2>}
          <div className={`flex ${boxNumber >= 9 ? "flex-row" : "flex-col"} items-center justify-center xl:flex-row`}>
            {team1 ?
              <Team teamName={team1} fromBox={boxNumber} />
              :
              droppedTeam1 ?
                <Team teamName={droppedTeam1.name} fromBox={boxNumber} />
                :
                <div
                  className={`flex flex-col items-center justify-center px-6 py-7 m-2 border ${isDragOver1 ? 'border-green-500' : 'border-white-30'} rounded-xl`}
                  onDrop={handleOnDrop1}
                  onDragOver={handleOnDragOver}
                  onDragEnter={handleDragEnter1}
                  onDragLeave={handleDragLeave1}
                ></div>
            }

            {final ?
              <Cup className='w-12' />
              :
              <p className='text-sm'>VS</p>
            }

            {team2 ?
              <Team teamName={team2} fromBox={boxNumber} />
              :
              droppedTeam2 ?
                <Team teamName={droppedTeam2.name} fromBox={boxNumber} />
                :
                <div
                  className={`flex flex-col items-center justify-center px-6 py-7 m-2 border ${isDragOver2 ? 'border-green-500' : 'border-white-30'} rounded-xl`}
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
