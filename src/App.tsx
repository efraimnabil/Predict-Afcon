import Column from './components/Column';
import { MapProvider } from './Context/MapContext';
import Final from './components/Final';
import html2canvas from 'html2canvas';
import SideBar from './components/Navbar';

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
        const blob = await fetch(imgData).then((res) => res.blob());
  
        if (navigator.share) {
          await navigator.share({
            files: [new File([blob], 'tournament_image.png', { type: 'image/png' })],
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

  return (
    <MapProvider>
      <div className="flex flex-col items-center bg-black overflow-hidden">
        <SideBar handleImageDownload={handleImageDownload} handleImageShare={handleImageShare} />
        
        <div id='print-image' className='flex flex-col items-center justify-between w-full gap-8 text-forground bg-black'>
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
