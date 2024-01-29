import Cup from '../../assets/cup.png';

interface IProps {
    className?: string,
}

const CUP = ({className}: IProps) => {
  return (
    <img 
      src={Cup} 
      alt='Cup' 
      className={className}
      draggable="false" 
    />
  )
}

export default CUP