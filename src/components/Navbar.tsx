import html2canvas from "html2canvas";

interface IProps {

}

const sideBar = ({}: IProps) => {

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
    <div className="flex items-center w-full my-2 justify-around">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" 
          onClick={handleImageShare}>
            Share
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" 
          onClick={handleImageDownload}>
            Download
        </button>
    </div>
  )
}

export default sideBar