import Column from './components/Column'

function App() {

  return (
    <div className='flex items-center justify-between h-screen'>
      
        <Column matchesCount={4} roundTeams={['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8']} />

        <Column matchesCount={2} />

        <Column matchesCount={1} />

        <Column matchesCount={2} />

        <Column matchesCount={4} roundTeams={['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8']} />

    </div>
  )
}

export default App
