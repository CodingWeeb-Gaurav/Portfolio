import { useRef, useState } from 'react';
import { Repeat, Volume2, Play, Pause } from 'lucide-react';
import clsx from 'clsx';

//['Chillwave_Dreams.mp3', 'Dil_kya_kare_sax.mp3', 'Kioku_yosuga_no_sora.mp3', 'Lag_ja_Gale_piano.mp3', 'Moonlit_Glow.mp3', 'Starry_Night.mp3'];
const musicFiles = [
  { name: 'Dil_kya_kare_saxophone', file: 'Dil_kya_kare_sax.mp3' },
  { name: 'Chillwave_Dreams', file: 'Chillwave_Dreams.mp3' },
  { name: 'Kioku_yosuga_no_sora', file: 'Kioku_yosuga_no_sora.mp3' },
    { name: 'Lag_ja_Gale_piano', file: 'Lag_ja_Gale_piano.mp3' },
    { name: 'Moonlit_Glow', file: 'Moonlit_Glow.mp3' },
    { name: 'Starry_Night', file: 'Starry_Night.mp3' }
];

export default function PlaySong() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeVisible, setVolumeVisible] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    if (!currentSong) {
      playRandomSong();
      return;
    }

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playRandomSong = () => {
    const random = musicFiles[Math.floor(Math.random() * musicFiles.length)];
    setCurrentSong(random);
    const audio = audioRef.current;
    audio.src = `/music/${random.file}`;
    audio.volume = volume;
    audio.play();
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2 rounded-md bg-gray-800 border border-purple-600 text-white shadow-lg">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center bg-purple-500 hover:bg-purple-600 rounded-full transition"
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <div className="flex gap-[2px]">
            <div className="w-[3px] h-4 bg-white animate-wave" />
            <div className="w-[3px] h-6 bg-white animate-wave animation-delay-200" />
            <div className="w-[3px] h-3 bg-white animate-wave animation-delay-400" />
          </div>
        ) : (
          <Play size={20} />
        )}
      </button>

      {/* Change Song Button */}
      <button onClick={playRandomSong} className="hover:bg-gradient-to-r from-purple-400 to-pink-500 transition" title="Change Song">
        <Repeat size={20} />
      </button>

      {/* Song Name
      <div className="text-sm font-medium truncate w-32">
        {currentSong ? currentSong.name : 'No song playing'}
      </div> */}

      {/* Volume Control
      <div className="relative">
        <button onClick={() => setVolumeVisible(!volumeVisible)} title="Volume">
          <Volume2 size={20} className="hover:text-purple-400 transition" />
        </button>
        {volumeVisible && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="absolute right-0 w-28 rotate-[-90deg] origin-top translate-y-[-70px] bg-purple-500"
          />
        )}
      </div> */}

      {/* Hidden Audio */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
      
      {/* Animation CSS */}
      <style>
        {`
          @keyframes wave {
            0% { transform: scaleY(1); }
            50% { transform: scaleY(2); }
            100% { transform: scaleY(1); }
          }
          .animate-wave {
            animation: wave 1s infinite ease-in-out;
          }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
}
