import React from 'react';

interface IProps {
  onClose: () => void;
}

const EmailRegister = ({ onClose }: IProps) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Stop the propagation of the click event inside the modal content
    event.stopPropagation();
  };

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
          placeholder="Email"
          className="border border-primary bg-transparent rounded-2xl py-2 px-3 text-primary text-sm md:text-xl"
        />

        <button
          onClick={onClose}
          className="border border-primary rounded-xl py-1 px-3 text-primary text-sm md:text-xl hover:bg-primary hover:text-white"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default EmailRegister;
