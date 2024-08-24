import { useMusicPlayer } from "../hooks/useMusicPlayer"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function TrackList() {
  const music = useMusicPlayer();

  return (
    <>
      {music.trackList.map((track, index) => (
        <div key={`${track}_${index}`}>
          {`${index + 1}: ${track.name}`}
          <span>
            <button onClick={() => music.playTrack(index)}>
              {music.isPlaying && music.currentTrackIndex === index ? <PauseIcon /> : <PlayArrowIcon />}
            </button>
          </span>
        </div>
      ))}
    </>
  )
}

export default TrackList