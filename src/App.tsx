import { MapProvider } from './Context/MapContext';
import KnockoutStage from './components/KnockoutStage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {

  return (
    <BrowserRouter>
      <MapProvider>
        <div className="flex flex-col items-center bg-background overflow-hidden min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knockout" element={<KnockoutStage />} />
          </Routes>
        </div>
      </MapProvider>
    </BrowserRouter>
  );
}

export default App;
