'use client';

import React, { useRef, useState, useEffect } from 'react';
import bgmStyles from './BGM.module.css';
type PlaylistItem = {
  title: string;
  src: string;
};

const playlist: PlaylistItem[] = [
  {
    title: '임정희 Golden Lady (feat.현아)',
    src: 'bgm/Golden Lady.mp3',
  },
];

const Bgm: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div className={bgmStyles['bgm-section']}>
      <div className={bgmStyles.bgm}>
        <p>BGM</p>
      </div>
      <div className={bgmStyles['bgm-play-wrapper']}>
        <div className={bgmStyles['current-playlist-wrapper']}>
          <p>{playlist[0].title}</p>
        </div>
        <div className={bgmStyles['play-button']}>
          <button onClick={togglePlayPause}>
            {isPlaying ? '■ 일시정지' : '▶️ 재생'}
          </button>
        </div>
        <audio ref={audioRef} src={playlist[0].src} />
      </div>
    </div>
  );
};

export default Bgm;