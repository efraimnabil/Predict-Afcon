import { MapProvider } from './Context/MapProvider';
import KnockoutStage from './pages/KnockoutStage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { PredictionProvider } from './Context/PredictionProvider';
import { Toaster } from 'react-hot-toast';
import Standing from './pages/Standing';

function App() {

  return (
    <BrowserRouter>
      <PredictionProvider>
        <MapProvider>
          <div className="flex flex-col items-center bg-background overflow-hidden min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/knockout" element={<KnockoutStage />} />
              <Route path="/standing" element={<Standing />} />
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </div>
          <Toaster />
        </MapProvider>
      </PredictionProvider>
    </BrowserRouter>
  );
}

export default App;
