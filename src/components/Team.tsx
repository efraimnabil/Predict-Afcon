import { useState } from 'react';
import reactLogo from '../assets/react.svg';
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
    setDropped(true); // this is not working
  }

  return (
    <div 
      className={`flex flex-col items-center p-2 m-3 border ${isDragging ? 'border-green-500' : 'border-gray-400'}`}
      draggable = {!dropped} // and this
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
    >
      
      <img src={reactLogo} className='w-8 h-8' alt='React logo' />
      {teamName}
    
    </div>
  )
}

export default Team