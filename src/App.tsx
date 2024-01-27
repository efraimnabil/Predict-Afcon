import Column from './components/Column'

function App() {

  return (
    <div className='flex items-center justify-between h-screen'>
      
        <Column matchesCount={4} roundTeams={['ZAF', 'MAR', 'MRT', 'CPV', 'NAM', 'AGO', 'CMR', 'NGA']} countStart={1}/>

        <Column matchesCount={2} countStart={9}/>

        <Column matchesCount={1} countStart={13}/>

        <Column matchesCount={1} countStart={14}/>

        <Column matchesCount={2} countStart={11}/>

        <Column matchesCount={4} roundTeams={['GIN', 'GNQ', 'COD', 'EGY', 'CIV', 'SEN', 'BFA', 'MLI']} countStart={5}/>

    </div>
  )
}

export default App
