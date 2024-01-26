import reactLogo from '../assets/react.svg'
interface IProps {
    teamName: string
}

const Team = ({teamName}: IProps) => {

    const handleOnDragStart = (e: React.DragEvent, teamName: string) => {
        e.dataTransfer.setData("text/plain", teamName)
    }

  return (
    <div className='flex flex-col items-center justify-center p-2 m-3' draggable onDragStart={(e) => handleOnDragStart(e, teamName)}>
        <img src={reactLogo} alt="react logo" draggable="false"/>
        <p draggable="false">{teamName}</p>
    </div>
  )
}

export default Team