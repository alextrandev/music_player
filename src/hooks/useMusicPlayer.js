import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);

  // function 1 toogle play
  const togglePlay = () => {
    setState({...state, isPlaying: !state.isPlaying});

    if (state.isPlaying) {
      state.audioPlaying.pause();
    } else {
      state.audioPlaying.pause();
    }
  }



  return {};
};

export { useMusicPlayer };