import Column from './Column';
import Final from './Final';
import Navbar from './Navbar';
interface IProps {

}

const KnockoutStage = ({}: IProps) => {
  return (
    <>
        <Navbar />
        <div 
          id='print-image' 
          className='flex flex-col items-center h-full w-full justify-between gap-4 text-forground bg-background xl:flex-row xl:px-5 xl:py-12 xl:h-full'
          >
          
          <Column matchesCount={4} roundTeams={['ZAF', 'MAR', 'MRT', 'CPV', 'NAM', 'AGO', 'CMR', 'NGA']} countStart={1} />
          
          <Column matchesCount={2} countStart={9} />
          
          <Column matchesCount={1} countStart={13} />
          
          <Final />
          
          <Column matchesCount={1} countStart={14} />
          
          <Column matchesCount={2} countStart={11} />
          
          <Column matchesCount={4} roundTeams={['GIN', 'GNQ', 'COD', 'EGY', 'CIV', 'SEN', 'BFA', 'MLI']} countStart={5} />
        </div>
    </>

  )
}

export default KnockoutStage