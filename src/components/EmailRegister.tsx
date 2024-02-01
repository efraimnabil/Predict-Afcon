import React, { useState } from 'react';
import { usePrediction } from '../Context/PredictionProvider';
import { createPrediction } from '../services/PredictionService';

import toast from 'react-hot-toast';

interface IProps {
  onClose: () => void;
}

const EmailRegister = ({ onClose }: IProps) => {

  const { prediction } = usePrediction();
  const [user , setUser] = useState({
    username: '',
    email: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  const handleRegister = async () => {
    if (!validateEmail(user.email)) {
      toast.error('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    try {

      const payload = {
        user,
        places: prediction.places
      };

      console.log(payload);

      await createPrediction(payload);
      toast.success('Prediction registered successfully');
      onClose();
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  }


  return (
    <div
      className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black-50"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-4 md:px-8 lg:p-6 xl:px-8 py-8 gap-4 justify-between bg-white-10 rounded-xl backdrop-filter backdrop-blur-xl"
        onClick={handleModalClick}
      >
        <button className="absolute top-1 right-2" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="text-primary text-sm font-bold md:text-xl">
          Register your email to get notified when the AFCON ends to know the winner of the predictions
        </p>

        <input 
          type="text" 
          name='username'
          placeholder="Username" 
          className="border border-primary bg-transparent rounded-2xl py-2 px-3 text-primary text-sm md:text-xl" 
          value={user.username}
          onChange={handleChange}
        />

        <input
          type="text"
          name='email'
          placeholder="Email"
          className="border border-primary bg-transparent rounded-2xl py-2 px-3 text-primary text-sm md:text-xl"
          value={user.email}
          onChange={handleChange}
        />

        <button
          onClick={handleRegister}
          className="border border-primary rounded-xl py-1 px-3 text-primary text-sm md:text-xl hover:bg-primary hover:text-white transform active:scale-90 transition duration-150"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default EmailRegister;
