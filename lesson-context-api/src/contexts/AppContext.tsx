import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface AppContextProps {
  track: number;
  prev: () => void;
  next: () => void;
  musicTime: number;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export default function AppContextProvider({ children }: PropsWithChildren) {
  const [track, setTrack] = useState(1);

  const appContext: AppContextProps = {
    track,
    prev: () => {
      if (track > 1) setTrack(track - 1);
    },
    next: () => {
      setTrack(track + 1);
    },
    musicTime: 1.55,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext<AppContextProps>(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used inside AppContextProvider!");
  }

  return context;
}
