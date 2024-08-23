import { useMusicPlayer } from "../hooks/useMusicPlayer"

function TrackList() {
  const music = useMusicPlayer();

  return (
    <>
      {music.trackList.map((track, index) => (
        <div key={`${track}_${index}`}>
          {`${index + 1}: ${track.name}`}
          <span>
            <button onClick={() => music.playTrack(index)}>
              {music.isPlaying && music.currentTrackIndex === index ? "Pause" : "Play"}
            </button>
          </span>
        </div>
      ))}
    </>
  )
}

export default TrackList