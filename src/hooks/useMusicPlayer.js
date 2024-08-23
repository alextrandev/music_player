import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);

  const togglePlay = () => {
    setState({...state, isPlaying: !state.isPlaying});

    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
  }

  const playTrack = index => {
    if (index == state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true})
    }
  }

  const playNextTrack = () => {
    const newIndex = state.currentTrackIndex === (state.tracks.length - 1) ? 0 : (state.currentTrackIndex + 1);
    playTrack(newIndex); 
  }

  const playPreviousTrack = () => {
    const newIndex = state.currentTrackIndex === 0 ? (state.tracks.length - 1) : (state.currentTrackIndex - 1);
    playTrack(newIndex); 
  }

  const playRandomTrack = () => {
    const randomIndex = Math.floor((Math.random() * state.tracks.length));
    console.log(randomIndex);
    playTrack(randomIndex);
  }

  return {
    togglePlay,
    playTrack,
    playNextTrack,
    playPreviousTrack,
    playRandomTrack,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
  };
};

export { useMusicPlayer };