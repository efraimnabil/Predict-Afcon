import { useState } from 'react';
import Team from "./Team"
import Cup from './UI/Cup'
import EmptyBox from './EmptyBox';
import TeamBox from './TeamBox';
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
  const [isDragOver, setIsDragOver] = useState<string | null>(null);


  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const handleOnDrop = (e: React.DragEvent, team: 'team1' | 'team2') => {
    e.preventDefault();
    if (team === 'team1') {
      setIsDragOver('team1');
    } else {
      setIsDragOver('team2');
    }
  
    const data = e.dataTransfer.getData("text/plain");
    const droppedTeam = JSON.parse(data);

    if (map.get(droppedTeam.fromBox) !== boxNumber ||
        (team === 'team1' && droppedTeam2?.fromBox === droppedTeam.fromBox) ||
        (team === 'team2' && droppedTeam1?.fromBox === droppedTeam.fromBox) ){
          setIsDragOver(null);
      return;
    }
  
    if (boxNumber <= 12){
      updatePrediction('quarter', [...prediction.places.quarter, droppedTeam.name]);
    } else if (boxNumber <= 14){
      updatePrediction('semi', [...prediction.places.semi, droppedTeam.name]);
    } else if (boxNumber <= 15){
      updatePrediction('final', [...prediction.places.final, droppedTeam.name]);
    } else if (boxNumber === 16){
      updatePrediction('winner', [...prediction.places.winner, droppedTeam.name]);
    }
  
    if (team === 'team1') {
      setDroppedTeam1(droppedTeam);
    } else {
      setDroppedTeam2(droppedTeam);
    }
  }

  const handleDragEnter = (e: React.DragEvent, team: 'team1' | 'team2') => {
    e.preventDefault();
    if (team === 'team1') {
      setIsDragOver('team1')
    } else {
      setIsDragOver('team2')
    }
  }

  const handleDragLeave = (e: React.DragEvent, team: 'team1' | 'team2') => {
    e.preventDefault();
    if (team === 'team1') {
      setIsDragOver(null);
    } else {
      setIsDragOver(null);
    }
  }

  const VersusBoxTitle = ({ winner, final }: { winner?: boolean, final?: boolean }) => {
    return (
      <>
        {winner && <p className='p-2 text-primary select-none'>Winner</p>}
        {final && <h2 className='p-2 select-none'>Final</h2>}
      </>
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center m-1 border ${winner ? 'border-primary' : 'border-white-30'} rounded-xl`}>
      <VersusBoxTitle winner={winner} final={final} />
      {winner ?
        droppedTeam1 ? 
          <Team teamName={droppedTeam1.name} fromBox={boxNumber} />
          :
          <EmptyBox
            isDragOver={isDragOver === 'team1'}
            handleOnDrop={handleOnDrop}
            handleOnDragOver={handleOnDragOver}
            handleDragEnter={handleDragEnter}
            handleDragLeave={handleDragLeave}
            winner={winner}
            team='team1'
          />

        :

        <>
          <div className={`flex ${boxNumber >= 9 ? "flex-row" : "flex-col"} items-center justify-center xl:flex-row`}>
            <TeamBox 
              teamName={team1} 
              droppedTeam={droppedTeam1} 
              isDragOver={isDragOver === 'team1'}
              handleOnDrop={handleOnDrop}
              handleOnDragOver={handleOnDragOver}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              team='team1'
              boxNumber={boxNumber}
            />

            {final ?
              <Cup className='w-12' />
              :
              <p className='text-sm select-none'>VS</p>
            }

            <TeamBox 
              teamName={team2} 
              droppedTeam={droppedTeam2} 
              isDragOver={isDragOver === 'team2'}
              handleOnDrop={handleOnDrop}
              handleOnDragOver={handleOnDragOver}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              team='team2'
              boxNumber={boxNumber}
            />
          </div>
        </>
      }
    </div>
  );
}

export default VersusBox;
