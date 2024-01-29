
import { MapProvider } from './Context/MapContext';
import html2canvas from 'html2canvas';
import NavBar from './components/Navbar';
import KnockoutStage from './components/KnockoutStage';
import Home from './components/Home';


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
      <div className="flex flex-col items-center bg-background overflow-hidden min-h-screen">

        <Home />
        
      </div>
    </MapProvider>
  );
}

export default App;
