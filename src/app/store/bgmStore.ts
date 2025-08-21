import { atom } from 'jotai'

interface BgmStore {
    title: string,
    src: string
}

export const isPlayingAtom = atom(false);

export const curTrackAtom = atom<BgmStore | null>(null);