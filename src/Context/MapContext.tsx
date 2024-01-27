import { createContext, useContext, ReactNode } from 'react';

type MapContextProps = {
  children: ReactNode;
};

const MapContext = createContext<Map<number, number>>(new Map());

export const MapProvider = ({ children }: MapContextProps) => {
  const map = new Map<number, number>();
  map.set(1, 9);
  map.set(2, 9);
  map.set(3, 10);
  map.set(4, 10);
  map.set(5, 11);
  map.set(6, 11);
  map.set(7, 12);
  map.set(8, 12);
  map.set(9, 13);
  map.set(10, 13);
  map.set(11, 14);
  map.set(12, 14);
  map.set(13, 15);
  map.set(14, 15);
  map.set(15, 16);

  return (
    <MapContext.Provider value={map}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = (): { map: Map<number, number> } => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return { map: context };
};
  