import { useMusicPlayer } from "../hooks/useMusicPlayer";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function PlayerControls() {
  const music = useMusicPlayer();

  return (
    <>
      <div>
        <p>Current track: {music.currentTrackName}</p>
      </div>
      <button onClick={music.playPreviousTrack}>Previous</button>
      <button onClick={music.togglePlay}>
        {music.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </button>
      <button onClick={music.playRandomTrack}>Random</button>
      <button onClick={music.playNextTrack}>Next</button>
    </>
  );
}

export default PlayerControls;