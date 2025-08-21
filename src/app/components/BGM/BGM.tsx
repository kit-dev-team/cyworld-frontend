"use client";

import React, { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { isPlayingAtom, curTrackAtom } from "../../store/bgmStore";
import bgmStyles from "./BGM.module.css";

const playlist = [
  {
    title: "임정희 Golden Lady (feat.현아)",
    src: "bgm/Golden Lady.mp3",
  },
];

const Bgm: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [curTrack, setCurTrack] = useAtom(curTrackAtom);

  useEffect(() => {
    if (!curTrack) {
      setCurTrack(playlist[0]);
    }
  }, [curTrack, setCurTrack]);

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
    <div className={bgmStyles["bgm-section"]}>
      <div className={bgmStyles.bgm}>
        <p>BGM</p>
      </div>
      <div className={bgmStyles["bgm-play-wrapper"]}>
        <div className={bgmStyles["current-playlist-wrapper"]}>
          <p>{curTrack?.title}</p>
        </div>
        <div className={bgmStyles["play-button"]}>
          <button onClick={togglePlayPause}>
            {isPlaying ? "■ 일시정지" : "▶️ 재생"}
          </button>
        </div>
        {curTrack?.src && <audio ref={audioRef} src={curTrack.src} />}
      </div>
    </div>
  );
};

export default Bgm;
