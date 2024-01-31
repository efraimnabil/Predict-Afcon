import { MapProvider } from './Context/MapProvider';
import KnockoutStage from './components/KnockoutStage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { PredictionProvider } from './Context/PredictionProvider';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <BrowserRouter>
      <PredictionProvider>
        <MapProvider>
          <div className="flex flex-col items-center bg-background overflow-hidden min-h-screen xl:h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/knockout" element={<KnockoutStage />} />
            </Routes>
          </div>
          <Toaster />
        </MapProvider>
      </PredictionProvider>
    </BrowserRouter>
  );
}

export default App;
