import { createContext, useContext, useState, ReactNode } from 'react';

interface PredictionContextProps {
  prediction: {
    places: {
      quarter: string[];
      semi: string[];
      final: string[];
    };
  };
  updatePrediction: (stage: 'quarter' | 'semi' | 'final', newData: string[]) => void;
}

const PredictionContext = createContext<PredictionContextProps | undefined>(undefined);

interface PredictionProviderProps {
  children: ReactNode;
}

const PredictionProvider = ({ children }: PredictionProviderProps) => {
  const [prediction, setPrediction] = useState({
    places: {
      quarter: [],
      semi: [],
      final: [],
    },
  });

  const updatePrediction = (stage: 'quarter' | 'semi' | 'final', newData: string[]) => {
    setPrediction((prevPrediction) => ({
      ...prevPrediction,
      places: {
        ...prevPrediction.places,
        [stage]: newData,
      },
    }));
  };

  return (
    <PredictionContext.Provider value={{ prediction, updatePrediction }}>
      {children}
    </PredictionContext.Provider>
  );
};

const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (!context) {
    throw new Error('usePrediction must be used within a PredictionProvider');
  }
  return context;
};

export { PredictionProvider, usePrediction };
