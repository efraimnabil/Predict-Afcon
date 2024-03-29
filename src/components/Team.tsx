import { useState } from 'react';
import Flag from './UI/Flag';

interface IProps {
  teamName: string,
  fromBox: number,
}

const Team = ({teamName, fromBox}: IProps) => {
  const [isDragging, setIsDragging] = useState(false);

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
  }
  return (
    <div 
      className={`relative flex flex-col items-center py-1 px-2 my-4 mx-2 border ${isDragging ? 'border-green-500' : (fromBox === 16 ? 'border-primary' : 'border-white-30')} rounded-xl`}
      draggable
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
    >
      
      <Flag teamName={teamName}/>
      <p className='select-none' draggable="false">{teamName}</p>
      <div className="absolute top-0 left-0 w-14 h-14 bg-transparent z-5"></div>
    </div>
  )
}

export default Team