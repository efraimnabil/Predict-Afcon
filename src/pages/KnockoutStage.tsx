import Column from '../components/Column';
import Final from '../components/Final';
import Navbar from '../components/Navbar';
interface IProps {

}

const KnockoutStage = ({}: IProps) => {
  return (
    <div className='xl:h-screen w-screen'>
        <Navbar />
        <div 
          id='print-image' 
          className='flex flex-col items-center h-full w-full justify-between gap-4 text-forground bg-background xl:flex-row xl:px-5 xl:py-12 xl:h-full'
          >
          
          <Column matchesCount={4} roundTeams={['ZAF', 'MAR', 'MRT', 'CPV', 'NAM', 'AGO', 'CMR', 'NGA']} countStart={1} />
          
          <Column matchesCount={2} countStart={9} roundTeams={['ZAF', 'CPV', 'AGO', 'NGA']} />
          
          <Column matchesCount={1} countStart={13} roundTeams={['NGA', 'ZAF']} />
          
          <Final teams1='NGA' teams2='CIV' winnerTeam='CIV' />
          
          <Column matchesCount={1} countStart={14} roundTeams={['COD', 'CIV']} />
          
          <Column matchesCount={2} countStart={11} roundTeams={['GIN', 'COD', 'CIV', 'MLI']} />
          
          <Column matchesCount={4} roundTeams={['GIN', 'GNQ', 'COD', 'EGY', 'CIV', 'SEN', 'BFA', 'MLI']} countStart={5} />
        </div>
    </div>

  )
}

export default KnockoutStage