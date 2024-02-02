interface IEmptyBoxProps {
  isDragOver: boolean,
  handleOnDrop: (e: React.DragEvent, team: 'team1' | 'team2') => void,
  handleOnDragOver: (e: React.DragEvent) => void,
  handleDragEnter: (e: React.DragEvent, team: 'team1' | 'team2') => void,
  handleDragLeave: (e: React.DragEvent, team: 'team1' | 'team2') => void
  winner?: boolean
  team: 'team1' | 'team2'
}

const EmptyBox = ({ isDragOver, handleOnDrop, handleOnDragOver, handleDragEnter, handleDragLeave, winner , team}: IEmptyBoxProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-7 m-2 border ${isDragOver ? 'border-green-500' : (winner ? 'border-primary' : 'border-white-30')} rounded-xl`}
      onDrop={(e) => handleOnDrop(e, team)}
      onDragOver={handleOnDragOver}
      onDragEnter={(e) => handleDragEnter(e, team)}
      onDragLeave={(e) => handleDragLeave(e, team)}
    ></div>
  )
}

export default EmptyBox