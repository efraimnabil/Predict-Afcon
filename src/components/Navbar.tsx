import html2canvas from "html2canvas";
import Button from "./UI/Button";
import { useState } from "react";
import { usePrediction } from "../Context/PredictionProvider";
import { toast } from "react-hot-toast";
import EmailRegister from "./EmailRegister";


const Navbar = () => {

  const { prediction } = usePrediction();

  const [EmailRegisterOpen, setEmailRegisterOpen] = useState(false);

  const handleRegisterClick = () => {

    if(1) {
      toast("The AFCON is already over");
      return;
    }

    if (prediction.places.winner.length == 0) {
      toast.error('Please fill all the boxes');
      return;
    }

    setEmailRegisterOpen(true);
  }

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
        <Button buttonText='Reset' onClick={() => window.location.reload()} />

        {!!navigator.share && <Button buttonText='Share' onClick={() => handleImageShare()} /> }
        <Button buttonText='Download' onClick={handleImageDownload} />
        <Button buttonText='Register' onClick={handleRegisterClick} />
        {EmailRegisterOpen && <EmailRegister onClose={() => setEmailRegisterOpen(false)} />}

    </div>
  )
}

export default Navbar