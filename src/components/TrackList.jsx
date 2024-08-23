import { useMusicPlayer } from "../hooks/useMusicPlayer"

function TrackList() {
  const music = useMusicPlayer();

  return (
    <>
      {music.trackList.map((track, index) => (
        <div key={`${track}_${index}`}>
          <button onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? "Pause" : "Play"}
          </button>
          <div>Current track: {track.name}</div>
        </div>
      ))}
    </>
  )
}

export default TrackList