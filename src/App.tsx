import Column from './components/Column';
import { MapProvider } from './Context/MapContext';
import Final from './components/Final';
import html2canvas from 'html2canvas';
import SideBar from './components/SideBar';

function App() {
  const handleImageDownload = async () => {
    const element = document.getElementById('print-image');

    if (element) {
      try {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'tournament_image.png';
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  const handleImageShare = async () => {
    const element = document.getElementById('print-image');

    if (element) {
      try {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');

        if (navigator.share) {
          await navigator.share({
            files: [new File([imgData], 'tournament_image.png', { type: 'image/png' })],
            title: 'Africa Cup of Nations 2024',
            text: 'Check out my predictions for the Africa Cup of Nations 2024!',
          });
        } else {
          console.error('Web Share API not supported');
        }
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  const styles = {
    root: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      color: 'rgb(var(--foreground-rgb))',
      background: `linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))`,
      '--foreground-rgb': '255, 255, 255',
      '--background-start-rgb': '0, 0, 0',
      '--background-end-rgb': '0, 0, 0',
    },
  };

  return (
    <MapProvider>
      <div className="flex flex-col items-center h-screen" style={styles.root}>
        <SideBar handleImageDownload={handleImageDownload} handleImageShare={handleImageShare} />
        <div id='print-image' style={styles.root} className='flex items-center justify-between h-screen w-full'>
          <Column matchesCount={4} roundTeams={['ZAF', 'MAR', 'MRT', 'CPV', 'NAM', 'AGO', 'CMR', 'NGA']} countStart={1} />

          <Column matchesCount={2} countStart={9} />

          <Column matchesCount={1} countStart={13} />

          <Final />

          <Column matchesCount={1} countStart={14} />

          <Column matchesCount={2} countStart={11} />

          <Column matchesCount={4} roundTeams={['GIN', 'GNQ', 'COD', 'EGY', 'CIV', 'SEN', 'BFA', 'MLI']} countStart={5} />

        </div>
      </div>
    </MapProvider>
  );
}

export default App;
