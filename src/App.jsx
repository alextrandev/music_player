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
        name: 'Blinding Lights',
        file: sinister
      },
      {
        name: 'Shape of You',
        file: stomp
      },
      {
        name: 'Someone Like You',
        file: underwater
      },
      {
        name: 'Rolling in the Deep',
        file: sinister
      },
      {
        name: 'Uptown Funk',
        file: stomp
      },
      {
        name: 'Thinking Out Loud',
        file: underwater
      },
      {
        name: 'Havana',
        file: sinister
      },
      {
        name: 'Old Town Road',
        file: stomp
      },
      {
        name: 'Despacito',
        file: underwater
      },
      {
        name: 'Bad Guy',
        file: sinister
      },
      {
        name: 'Levitating',
        file: stomp
      },
      {
        name: 'Stay',
        file: underwater
      },
      {
        name: 'Sunflower',
        file: sinister
      },
      {
        name: 'Senorita',
        file: stomp
      },
      {
        name: 'Drivers License',
        file: underwater
      }
    ]

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
