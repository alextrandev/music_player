import { useMusicPlayer } from "../hooks/useMusicPlayer";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';

function PlayerControls() {
  const music = useMusicPlayer();

  return (
    <>
      <div>
        <p>Current track: {music.currentTrackName}</p>
      </div>
      <button onClick={music.playPreviousTrack}>
        <SkipPreviousIcon />
      </button>
      <button onClick={music.togglePlay}>
        {music.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </button>
      <button onClick={music.playRandomTrack}>
        <ShuffleIcon />
      </button>
      <button onClick={music.playNextTrack}>
        <SkipNextIcon />
      </button>
    </>
  );
}

export default PlayerControls;