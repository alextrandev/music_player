import { useState } from 'react';
import './App.css';
import PlayerControls from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';
import sinister from './assets/music/sinister.mp3';
import stomp from './assets/music/stomp.mp3';
import underwater from './assets/music/underwater.mp3';

function App() {
  const [state, setState] = useState({
    currentTrackIndex: 0,
    isPlaying: false,
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Sinister Music ...',
        file: sinister
      },
      {
        name: 'Stomp Music ...',
        file: stomp
      },
      {
        name: 'Sinister Music ...',
        file: underwater
      }
    ],
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div>
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  )
}

export default App
