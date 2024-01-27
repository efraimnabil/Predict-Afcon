import { useState } from 'react';
import Flag from './Flag';

interface IProps {
  teamName: string,
  fromBox: number,
}

const Team = ({teamName, fromBox}: IProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dropped, setDropped] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    let team = {
      name: teamName,
      fromBox: fromBox,
    }

    e.dataTransfer.setData("text/plain", JSON.stringify(team));
    setIsDragging(true);
  }

  const handleDragEnd = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    console.log('drag end');
    setDropped(true); // this is not working
    console.log(dropped);
  }
  return (
    <div 
      className={`flex flex-col items-center py-1 px-2 my-4 mx-2 border ${isDragging ? 'border-green-500' : 'border-gray-400'}`}
      draggable
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
    >
      
      <Flag teamName={teamName}/>
      <p className='select-none' draggable="false">{teamName}</p>
    
    </div>
  )
}

export default Team